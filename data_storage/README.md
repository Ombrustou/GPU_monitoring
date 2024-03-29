# Data Storage

This repository is in charge of the creation of the database for the GPU_Monitoring

## Getting Started with Docker

To get started with data_storage part of GPU monitoring-AURORA, follow these steps:

- Navigate to data_storage folder:

```bash
cd data_storage
```

- Build the Docker image:

```shell
docker build -t data-storage .
```

- Run the data_storage container:

```bash
docker run -d --name data-storage-container -v /path/to/shared/folder:/data/db --network=host data-storage
```

The data_storage container will be running and accessible on port 2707. Make sure to replace /path/to/shared/folder with the actual path to the shared folder on your host machine.
