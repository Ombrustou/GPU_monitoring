# GPU Monitoring - DATA_Gathering

Welcome to the DATA_Gathering folder of the GPU Monitoring GitHub repository! This folder contains the necessary files for data gathering using the AURORA (Automated Utility for Real-time Observation and Reporting of Activity) tool.

## Table of Contents
- [Contents](#contents)
- [Getting Started with Docker](#getting-started)
- [Contributors](#contributors)
## Contents

- [querying.py](querying.py): This Python script is responsible for querying the Mongo database using Pymongo to retrieve the list of remote computers to query. It utilizes Paramiko to establish SSH connections with the remote computers and gather data about the GPU state.


- [requirements.txt](requirements.txt): This file lists the Python libraries required to run the [querying.py](querying.py) script.


- [Dockerfile](Dockerfile): This Dockerfile is provided to build a Docker image that runs the AURORA application. It ensures all dependencies are properly installed and sets up the environment for seamless execution.

## Getting Started with Docker

To get started with Gathering_DATA part of GPU monitoring-AURORA, follow these steps:

- Navigate to Gathering_DATA folder:

```bash
cd Gathering_DATA
```

- Build the Docker image:

```shell
docker build -t data-gathering .
```

- Run the data_gathering container, using the host network:

**/!\ Before running the data gathering Docker container, make sure that the data_storing Docker container is already running. The data_storing container is responsible for storing the collected data. Ensure that you have followed the instructions in the DATA_Storing folder of this repository to set up and run the data_storing container.**

```bash
docker run -d --name data-gathering-container --network=host data-gathering
```

The data_gathering container will be running using the host network, allowing access to the data storage and remote computers.

## Contributors

This part is mainly maintained by COSTAMAGNA Baptiste ([Ombrustou](https://github.com/Ombrustou))