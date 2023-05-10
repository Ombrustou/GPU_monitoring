
const app = Vue.createApp({

    data() {
      return {
        collapsed: true,
        logIdAvailable:2,
        logs: [],
        overheating: [],
        scrollDown: true,
        overused: [],
        selectedComputer: {},
        newComputer: {
          IP: "",
          username: "",
          password: ""
        },
        computerList:[{
          IP: "192.168.123.124",
          no_response: 0,
          GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:100
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            usage: 200,
            max_capacity:400
          }]
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        }]
      },
      {
        IP: "192.168.123.125",
        no_response: 1,
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",            
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400

        }]
      },{
        IP: "192.168.123.126",
        no_response: 1554,
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        }]
      },{
        IP: "192.168.123.127",
        no_response: 1,
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        }]
      },{
        IP: "192.168.123.128",
        no_response: 0,
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        }]
      },{
        IP: "192.168.123.129",
        no_response: 0,
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        }]
      },{
        IP: "192.168.123.121",
        no_response: 3,
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        }]
      },{
        IP: "192.168.123.122",
        no_response: 1,
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        }]
      },{
        IP: "192.168.123.120",
        no_response: 1,
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        }]
      },{
        IP: "192.168.123.124",
        no_response: 1,
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        }]
      },{
        IP: "192.168.123.132",
        no_response: 1,
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        }]
      },{
        IP: "192.168.123.133",
        no_response: 1,
        GPU: [{
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
          name: "NVIDIA GeForce GTX 1080 Ti",
          temperature: 23,
          usage: 200,
          max_capacity:400
        },
        {
          number: 1,
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


  watch: {

    clonedComputerList: {
      handler: function(newVal, oldVal) {         
        logList = this.logs
        newVal.forEach(function(computer, index) {
          //Verification and logging of the connections and disconnections
          if(computer.no_response !== oldVal[index].no_response){
            if(parseInt(computer.no_response) == 1){
              logId = this.logIdAvailable
              now = new Date()
              logDate = now.toLocaleDateString()
              logDate = logDate + " - " + now.toLocaleTimeString()
              logMessage = computer.IP + " offline"
              newLog = {id: logId, message:logMessage, date:logDate}
              logList.unshift(newLog)
            } else if(parseInt(computer.no_response) == 0){
              logId = this.logIdAvailable
              now = new Date()
              logDate = now.toLocaleDateString()
              logDate = logDate + " - " + now.toLocaleTimeString()
              logMessage = computer.IP + " online"
              newLog = {id: logId, message:logMessage, date:logDate}
              logList.unshift(newLog)
            }
          }
         //console.log(newVal, oldVal)
          //console.log(newVal[index].no_response)
          //console.log("La valeur de no_response pour l'ordinateur ", index, "a été modifiée :", computer.no_response);
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

      cleanLogs: function(){
        this.logs = []
        this.overheating = []
        this.overused = []
      },

      delLog: function(log){
        this.logs.splice(this.logs.indexOf(log),1)
      },

      //Returns the url of a led status according to the GPU performances
      status: function(gpu_temperature, gpu_usage, gpu_max_capacity){
        const RED = "static/media/dot_red.png" 
        const ORANGE = "static/media/dot_orange.png" 
        const GREEN = "static/media/dot_green.png"

        percentage = this.toPercent(gpu_usage, gpu_max_capacity)
        if(percentage >= 80 || gpu_temperature >= 75){
          return RED
        } else if(percentage >= 65 || gpu_temperature >= 60) {
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
        var duration = 5000; // Duration of the animation in milliseconds
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

      addComputer: function(){
        axios.post("http://localhost:3001/computer", this.newComputer)
      },

      deleteComputer: function() {
        axios.delete("http://localhost:3001/computer", this.selectedComputer)
      }
      
    },


    watch: {

      clonedComputerList: {
        handler: function(newVal, oldVal) {         
          localApp = this
 
          now = new Date()
          logDate = now.toLocaleDateString()
          logDate = logDate + " - " + now.toLocaleTimeString()

          newVal.forEach(function(computer, index) {
            computer.GPU.forEach(function(gpu, indexGPU){
              if((gpu.temperature !== oldVal[index].GPU[indexGPU].temperature) || (gpu.usage !== oldVal[index].GPU[indexGPU].usage)){
                if(parseInt(gpu.temperature) >= 75 && localApp.overheating.indexOf(computer.IP+gpu.number) == -1){
                  logMessage = computer.IP + ", card " + gpu.number + " overheating"
                  newLog = {message:logMessage, date:logDate}
                  localApp.logs.unshift(newLog)
                  localApp.overheating.push(computer.IP + gpu.number)
                } else if(parseInt(gpu.temperature) < 70 && localApp.overheating.indexOf(computer.IP+gpu.number) != -1){
                  logMessage = computer.IP + ", card " + gpu.number + " cooling down"
                  newLog = {message:logMessage, date:logDate}
                  localApp.logs.unshift(newLog)
                  localApp.overheating.splice(localApp.overheating.indexOf(computer.IP + gpu.number), 1)
                }

                if(Math.round(gpu.usage * 100 / gpu.max_capacity) >= 80 && localApp.overused.indexOf(computer.IP+gpu.number) == -1){
                  logMessage = computer.IP + ", card " + gpu.number + " intensely used"
                  newLog = {message:logMessage, date:logDate}
                  localApp.logs.unshift(newLog)
                  localApp.overused.push(computer.IP + gpu.number)
                } else if(parseInt(gpu.usage) < 70 && localApp.overused.indexOf(computer.IP+gpu.number) != -1){
                  logMessage = computer.IP + ", card " + gpu.number + " back to a normal use"
                  newLog = {message:logMessage, date:logDate}
                  localApp.logs.unshift(newLog)
                  localApp.overused.splice(localApp.overused.indexOf(computer.IP + gpu.number), 1)
                }
              }
            })

            //Verification and logging of the connections and disconnections
            if(computer.no_response !== oldVal[index].no_response){
              if(parseInt(computer.no_response) == 1){
                logMessage = computer.IP + " offline"
                newLog = {message:logMessage, date:logDate}
                localApp.logs.unshift(newLog)
              } else if(parseInt(computer.no_response) == 0){
                logMessage = computer.IP + " online"
                newLog = {message:logMessage, date:logDate}
                localApp.logs.unshift(newLog)
              }
            }
          });
        },
        deep: true
      }
    },

    computed:{
      //Allows to log the changes the previous state of the list to then be able to use the watcher
      clonedComputerList: function(){
         return JSON.parse(JSON.stringify(this.computerList))
      }
    },

    /**
     * Each time the list of log is updated, its size is calculated.
     * The size is stored in the logIdAvailable variable to be used as the next id
     * As the ids start at 0, the size always happen to be an available id
     * Ex: size = 2 means there is an element 0 and an element 1, so, an element 2 is available.
     * If the id is already taken due to past deletions, the new id will be the value of the last one + 1
     */
    mounted(){
      console.log('App Mounted');
      setInterval(() => {
        this.gather();
      }, 1000);

      setInterval(() => {
        this.autoScroll();
      }, 400);

  
  }
  });
  
  app.mount('.app');
  
