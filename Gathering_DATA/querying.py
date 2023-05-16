#Written by COSTAMAGNA Baptiste
import paramiko
import time
from pymongo import MongoClient

mongoClient = MongoClient('localhost', 27017)
db = mongoClient.monitoring

while True:
    # Query the collection for documents with the 'name' field equal to 'John'
    computers = db.computer.find({})

    # Iterate over the cursor and print each document
    for computer in computers:
        print(computer['IP'])
        #Create a client
        client = paramiko.SSHClient()
        client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

        #If we can connect to the remote computer
        try:
            client.connect(computer['IP'], username=computer['username'], password=computer['password'])

            stdin, stdout, stderr = client.exec_command('nvidia-smi --query-gpu=index,name,temperature.gpu,utilization.memory,utilization.gpu --format=csv index, name, temperature.gpu, utilization.memory, utilization.gpu')
            output = stdout.read().decode()

            gpus = output.split("\n")[1:-1]
            gpus = [gpu.split(", ") for gpu in gpus]

            obj = []
            for gpu in gpus:
                obj.append({"number":int(gpu[0]),"name":gpu[1],"temperature":float(gpu[2]),"memory_usage":float(gpu[3].split(" ")[0]),"gpu_usage":float(gpu[4].split(" ")[0])})


            #Update the document for the IP, if it doesn't exist insert a new one
            db.data.update_one({"IP":computer['IP']},{"$set":{"IP":computer['IP']},"$push": {"history":{"timestamp":time.time(), "GPU":obj}}},True)
        #If the remote computer is unreachable
        except:
            print("Couldn't reach ", computer['IP'])
            #Update the document for the IP, if it doesn't exist insert a new one
            db.data.update_one({"IP":computer['IP']},{"$set":{"IP":computer['IP']},"$push": {"history":{"timestamp":time.time(), "GPU":[]}}},True)
        finally:
            client.close()
        
    
    time.sleep(1)
