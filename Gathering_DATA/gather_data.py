import paramiko

client = paramiko.SSHClient()
client.load_system_host_keys()
client.connect('172.24.198.18', username='gpuq', password='data123')


stdin, stdout, stderr = client.exec_command('nvidia-smi --query-gpu=index,name,temperature.gpu,memory.total,memory.used,memory.free --format=csv index, name, temperature.gpu, memory.total [MiB], memory.used [MiB], memory.free')
output = stdout.read().decode()
print(output)


client.close()