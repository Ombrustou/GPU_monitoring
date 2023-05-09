//This files has to be executed at the initialisation of the database, as the database stores data in host after doing that once after the build it wills runs forever with all the changes made. 
use monitoring

//Initialize what a computer should looks like
db.createCollection("computer", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["IP","username","password"],
            properties: {
                IP: {
                    bsonType: "string",
                    description: "The IP must be a string"
                },
                username: {
                    bsonType: "string",
                    description: "The username must be a string"
                },
                password: {
                    bsonType: "string",
                    description: "The password must be a string"
                }
            }
        }
    }
})

//Comment the following line to not insert computers to begin with
db.computer.insertMany([{IP:"172.24.198.18",username:"gpuq",password:"data123"},{IP:"172.24.198.19",username:"gpuq",password:"data123"}])

//Initialize what should looks like a data document
db.createCollection("data", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["IP","no_response","GPU"],
            properties: {
                IP: {
                    bsonType: "string",
                    description: "The IP need to be a string"
                },
                no_response:{
                    bsonType: "int",
                    description: "It must be an integer"
                },
                GPU: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["number", "name", "temperature", "usage", "max_capacity"],
                        properties: {
                            number:{
                                bsonType: "int",
                                minimum: 0,
                                description: "The number of the GPU need to be an Integer and need to be higher than 0"
                            },
                            name: {
                                bsonType: "string",
                                description: "The name of the GPU need to be a string"
                            },
                            temperature: {
                                bsonType: "double",
                                description: "The temperature of the GPU need to be a double"
                            },
                            usage: {
                                bsonType: "double",
                                minimum: 0,
                                description: "the usage of the GPU need to be a double and need to be higher than 0"
                            },
                            max_capacity: {
                                bsonType: "double",
                                minimum: 0,
                                description: "The maximum capacity of the GPU need to be a double and need to be higher than 0"
                            }
                        }
                    }
                }
            }
        }
    }
})