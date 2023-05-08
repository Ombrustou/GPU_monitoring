# Data Storage

This repository is in charge of the creation of the database for the GPU_Monitoring

init.js if a file to execute to initialize the database before it first utilisation, or after erasing it.

So after building and running the docker that makes run the database, you have to connect to the database with a mongosh client and execute a the init.js file.

Command line (from the root of the docker):

mongosh < data_storage/init.js

If you want to start without any computer you can delete or comment the line starting by db.computer.insertMany

