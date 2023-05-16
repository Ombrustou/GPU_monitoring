#Written by COSTAMAGNA Baptiste
import paramiko
import time
from pymongo import MongoClient

mongoClient = MongoClient('localhost', 27017)
db = mongoClient.monitoring

#Create a dict to store number of response not
computer_notResponding = {}

while True:
    # Query the collection for documents with the 'name' field equal to 'John'
    computers = db.computer.find({})

    # Iterate over the cursor and print each document
    for computer in computers:
        #Create a client
        client = paramiko.SSHClient()
        client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

        #If we can connect to the remote computer
        try:
            client.connect(computer['IP'], username=computer['username'], password=computer['password'])

            stdin, stdout, stderr = client.exec_command('nvidia-smi --query-gpu=index,name,temperature.gpu,memory.total,memory.used --format=csv index, name, temperature.gpu, memory.total [MiB], memory.used [MiB]')
            output = stdout.read().decode()

            gpus = output.split("\n")[1:-1]
            gpus = [gpu.split(", ") for gpu in gpus]

            obj = []
            for gpu in gpus:
                obj.append({"number":int(gpu[0]),"name":gpu[1],"temperature":float(gpu[2]),"max_capacity":float(gpu[3].split(" ")[0]),"usage":float(gpu[4].split(" ")[0])})

            computer_notResponding[computer['IP']] = 0

            #Update the document for the IP, if it doesn't exist insert a new one
            db.data.update_one({"IP":computer['IP']},{"$set" : {"IP":computer['IP'],"GPU":obj, "no_response":0}},True)
        #If the remote computer is unreachable
        except:
            print("Couldn't reach ", computer['IP'])
            if(computer['IP'] in computer_notResponding):
                computer_notResponding[computer['IP']] += 1
            else:
                computer_notResponding[computer['IP']] = 1 
                
            #Update the document for the IP, if it doesn't exist insert a new one
            db.data.update_one({"IP":computer['IP']},{"$set": {"IP":computer['IP'], "no_response":computer_notResponding[computer['IP']], "GPU":[]}},True)
        finally:
            client.close()
        
    
    time.sleep(1)
