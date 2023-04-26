import paramiko
import time
from pymongo import MongoClient

mongoClient = MongoClient('localhost', 27017)
db = mongoClient.GPU_monitoring

computer_notResponding = {}

while True:
    with open('query_targets.txt', 'r') as f:
        content = f.read()
        #Parse different
        computers = content.split("\n")
        #Parse each line
        computers = [computer.split(",") for computer in computers]

        for computer in computers:
            client = paramiko.SSHClient()
            client.load_system_host_keys()
            try:
                client.connect(computer[0], username=computer[1], password=computer[2])


                stdin, stdout, stderr = client.exec_command('nvidia-smi --query-gpu=index,name,temperature.gpu,memory.total,memory.used --format=csv index, name, temperature.gpu, memory.total [MiB], memory.used [MiB]')
                output = stdout.read().decode()
                
                gpus = output.split("\n")[1:-1]
                gpus = [gpu.split(", ") for gpu in gpus]

                obj = []
                for gpu in gpus:
                    obj.append({"number":int(gpu[0]),"name":gpu[1],"temperature":float(gpu[2]),"max_capacity":float(gpu[3].split(" ")[0]),"usage":float(gpu[4].split(" ")[0])})

                print(obj)    
                #db.data.update_one({"IP":computer[0]},{$set {"IP":computer[0],"GPU":obj, "no_response":0}},{ "upsert" : "true" })
            except:
                if(computer[0] in computer_notResponding):
                    computer_notResponding[computer[0]] += 1
                    #db.data.update_one({"IP":computer[0]},{$set {"IP":computer[0], "no_response":computer_notResponding[computer[0]], "GPU":[]}},{ "upsert" : "true" })
                else:
                    computer_notResponding[computer[0]] = 1 
            finally:
                client.close()
        
    
    time.sleep(1)
