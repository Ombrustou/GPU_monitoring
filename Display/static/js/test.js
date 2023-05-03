
const app = Vue.createApp({

    data() {
      return {
        collapsed: true,
        logs: [],
        computerList:[{
          IP: "192.168.123.123",
          no_response: 0,
          GPU: [{
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:100
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          }]
        },
        {
          IP: "192.168.123.124",
          no_response: 1,
          GPU: [{
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",            
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400

          }]
        },{
          IP: "192.168.123.123",
          no_response: 1554,
          GPU: [{
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          }]
        },{
          IP: "192.168.123.123",
          no_response: 1,
          GPU: [{
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          }]
        },{
          IP: "192.168.123.123",
          no_response: 0,
          GPU: [{
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          }]
        },{
          IP: "192.168.123.123",
          no_response: 0,
          GPU: [{
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          }]
        },{
          IP: "192.168.123.123",
          no_response: 1456468436163465436845487,
          GPU: [{
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          }]
        },{
          IP: "192.168.123.123",
          no_response: 1,
          GPU: [{
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          }]
        },{
          IP: "192.168.123.123",
          no_response: 1,
          GPU: [{
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          }]
        },{
          IP: "192.168.123.123",
          no_response: 1,
          GPU: [{
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          }]
        },{
          IP: "192.168.123.123",
          no_response: 1,
          GPU: [{
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          }]
        },{
          IP: "192.168.123.123",
          no_response: 1,
          GPU: [{
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            id: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          }]
        }]

      }
    },
    methods: {
      //Simply allows to extend/collapse the sidebar
      toggle: function() {
        this.collapsed = !this.collapsed;
      }, 
      //Query the API to obtain the GPUs information
      gather: function() {
        appli = this
        axios.get('http://localhost:3001/monitoring')
        .then(function (response){
          appli.computerList = response.data
        })
        .catch(function (error){
          //handle error
          console.log(error);
          alert("Error From Api");
        });
      },
      //Transforms the usage of a GPU into a percentage of usage
      toPercent : function(gpu_usage, gpu_max_capacity){
          return Math.round(gpu_usage * 100 / gpu_max_capacity);
      },

      getDisconnectedTime: function(nbTicks) {
        const minute = 60;
        const hour = minute * 60;
        const day = hour * 24;
        const month = day * 30;
      
        let duration = '';
        seconds = nbTicks * 300 -300
        
        if(seconds >= month){
          duration = `${Math.floor(seconds / month)} months ${Math.floor((seconds % month) / day)}d`;
        } else if (seconds >= day) {
          duration = `${Math.floor(seconds / day)}d ${Math.floor((seconds % day) / hour)}h`;
        } else if (seconds >= hour) {
          duration = `${Math.floor(seconds / hour)}h ${Math.floor((seconds % hour) / minute)}m`;
        } else if (seconds >= minute) {
          duration = `${Math.floor(seconds / minute)}m`;
        } else {
          duration = `now`;
        }
      
        return duration;
      },

      //aims to vanish, useful for tests
      test: function() {
        this.testVa = this.testVa + 1
        console.log(this.testVa)
      },

      //Returns the url of a led status according to the GPU performances
      status: function(gpu_temperature, gpu_usage, gpu_max_capacity){
        const RED = "static/media/dot_red.png" 
        const ORANGE = "static/media/dot_orange.png" 
        const GREEN = "static/media/dot_green.png"

        percentage = this.toPercent(gpu_usage, gpu_max_capacity)
        if(percentage >= 80){
          return RED
        } else if(percentage >= 65) {
          return ORANGE
        } else {
          return GREEN
        }
      }
    },

    /**
     * This mounted() function is called whenever the application is mounted
     * Define an interval in which the informations will be gathered.
     * 1000 -> 1second
     * Set by default to 300000 -> 5minutes
     */
    mounted(){
      console.log('App Mounted');
      setInterval(() => {
        this.gather();
      }, 3000);
  }
  });
  
  app.mount('.app');
  