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


## Data to test the API

You can use the following commands to verify if the API is working well.

To add a computer
> curl -X POST http://localhost:3001/computer -H 'Content-Type: application/json' -d '{"IP":"172.24.198.42","username":"my_username","password":"my_password"}'

To modify a computer
>curl -X PUT http://localhost:3001/computer/172.24.198.42/192.168.0.100/admin/password123 -H "Content-Type: application/json" -d '{"IP":"192.168.0.100","username":"admin","password":"password123"}' 

To delete a computer
>curl -X DELETE http://localhost:3001/computer/192.168.0.100 -H 'Content-Type: application/json' -d '{"IP": "192.168.0.100"}'