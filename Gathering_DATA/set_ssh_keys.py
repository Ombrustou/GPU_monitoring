import paramiko

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
client.connect('172.24.198.18', username='gpuq', password='data123')

# print the server host key
key = client.get_transport().get_remote_server_key()

# add the key to the known_hosts file
with open('known_hosts', 'a') as hostfile:
    hostfile.write('172.24.198.18 ' + key.get_name() + ' ' + key.get_base64() + '\n')

client.close()