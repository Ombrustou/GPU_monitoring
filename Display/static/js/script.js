const app = Vue.createApp({

  data() {
    return {
      //Sidebar status
      collapsed: true,
      
      /* --  Logs -- */
      //Contains the list of all active logs
      logs: [],
      //Various arrays used to temporary store the different logged behaviors to prevent them stacking in the log list
      disconnectedPC: [],
      overheating: [],
      overused: [],
      overloading: [],


      /*  -- Modal  -- */
      //temporary stores a computer for later use through the Deletion modal
      selectedComputer: {},
      //Used to temporary store and send new pc data through the Adding modal
      newComputer: {
        IP: "",
        username: "",
        password: ""
      },

      /* -- Carousel -- */
      //Define the index of the active carousel item: the displayed one
      activeIndex: 0,
      //Stores the reference of the setInterval() which is swapping automatically the carousel items
      autoChangeInterval: null,
      //Stores the reference of the setInterval() which is holding the carousel item still for 5minutes
      userSelectionTimeout: null,

      computerList:[{
        IP: "192.168.123.124",
        lastResponse: 0,
        hostname: 'Hartley',
        last_reboot: 'May  2 16:15 2023',
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:100,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        }],
        CPU: 0,
        MEMORY: 5
      },
      {
        IP: "192.168.123.125",
        lastResponse: 65,
        hostname: 'Hartley0.5',
        last_reboot: 'May  2 16:15 2023',
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 2,
          name: "NVIDIA GeForce GTX 1080 Ti",            
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 3,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 4,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'neelu',
              pid: 2007,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 5,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'neelu',
              pid: 2007,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]

        }]
      },{
        IP: "192.168.123.126",
        lastResponse: 1554,
        hostname: 'Hartley0.9',
        last_reboot: 'May  2 16:15 2023',
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 2,
          name: "NVIDIA GeForce GTX 1080 Ti",            
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 3,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 4,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'neelu',
              pid: 2007,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 5,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'neelu',
              pid: 2007,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]

        }]
      },{
        IP: "192.168.123.127",
        lastResponse: 0,
        hostname: 'Hartley1',
        last_reboot: 'May  2 16:15 2023',
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 2,
          name: "NVIDIA GeForce GTX 1080 Ti",            
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 3,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 4,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'neelu',
              pid: 2007,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 5,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'neelu',
              pid: 2007,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]

        }],
        CPU: 0,
        MEMORY: 5
      },{
        IP: "192.168.123.128",
        lastResponse: 0,
        hostname: 'Hartley2',
        last_reboot: 'May  2 16:15 2023',
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 2,
          name: "NVIDIA GeForce GTX 1080 Ti",            
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            },
            {
              gpu_memory: 330,
              user: 'neelu',
              pid: 2007,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 3,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 4,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'neelu',
              pid: 2007,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 5,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'neelu',
              pid: 2007,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]

        }]
      },{
        IP: "192.168.123.129",
        lastResponse: 0,
        hostname: 'Hartley3',
        last_reboot: 'May  2 16:15 2023',
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        }]
      },{
        IP: "192.168.123.121",
        lastResponse: 3,
        hostname: 'Hartley3.5',
        last_reboot: 'May  2 16:15 2023',
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        }]
      },{
        IP: "192.168.123.122",
        lastResponse: 0,
        hostname: 'Hartley4',
        last_reboot: 'May  2 16:15 2023',
            GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        }]
      },{
        IP: "192.168.123.120",
        lastResponse: 0,
        hostname: 'Hartley5',
        last_reboot: 'May  2 16:15 2023',
            GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        }]
      },{
        IP: "192.168.123.134",
        lastResponse: 0,
        hostname: 'Hartley6',
        last_reboot: 'May  2 16:15 2023',
            GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        }]
      },{
        IP: "192.168.123.132",
        lastResponse: 0,
        hostname: 'Hartley7',
        last_reboot: 'May  2 16:15 2023',
            GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        }]
      },{
        IP: "192.168.123.133",
        lastResponse: 0,
        hostname: 'Hartley8',
        last_reboot: 'May  2 16:15 2023',
            GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, 
          max_capacity:400,
          process: [
            {
              gpu_memory: 330,
              user: 'vaplab',
              pid: 5407,
              cpu: 172,
              memory: 228,
              duration: '88:00',
              exec: 'video_demo.py'
            }
          ]
        }]
      },{
        IP: "192.168.123.140",
        lastResponse: 0,
        hostname: 'Hartley2.0',
        last_reboot: 'May  2 16:15 2023',
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          memory_usage: 52,
          gpu_usage: 50, max_capacity:100
        }]
      }],

      history: [{
        timestamp: 1684920213.7491086,
        GPU: [
          {
            uuid: 'GPU-a09a3a37-8bf8-fd16-9c21-9a4314bad018',
            number: 0,
            name: 'GeForce GTX 1080 Ti',
            temperature: 31,
            memory_usage: 42,
            gpu_usage: 45,
            process: [{
              gpu_memory: 40,
              user: 'gpuq',
              pid: 19726,
              cpu: 88,
              memory: 55
            }]
          },
          {
            uuid: 'GPU-3583dcda-fdae-b3a4-48c7-86d9064108aa',
            number: 1,
            name: 'GeForce GTX 1080 Ti',
            temperature: 29,
            memory_usage: 52,
            gpu_usage: 22,
            process: [
              {
                gpu_memory: 30,
                user: 'gpuq',
                pid: 19726,
                cpu: 88,
                memory: 54
              }
            ]
          }
        ],
        CPU: 0,
        MEMORY: 5
      },
      {
        timestamp: 1684920215.568944,
        GPU: [
          {
            uuid: 'GPU-a09a3a37-8bf8-fd16-9c21-9a4314bad018',
            number: 0,
            name: 'GeForce GTX 1080 Ti',
            temperature: 32,
            memory_usage: 43,
            gpu_usage: 42,
            process: []
          },
          {
            uuid: 'GPU-3583dcda-fdae-b3a4-48c7-86d9064108aa',
            number: 1,
            name: 'GeForce GTX 1080 Ti',
            temperature: 29,
            memory_usage: 56,
            gpu_usage: 20,
            process: [
              {
                gpu_memory: 30,
                user: 'gpuq',
                pid: 19726,
                cpu: 88,
                memory: 54
              }
            ]
          }
        ],
        CPU: 0,
        MEMORY: 5
      },
      {
        timestamp: 1684920217.3771875,
        GPU: [
          {
            uuid: 'GPU-a09a3a37-8bf8-fd16-9c21-9a4314bad018',
            number: 0,
            name: 'GeForce GTX 1080 Ti',
            temperature: 32,
            memory_usage: 47,
            gpu_usage: 53,
            process: []
          },
          {
            uuid: 'GPU-3583dcda-fdae-b3a4-48c7-86d9064108aa',
            number: 1,
            name: 'GeForce GTX 1080 Ti',
            temperature: 28,
            memory_usage: 58,
            gpu_usage: 15,
            process: [
              {
                gpu_memory: 30,
                user: 'gpuq',
                pid: 19726,
                cpu: 88,
                memory: 54
              }
            ]
          }
        ],
        CPU: 0,
        MEMORY: 5
      },
      {
        timestamp: 1684920219.1604605,
        GPU: [
          {
            uuid: 'GPU-a09a3a37-8bf8-fd16-9c21-9a4314bad018',
            number: 0,
            name: 'GeForce GTX 1080 Ti',
            temperature: 32,
            memory_usage: 30,
            gpu_usage: 55,
            process: []
          },
          {
            uuid: 'GPU-3583dcda-fdae-b3a4-48c7-86d9064108aa',
            number: 1,
            name: 'GeForce GTX 1080 Ti',
            temperature: 28,
            memory_usage: 48,
            gpu_usage: 26,
            process: [
              {
                gpu_memory: 30,
                user: 'gpuq',
                pid: 19726,
                cpu: 88,
                memory: 54
              }
            ]
          }
        ],
        CPU: 0,
        MEMORY: 5
      },
      {
        timestamp: 1684920220.9572735,
        GPU: [
          {
            uuid: 'GPU-a09a3a37-8bf8-fd16-9c21-9a4314bad018',
            number: 0,
            name: 'GeForce GTX 1080 Ti',
            temperature: 32,
            memory_usage: 20,
            gpu_usage: 60,
            process: []
          },
          {
            uuid: 'GPU-3583dcda-fdae-b3a4-48c7-86d9064108aa',
            number: 1,
            name: 'GeForce GTX 1080 Ti',
            temperature: 28,
            memory_usage: 30,
            gpu_usage: 11,
            process: [
              {
                gpu_memory: 30,
                user: 'gpuq',
                pid: 19726,
                cpu: 88,
                memory: 54
              }
            ]
          }
        ],
        CPU: 0,
        MEMORY: 5
      },
      {
        timestamp: 1684920222.7623262,
        GPU: [
          {
            uuid: 'GPU-a09a3a37-8bf8-fd16-9c21-9a4314bad018',
            number: 0,
            name: 'GeForce GTX 1080 Ti',
            temperature: 31,
            memory_usage: 78,
            gpu_usage: 70,
            process: []
          },
          {
            uuid: 'GPU-3583dcda-fdae-b3a4-48c7-86d9064108aa',
            number: 1,
            name: 'GeForce GTX 1080 Ti',
            temperature: 28,
            memory_usage: 10,
            gpu_usage: 10,
            process: [
              {
                gpu_memory: 30,
                user: 'gpuq',
                pid: 19726,
                cpu: 88,
                memory: 54
              }
            ]
          }
        ],
        CPU: 0,
        MEMORY: 5
      },
      {
        timestamp: 1684920224.5450397,
        GPU: [
          {
            uuid: 'GPU-a09a3a37-8bf8-fd16-9c21-9a4314bad46544018',
            number: 2,
            name: 'GeForce GTX 1080 Ti',
            temperature: 31,
            memory_usage: 50,
            gpu_usage: 80,
            process: []
          },
          {
            uuid: 'GPU-a09a3a37-8bf8-fd16-9c21-9a4314bad018',
            number: 0,
            name: 'GeForce GTX 1080 Ti',
            temperature: 31,
            memory_usage: 50,
            gpu_usage: 80,
            process: []
          },
          {
            uuid: 'GPU-3583dcda-fdae-b3a4-48c7-86d9064108aa',
            number: 1,
            name: 'GeForce GTX 1080 Ti',
            temperature: 28,
            memory_usage: 50,
            gpu_usage: 5,
            process: [
              {
                gpu_memory: 30,
                user: 'gpuq',
                pid: 19726,
                cpu: 88,
                memory: 54
              }
            ]
          }
        ],
        CPU: 0,
        MEMORY: 5
      },
      {
        timestamp: 1684920226.3773,
        GPU: [
          {
            uuid: 'GPU-a09a3a37-8bf8-fd16-9c21-9a4314bad018',
            number: 0,
            name: 'GeForce GTX 1080 Ti',
            temperature: 32,
            memory_usage: 45,
            gpu_usage: 90,
            process: []
          },
          {
            uuid: 'GPU-3583dcda-fdae-b3a4-48c7-86d9064108aa',
            number: 1,
            name: 'GeForce GTX 1080 Ti',
            temperature: 28,
            memory_usage: 55,
            gpu_usage: 0,
            process: [
              {
                gpu_memory: 30,
                user: 'gpuq',
                pid: 19726,
                cpu: 88,
                memory: 54
              }
            ]
          }
        ],
        CPU: 0,
        MEMORY: 5
      }
    ]
  }
  },
  methods: {
    //Simply allows to extend/collapse the sidebar
    toggle: function() {
      this.collapsed = !this.collapsed;
    }, 
    //Query the API to obtain the GPUs information
    gatherLast: async function() {
      appli = this
      await axios.get('http://localhost:3001/last')
      .then(function (response){
        appli.computerList = response.data
      })
      .catch(function (error){
        //handle error
        console.log(error);
        alert("Error From Api");
      });
    },

    getDisconnectedTime: function(seconds) {
      const minute = 60;
      const hour = minute * 60;
      const day = hour * 24;
      const month = day * 30;
    
      let duration = '';        
      if(seconds >= month){
        duration = `${Math.floor(seconds / month)} months ${Math.floor((seconds % month) / day)}d`;
      } else if (seconds >= day) {
        duration = `${Math.floor(seconds / day)}d ${Math.floor((seconds % day) / hour)}h`;
      } else if (seconds >= hour) {
        duration = `${Math.floor(seconds / hour)}h ${Math.floor((seconds % hour) / minute)}m`;
      } else if (seconds >= minute) {
        duration = `${Math.floor(seconds / minute)}m`;
      } else {
        duration = `${seconds}s`;
      }
    
      return duration;
    },

    cleanLogs: function(){
      this.logs = []
      this.overheating = []
      this.overused = []
    },

    delLog: function(log){
      this.logs.splice(this.logs.indexOf(log),1)
    },

    //Returns the url of a led status according to the GPU performances
    status: function(gpu_temperature, gpu_usage, memory_usage){
      const RED = "static/media/dot_red.png" 
      const ORANGE = "static/media/dot_orange.png" 
      const GREEN = "static/media/dot_green.png"

      if(gpu_usage >= 80 || gpu_temperature >= 75 || memory_usage >= 75){
        return RED
      } else if(gpu_usage >= 65 || gpu_temperature >= 60 || memory_usage >= 60) {
        return ORANGE
      } else {
        return GREEN
      }
    },

    autoScroll: function() {
      
      scrollables = document.getElementsByClassName("autoScroll")
      sDown = this


      scrollables.forEach(function(scrollable){
        if (scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight) {
          sDown.autoScrollUp(scrollable)
        } else if (scrollable.scrollTop == 0){
          sDown.autoScrollDown(scrollable)
        }
      })
    },

    autoScrollDown: function (element) {
      var start = element.scrollTop;
      var end = element.scrollHeight - element.clientHeight;
      var duration = 6000; // Duration of the animation in milliseconds
      var startTime = null;
      test = this
    
      function scrollAnimation(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var scroll = test.easeInOutSlow(progress, start, end - start, duration);
        element.scrollTop = scroll;
        if (progress < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }
    
      requestAnimationFrame(scrollAnimation);
    },
    
    // Easing function for smooth animation with slower speed
    easeInOutSlow: function (t, b, c, d) {
      return c * t / d + b;
    },

    autoScrollUp: function(element)  {
      var start = element.scrollTop;
      var end = 0;
      var duration = 100; // Duration of the animation in milliseconds
      var startTime = null;
      test = this
    
      function scrollAnimation(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var scroll = test.easeInOutSlow(progress, start, end - start, duration);
        element.scrollTop = scroll;
        if (progress < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }
    
      requestAnimationFrame(scrollAnimation);
    },
    addComputer: async function(){
      await axios.post("http://localhost:3001/computer", this.newComputer)
      this.gatherLast()
    },
    modifyComputer: async function(index){
      await axios.put("http://localhost:3001/computer" + this.computerList[index].IP, this.selectedComputer)
      this.gatherLast()

    },
    deleteComputer: async function() {
      await axios.delete("http://localhost:3001/computer"+ this.selectedComputer)
      this.gatherLast()
    },

    displayHistory: async function(index) {
      appli = this
      
      await axios.get('http://localhost:3001/history/'+appli.computerList[index].IP)
      .then(function (response){
        appli.history = response.data
      })
      .catch(function (error){
        //handle error
        console.log(error);
        //alert("Error From Api");
      });
      

      // Arrays to store datas
      timestamps = []
      cpuData = []
      memoryData = []

      // Array to store each GPU data
      gpuData = []

      // Crawling over the history data
      this.history.forEach(entry => {
        timestamp = new Date(entry.timestamp*1000).getTime() // timestamp to date
        cpu = entry.CPU
        memory = entry.MEMORY

        timestamps.push(timestamp)
        cpuData.push(cpu)
        memoryData.push(memory)

        // Crawling over the GPUs data
        if(entry.GPU != undefined){
          entry.GPU.forEach(gpu => {
            gpuUsage = gpu.gpu_usage
            gpuMemory = gpu.memory_usage

            // Check if the GPU already exists in gpuData
            existingGPU = gpuData.find(item => item.uuid === gpu.uuid)

            if (existingGPU) {
              // If it does, add the data to its fitting array
              existingGPU.gpuUsage.push(gpuUsage)
              existingGPU.gpuMemory.push(gpuMemory)
            } else {
              // If the GPU doesn't exist, create a new GPU object and add its data
              newGPU = {
                uuid: gpu.uuid,
                gpuUsage: [gpuUsage],
                gpuMemory: [gpuMemory]
              };
              gpuData.push(newGPU);
            }
          })
        }
      })
        
      dataToDisplay = [{
        name: 'CPU usage',
        data: timestamps.map((timestamp, index) => [timestamp, cpuData[index]])
      }, {
        name: 'Memory Usage',
        data: timestamps.map((timestamp, index) => [timestamp, memoryData[index]])
      }]

      gpuData.forEach(gpu => {
        dataToDisplay.push({
          name: "GPU" + gpuData.indexOf(gpu) + " usage",
          data: timestamps.map((timestamp, index) => [timestamp, gpu.gpuUsage[index]])
        },{
          name: "GPU" + gpuData.indexOf(gpu) + " memory",
          data: timestamps.map((timestamp, index) => [timestamp, gpu.gpuMemory[index]])
        })
      })

      Highcharts.chart(this.computerList[index].IP + 'history', {

        title: {
          text: 'History',
          align: 'left'
        },

        subtitle: {
          text: '' + this.computerList[index].hostname + ": " + this.computerList[index].IP,
          align: 'left'
        },
      
        yAxis: {
          title: {
            text: ''
          }
        },
      
        xAxis: {
          type: 'datetime', // Utilisation du type 'datetime' pour les timestamps
          labels: {
            format: '{value:%b-%d %H:%M}' // Format d'affichage des timestamps
          },
          tickPositions: [timestamps[0], timestamps[timestamps.length - 1]]
          

        },
      
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          itemStyle: {
            fontSize: '0.6vw' // Changer la taille de la police de la légende
          }
        },
      
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
          }
        },

        time: {
          timezoneOffset: new Date().getTimezoneOffset()
        },
      
        series: dataToDisplay  
      });
    },

    displayProcess: function(index) {
      var hostname = this.computerList[index].hostname;
    
      // Arrays to store data
      var dataProc = [];
      var gpus = [];
      var users = [];
      var associations = {}; // Tableau ou objet pour mémoriser les associations existantes
    
      // Crawling over the history data
      
      this.computerList[index].GPU.forEach(gpu => {
        console.log(this.computerList[index], gpu)
        gpu.process.forEach(proc => {
          var user = proc.user;
          var exec = proc.exec +":" +proc.pid;
          var gpuNumber = "GPU " + gpu.number;
    
          // Vérifier si l'utilisateur existe déjà
          if (users.indexOf(user) === -1) {
            users.push(user);
            dataProc.push([undefined, user]); // Relier l'utilisateur au nœud de base (undefined)
          }
    
          // Vérifier si l'association user-exec existe déjà
          if (!associations[user]) {
            associations[user] = {};
          }
          if (!associations[user][exec]) {
            associations[user][exec] = {};
            dataProc.push([user, exec, 3]);
    
          } if (!associations[user][exec][gpuNumber]) {
            associations[user][exec][gpuNumber] = true;
            // Ajouter l'association user-exec à dataProc
            dataProc.push([exec, gpuNumber, 6]);
          }
    
        });
      });
    
      console.log(dataProc);

      Highcharts.chart(this.computerList[index].IP + 'process', {
        chart: {
            marginRight: 100
        },
        title: {
            text: ''
        },
        subtitle: {
            text: new Date().toLocaleDateString() + "  " +new Date().toLocaleTimeString()
        },
        series: [
            {
                type: 'treegraph',
                keys: ['parent', 'id', 'level'],
                clip: false,
                data: dataProc,
                marker: {
                    symbol: 'circle',
                    radius: 6,
                    fillColor: '#ffffff',
                    lineWidth: 3
                },
                dataLabels: {
                    align: 'left',
                    pointFormat: '{point.id}',
                    style: {
                        color: '#000000',
                        textOutline: '3px #ffffff',
                        whiteSpace: 'nowrap'
                    },
                    x: 24,
                    crop: false,
                    overflow: 'none'
                },
                levels: [
                    {
                        level: 1,
                        levelIsConstant: false
                    },
                    {
                        level: 2,
                        colorByPoint: true
                    },
                    {
                        level: 3,
                        colorVariation: {
                            key: 'brightness',
                            to: -0.5
                        }
                    },
                    {
                        level: 4,
                        colorVariation: {
                            key: 'brightness',
                            to: 0.5
                        }
                    },
                    {
                        level: 6,
                        dataLabels: {
                            x: 10
                        },
                        marker: {
                            radius: 4
                        }
                    }
                ]
            }
        ]
    })
    },
    

    nextSlide: function() {
      let hop = 1;
      var listLength = this.computerList.length;
      while (hop < listLength) {
        index = (this.activeIndex + hop) % listLength;
        console.log(this.computerList)
        console.log(index)
        if (this.computerList[index].lastResponse === 0) {
          this.activeIndex = index;
          
          console.log(this.activeIndex)
          return; // Exit the loop when the next slide with lastResponse equal to 0 is found
        }
        hop++;
      }
      // If no slide with lastResponse equal to 0 is found, remain on the current slide
    },
    
    goToSlide: function(index) {
      console.log(this.computerList[index])
      this.activeIndex = index;
      console.log(index)
      this.stopAutoChange();
    },
    startAutoChange: function() {
      this.autoChangeInterval = setInterval(() => {
        if (!this.userSelectionTimeout) {
          this.nextSlide();
        }
      }, 20000); //Carousel change every 20s
    },
    stopAutoChange: function () {
      clearInterval(this.autoChangeInterval);
      this.autoChangeInterval = null;
      this.userSelectionTimeout = setTimeout(() => {
        this.userSelectionTimeout = null;
        this.startAutoChange();
      }, 300000); // 5 minutes in milliseconds
    },      
  },


  watch: {

    clonedComputerList: {
      handler: function(newVal, oldVal) {         
        localApp = this

        now = new Date()
        logDate = now.toLocaleDateString()
        logDate = logDate + " - " + now.toLocaleTimeString()

        newVal.forEach(function(computer, index) {
          if(oldVal[index] != undefined){
            computer.GPU.forEach(function(gpu, indexGPU){
              oldData = oldVal[index].GPU[indexGPU]
              if(oldData != undefined) {
                //Check up any potential change of value
                if((gpu.temperature !== oldData.temperature) || (gpu.gpu_usage !== oldData.gpu_usage) || (gpu.memory_usage !== oldData.memory_usage)){
                  //Verification and logging of the gpu temperature
                  if(parseInt(gpu.temperature) >= 75 && localApp.overheating.indexOf(computer.IP+gpu.number) == -1){
                    logMessage = computer.IP + ", card " + gpu.number + " overheating"
                    newLog = {message:logMessage, date:logDate}
                    localApp.logs.unshift(newLog)
                    localApp.overheating.push(computer.IP + gpu.number)
                  } else if(parseInt(gpu.temperature) < 65 && localApp.overheating.indexOf(computer.IP+gpu.number) != -1){
                    logMessage = computer.IP + ", card " + gpu.number + " cooling down"
                    newLog = {message:logMessage, date:logDate}
                    localApp.logs.unshift(newLog)
                    localApp.overheating.splice(localApp.overheating.indexOf(computer.IP + gpu.number), 1)
                  }

                  //Verification and logging of the gpu usage
                  if(gpu.gpu_usage >= 80 && localApp.overused.indexOf(computer.IP+gpu.number) == -1){
                    logMessage = computer.IP + ", card " + gpu.number + " intensely used"
                    newLog = {message:logMessage, date:logDate}
                    localApp.logs.unshift(newLog)
                    localApp.overused.push(computer.IP + gpu.number)
                  } else if(parseInt(gpu.gpu_usage) < 70 && localApp.overused.indexOf(computer.IP+gpu.number) != -1){
                    logMessage = computer.IP + ", card " + gpu.number + " back to a normal use"
                    newLog = {message:logMessage, date:logDate}
                    localApp.logs.unshift(newLog)
                    localApp.overused.splice(localApp.overused.indexOf(computer.IP + gpu.number), 1)
                  }

                  //Verification and logging of the gpu memory usage
                  if(gpu.memory_usage >= 75 && localApp.overloading.indexOf(computer.IP+gpu.number) == -1){
                    logMessage = computer.IP + ", card " + gpu.number + "'s memory overloading"
                    newLog = {message:logMessage, date:logDate}
                    localApp.logs.unshift(newLog)
                    localApp.overloading.push(computer.IP + gpu.number)
                  } else if(parseInt(gpu.memory_usage) < 65 && localApp.overloading.indexOf(computer.IP+gpu.number) != -1){
                    logMessage = computer.IP + ", card " + gpu.number + "'s memory emptying"
                    newLog = {message:logMessage, date:logDate}
                    localApp.logs.unshift(newLog)
                    localApp.overloading.splice(localApp.overloading.indexOf(computer.IP + gpu.number), 1)
                  }                
                }
              }
            })
          
            //Verification and logging of the connections and disconnections
            if(computer.lastResponse !== oldVal[index].lastResponse){
              if(computer.lastResponse != 0 && localApp.disconnectedPC.indexOf(computer.IP) == -1){
                logMessage = computer.IP + " offline"
                newLog = {message:logMessage, date:logDate}
                localApp.logs.unshift(newLog)
                localApp.disconnectedPC.push(computer.IP)
                console.log(localApp.disconnectedPC)
              } else if(computer.lastResponse == 0 ){
                logMessage = computer.IP + " online"
                newLog = {message:logMessage, date:logDate}
                localApp.logs.unshift(newLog)
                localApp.disconnectedPC.splice(localApp.disconnectedPC.indexOf(computer.IP), 1)
              }
            }
          }
        })
      },
      deep: true
    },
    activeIndex: {
      handler: function(newVal, oldVal) {         
          localApp = this
          this.displayHistory(newVal)
          this.displayProcess(newVal)
          buttons = document.getElementsByClassName('highcharts-a11y-proxy-button highcharts-no-tooltip');
          // Ajout de l'écouteur d'événements sur le clic du bouton
          buttons.forEach(button => {
            button.addEventListener('click', function(event) {
              // Votre code à exécuter lorsque le bouton est cliqué
              localApp.stopAutoChange()
            });
          })
      }
    }
  },

  computed:{
    //Allows to log the changes the previous state of the list to then be able to use the watcher
    clonedComputerList: function(){
      return JSON.parse(JSON.stringify(this.computerList))
    }
  },

  /**
   * This mounted() function is called whenever the application is mounted
   * Define an interval in which the informations will be gathered.
   * 1000 -> 1second
   * Set by default to 30000 -> 30 seconds
   */
  async mounted(){
    console.log('App Mounted');
    await this.gatherLast()
    setInterval(() => {
      this.gatherLast();
    }, 300000);

    setInterval(() => {
      this.autoScroll();
    }, 3000);

    this.startAutoChange()
    this.displayProcess(0)
    this.displayHistory(0)
}
});

app.mount('.app');