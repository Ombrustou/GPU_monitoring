#Written by COSTAMAGNA Baptiste
import paramiko
import time
from pymongo import MongoClient

querying_interval = 1 #in seconds
history_interval = 300 #in seconds
mongoClient = MongoClient('localhost', 27017)
db = mongoClient.monitoring


lastHistory = {}
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

            stdin, stdout, stderr = client.exec_command('last reboot')
            output = stdout.read().decode()
            lastReboot = " ".join(output.split("\n")[1].split(" ")[3:8])

            #This huge bash line returns the uuid of a gpu and informations about a processus running on the GPU
            # Output have this shape :
            # GPU-3b929a5f-6b42-01db-a07d-578246bde26a
            # gpuq 19726 121 53.6 1:53
            #
            # Where gpuq is the user who launched the processus
            # 19726 is the PID of the processus
            # 121 is the percentage of the CPU used by the processus
            # 53.6 is the percentage of the memory used by the processus
            # 
            stdin, stdout, stderr = client.exec_command('nvidia-smi --query-compute-apps=pid,gpu_uuid --format=csv,noheader,nounits | awk -F\', \' \'{cmd0="echo "$2; cmd1="ps --noheaders u"$1" | awk \\"{print \\\$1, \\\$2,\\\$3, \\\$4, \\\$10}\\""; system(cmd0" && "cmd1)}\'')
            output = stdout.read().decode()

            # test of a typical output 
            output = "GPU-3583dcda-fdae-b3a4-48c7-86d9064108aa\ngpuq 19726 121 53.6 1:53"

            lines = output.split("\n")
            process = {}
            lastGPU = ""
            for line in lines:
                if(lastGPU == ""):
                    lastGPU = line
                    if(line in process):
                        process[line].append({})
                    else:     
                        process[line] = [{}]
                else:
                    splitted = line.split(" ")
                    process[lastGPU][-1]["user"] = splitted[0]
                    process[lastGPU][-1]["pid"] = int(splitted[1])
                    process[lastGPU][-1]["cpu"] = int(splitted[2])
                    process[lastGPU][-1]["mem"] = float(splitted[3])
                    lastGPU = ""

            stdin, stdout, stderr = client.exec_command('nvidia-smi --query-gpu=gpu_uuid,index,name,temperature.gpu,utilization.memory,utilization.gpu --format=csv,noheader,nounits')
            output = stdout.read().decode()

            gpus = output.split("\n")[:-1]
            gpus = [gpu.split(", ") for gpu in gpus]

            obj = []
            for gpu in gpus:
                if(gpu[0] in process):
                    obj.append({"uuid":gpu[0], "number":int(gpu[1]),"name":gpu[2],"temperature":int(gpu[3]),"memory_usage":int(gpu[4]),"gpu_usage":int(gpu[5]), "processus":process[gpu[0]]})
                else:
                    obj.append({"uuid":gpu[0], "number":int(gpu[1]),"name":gpu[2],"temperature":int(gpu[3]),"memory_usage":int(gpu[4]),"gpu_usage":int(gpu[5]), "processus":[]})

            if(computer['IP'] not in lastHistory):
                lastHistory[computer['IP']] = time.time()
                #Update the document for the IP, if it doesn't exist insert a new one
                db.data.update_one({"IP":computer['IP']},{"$set":{"IP":computer['IP'],"last_reboot":lastReboot},"$push": {"history":{"timestamp":time.time(), "GPU":obj}}},True)
            else:
                if(time.time() - lastHistory[computer['IP']] >= 300):
                    lastHistory[computer['IP']] = time.time()
                    #Update the document for the IP, if it doesn't exist insert a new one
                    db.data.update_one({"IP":computer['IP']},{"$set":{"IP":computer['IP'],"last_reboot":lastReboot},"$push": {"history":{"timestamp":time.time(), "GPU":obj}}},True)
                else:
                    history = db.data.find_one({"IP":computer['IP']})["history"]
                    history[-1]={"timestamp":time.time(), "GPU":obj}
                    #Update the document for the IP, if it doesn't exist insert a new one
                    db.data.update_one({"IP":computer['IP']},{"$set":{"IP":computer['IP'],"last_reboot":lastReboot,"history":history}},True)

        #If the remote computer is unreachable
        except:
            print("Couldn't reach ", computer['IP'])
            #Update the document for the IP, if it doesn't exist insert a new one
            db.data.update_one({"IP":computer['IP']},{"$set":{"IP":computer['IP'],"last_reboot":"No information"},"$push": {"history":{"timestamp":time.time(), "GPU":[]}}},True)
        finally:
            client.close()

    time.sleep(querying_interval)
