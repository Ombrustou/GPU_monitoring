# HOW TO USE THE API

## What is this API for?

This API is used to gather the data from a set of computer.

So the its main goal is to get some data.
However you can still manage the set of computer thanks to the API.

## How does it work?

In order to get the data you first need to setup the database.
See the information in this [File](../data_storage/README.md).

The default port of the API is 3001

When your database is setup now you can add a computer with the */computer*.
To make it work you need to have a complete object that look like this in the request body :

> {"IP":"192.27.0.1","username":"my_username","password":"my_password"}

If you want to update this computer you can use */computer/:ip/:IP/:username/:password*
with *ip* as the previous IP of the computer and *IP* as the new one.

You also need to give the new object in the request body.

At last if you want to delete a computer from the database. You can use */computer/:ip*
with *ip* as the IP of the computer you want to delete. You need to give the IP in the request body as like this:

> {"IP": "192.168.0.100"}

Finally when your set of computer is done, you can now get some data from the computer you've added.
To get this data you can use the */monitoring*
You'll be receiving all the data as a JSON file.

If you only want to retrieve the information for every computer and only get the last activity on them you can use */last*
With that you will receive this type of data:

```javascript
_id: ObjectId("646b7b66477a2e61522d55ff"),
IP: '127.0.0.1',
history: [
    {
      timestamp: 1684765565.0283391,
      GPU: [
        {
          uuid: 'GPU-uuid1',
          number: 0,
          name: 'GeForce GTX 1080 Ti',
          temperature: 31,
          max_memory: 11175,
          memory_usage: 0,
          gpu_usage: 0,
          process: [
            {
              user: 'Me',
              pid: 123,
              cpu: 20,
              memory: 42,
              gpu_memory: 15,
              exec: 'smt.py'
            }
          ]
        },
        {
          uuid: 'GPU-uuid2',
          number: 1,
          name: 'GeForce GTX 1080 Ti',
          temperature: 28,
          max_memory: 11178,
          memory_usage: 0,
          gpu_usage: 0,
          process: [
            {
              gpu_memory: 3318,
              user: 'gpuq',
              pid: 19726,
              cpu: 88,
              memory: 53.6
            }
          ]
        }
      ]
    }
  ],
hostname: 'JohnDoe',
last_reboot: 'May  2 16:15 2023'
```

## Getting Started with Docker

To get started with API part of GPU monitoring-AURORA, follow these steps:

- Navigate to API folder:

```bash
cd API
```

- Build the Docker image:

```shell
docker build -t api .
```

- Run the API container, linking it to the data_storage container:

**/!\ Before running the data gathering Docker container, make sure that the data_storing Docker container is already running. The data_storing container is responsible for storing the collected data. Ensure that you have followed the instructions in the DATA_Storing folder of this repository to set up and run the data_storing container.**

```bash
docker run -d --name api-container --network=host api
```

The api container will be running and accessible on port 3001. It is linked to the data-storage-container to ensure access to the data storage.

## Data to test the API

You can use the following commands to verify if the API is working well.

To add a computer
> curl -X POST http://localhost:3001/computer -H 'Content-Type: application/json' -d '{"IP":"172.24.198.42","username":"my_username","password":"my_password"}'

To modify a computer
>curl -X PUT http://localhost:3001/computer/172.24.198.42 -H "Content-Type: application/json" -d '{"IP":"192.168.0.100","username":"admin","password":"password123"}' 

To delete a computer
>curl -X DELETE http://localhost:3001/computer/192.168.0.100 -H 'Content-Type: application/json' -d '{"IP": "192.168.0.100"}'