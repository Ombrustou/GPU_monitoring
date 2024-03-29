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
                hostname:{
                    bsonType: "string",
                    description: "Hostname must be a string"
                },
                history:{
                    bsonType: "array",
                    items: {
                        bsonType: "object",
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
                                    required: ["uuid","number", "name", "temperature", "memory_usage", "gpu_usage","processus"],
                                    properties: {
                                        uuid:{
                                            bsonType: "string",
                                            description: "The uuid must be a string"
                                        },
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
                                        },
                                        processus:{
                                            bsonType: "array",
                                            items: {
                                                bsonType: "object",
                                                required: ["user","pid","cpu","mem","gpu_memory"],
                                                properties:{
                                                    user: {
                                                        bsonType: "string",
                                                        description: "user must be a string"
                                                    },
                                                    pid: {
                                                        bsonType: "int",
                                                        minimum: 0, 
                                                        description: "The pid must be an integer greater than 0"
                                                    },
                                                    cpu: {
                                                        bsonType: "int",
                                                        minimum: 0,
                                                        description: "The cpu must be an integer higher than 0"
                                                    },
                                                    mem: {
                                                        bsonType: "int",
                                                        minimum: 0,
                                                        description: "The memory must be a float greater than 0"
                                                    },
                                                    gpu_memory: {
                                                        bsonType: "int",
                                                        minimum: 0,
                                                        description: "The GPU_memory must be a integer higher than 0"
                                                    }
                                                }
                                            }
                                        }
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