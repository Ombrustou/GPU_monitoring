# GPU Monitoring - AURORA (Automated Utility for Real Time Observation and Reporting of Activity)

<p align="center">
    <img src="vapLogo.png" alt="vaplab Logo">
</p>

This repository contains the development of a GPU monitoring tool called AURORA (Automated Utility for Real Time Observation and Reporting of Activity) for the VAPLAB (Visualization and Performance Laboratory) at Aalborg University.

AURORA is a powerful tool designed to monitor GPU utilization on remote machines. It provides real-time observation and reporting of GPU activity, allowing researchers and system administrators to effectively monitor and analyze GPU performance.


## Table of Contents

- [Introduction](#introduction)
- [Components](#components)
- [Getting Started with Docker-Compose](#getting-started-with-docker-compose)
- [Getting Started with Docker](#getting-started-with-docker)
- [Contributors](#contributors)

## Introduction

The GPU Monitoring repository contains the development of AURORA, a comprehensive tool for monitoring and analyzing the utilization of GPUs on remote machines. AURORA provides real-time monitoring of GPU activity and generates detailed reports for performance analysis.

## Components

This repository is organized into the following subdirectories, each focusing on a specific aspect of AURORA:

- [API](./API/README.md): This directory contains the API module responsible for handling communication between the monitoring tool and the remote machines.

- [Gathering DATA](./Gathering_DATA/README.md): Here, you'll find the module responsible for gathering GPU utilization data from the remote machines.

- [Display](./Display/README.md): This directory contains the module responsible for displaying real-time GPU activity and generating visualizations.

- [Data Storage](./data_storage/README.md): Here, you'll find the module responsible for storing and managing the collected GPU utilization data.

Please refer to the respective README files in each subdirectory for detailed information on their functionalities, usage, and configuration.

## Getting Started with Docker-Compose

To get started with GPU monitoring-AURORA using Docker-Compose, follow these steps:

- Make sure you have Docker and Docker-Compose installed on your machine. If not, please refer to the [Docker documentation](https://docs.docker.com) for instructions on how to install them.

- Clone the GPU Monitoring repository to your local machine:

```bash
git clone https://github.com/your-username/GPU_monitoring.git
```
- Navigate to the root directory of the repository:

```bash
cd GPU_monitoring
```

- Open the docker-compose.yml file and review the configuration. Ensure that the ports 80, 27017, and 3001 are not already in use on your machine. If they are, you may need to modify the docker-compose.yml file to use different ports or free up the conflicting ports on your machine, if your not familiar with that follow the [Getting started with Docker](#getting-started-with-docker).

- Run the following command to start the Docker containers using Docker-Compose:

```bash
sudo docker-compose up
```

The Docker-Compose command will build and start the necessary containers for AURORA, including the API, data gathering, display, and data storage components.

- Once the containers are up and running, if it's the first time you run it you will need to [initialize the database](./data_storage/README.md#initialize-the-database)

Now Aurora should be running and the UI should be accessible in your navigator [here](http://localhost:80)

## Getting Started with Docker

To get started with GPU monitoring-AURORA using Docker, follow these steps:

- Make sure you have Docker installed on your machine. If not, please refer to the [Docker documentation](https://docs.docker.com) for instructions on how to install it.

- Clone the GPU Monitoring repository to your local machine:

```bash
git clone https://github.com/Ombrustou/GPU_monitoring.git
```

- Navigate to the root directory of the repository:

```bash
cd GPU_monitoring
```

- [Build and run the data_storage docker](./data_storage/README.md#getting-started-with-docker)

- [Build and run the API docker](./API/README.md#getting-started-with-docker)

- [Build and run the Gathering_DATA docker](./Gathering_DATA//README.md#getting-started-with-docker)

- [Build and run the Display docker](./Display/README.md#getting-started-with-docker)

Feel free to adjust the container names, ports, and shared folder path to suit your specific setup. Enjoy monitoring and analyzing GPU activity using AURORA !

## Contributors

AURORA - GPU Monitoring is developed by the dedicated team of interns mentored by [Mark Philip Philipsen](https://github.com/markpp) at the VAPLAB of Aalborg University.

### Interns:

- JAMET Titouan ([Mouaaa](https://github.com/Mouaaa))
- LAGREE Titouan ([YxandAr](https://github.com/YxandAr))
- COSTAMAGNA Baptiste ([Ombrustou](https://github.com/Ombrustou))


Feel free to explore the different subdirectories and begin monitoring and analyzing GPU activity using AURORA.
