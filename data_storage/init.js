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

//Initialize what should looks like a data document
db.createCollection("data", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["IP","history","last_reboot"],
            properties: {
                IP: {
                    bsonType: "string",
                    description: "The IP need to be a string"
                },
                last_reboot:{
                    bsonType: "string",
                    description: "The last_reboot must be a string"
                },
                history:{
                    bsonType: "array",
                    required: ["timestamp","GPU"],
                    properties:{
                        timestamp:{
                            bsonType: "int",
                            description: "The timestamp must be an integer"
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
                                        bsonType: "int",
                                        description: "The temperature of the GPU need to be a double"
                                    },
                                    memory_usage: {
                                        bsonType: "int",
                                        minimum: 0,
                                        description: "the usage of the memory need to be an int and need to be higher than 0"
                                    },
                                    gpu_usage: {
                                        bsonType: "int",
                                        minimum: 0,
                                        description: "The usage of the GPU need to be an int and need to be higher than 0"
                                    }
                                }
                            }
                        }
                    }
                } 
            }
        }
    }
})