#Written by COSTAMAGNA Baptiste
import paramiko
import time
from pymongo import MongoClient

mongoClient = MongoClient('localhost', 27017)
db = mongoClient.monitoring

#Create a dict to store number of response not
computer_notResponding = {}

while True:
    with open('query_targets.txt', 'r') as f:
        content = f.read()
        #Parse different
        computers = content.split("\n")
        #Parse each line
        computers = [computer.split(",") for computer in computers]

        for computer in computers:
            #Create a client
            client = paramiko.SSHClient()
            client.load_system_host_keys()

            #If we can connect to the remote computer
            try:
                client.connect(computer[0], username=computer[1], password=computer[2])


                stdin, stdout, stderr = client.exec_command('nvidia-smi --query-gpu=index,name,temperature.gpu,memory.total,memory.used --format=csv index, name, temperature.gpu, memory.total [MiB], memory.used [MiB]')
                output = stdout.read().decode()
                
                gpus = output.split("\n")[1:-1]
                gpus = [gpu.split(", ") for gpu in gpus]

                obj = []
                for gpu in gpus:
                    obj.append({"number":int(gpu[0]),"name":gpu[1],"temperature":float(gpu[2]),"max_capacity":float(gpu[3].split(" ")[0]),"usage":float(gpu[4].split(" ")[0])})
    
                computer_notResponding[computer[0]] = 0

                #Update the document for the IP, if it doesn't exist insert a new one
                db.data.update_one({"IP":computer[0]},{"$set" : {"IP":computer[0],"GPU":obj, "no_response":0}},True)
            #If the remote computer is unreachable
            except:
                if(computer[0] in computer_notResponding):
                    computer_notResponding[computer[0]] += 1
                else:
                    computer_notResponding[computer[0]] = 1 
                #Update the document for the IP, if it doesn't exist insert a new one
                db.data.update_one({"IP":computer[0]},{"$set": {"IP":computer[0], "no_response":computer_notResponding[computer[0]], "GPU":[]}},True)
            finally:
                client.close()
        
    
    time.sleep(100)
