
const app = Vue.createApp({

    data() {
      return {
        collapsed: true,
        logIdAvailable:2,
        logs: [],
        overheating: [],
        overused: [],
        overloading: [],
        scrollDown: true,
        selectedComputer: {},
        autoChangeInterval: null,
        userSelectionTimeout: null,
        activeIndex: 0,
        newComputer: {
          IP: "",
          username: "",
          password: ""
        },
        computerList:[{
          IP: "192.168.123.124",
          lastResponse: 0,
          last_reboot: 'May  2 16:15 2023',
          GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:100
          }]
        },
        {
          IP: "192.168.123.125",
          lastResponse: 65,
          last_reboot: 'May  2 16:15 2023',
              GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",            
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400

          }]
        },{
          IP: "192.168.123.126",
          lastResponse: 1554,
          last_reboot: 'May  2 16:15 2023',
          GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          }]
        },{
          IP: "192.168.123.127",
          lastResponse: 0,
          last_reboot: 'May  2 16:15 2023',
              GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          }]
        },{
          IP: "192.168.123.128",
          lastResponse: 0,
          last_reboot: 'May  2 16:15 2023',
          GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          }]
        },{
          IP: "192.168.123.129",
          lastResponse: 0,
          last_reboot: 'May  2 16:15 2023',
          GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          }]
        },{
          IP: "192.168.123.121",
          lastResponse: 3,
          last_reboot: 'May  2 16:15 2023',
          GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          }]
        },{
          IP: "192.168.123.122",
          lastResponse: 0,
          last_reboot: 'May  2 16:15 2023',
              GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          }]
        },{
          IP: "192.168.123.120",
          lastResponse: 0,
          last_reboot: 'May  2 16:15 2023',
              GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          }]
        },{
          IP: "192.168.123.124",
          lastResponse: 0,
          last_reboot: 'May  2 16:15 2023',
              GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          }]
        },{
          IP: "192.168.123.132",
          lastResponse: 0,
          last_reboot: 'May  2 16:15 2023',
              GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          }]
        },{
          IP: "192.168.123.133",
          lastResponse: 0,
          last_reboot: 'May  2 16:15 2023',
              GPU: [{
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
          },
          {
            number: 1,
            name: "NVIDIA GeForce GTX 1080 Ti",
            temperature: 23,
            memory_usage: 52,
            gpu_usage: 50, max_capacity:400
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
      gatherLast: function() {
        appli = this
        axios.get('http://localhost:3001/last')
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
        axios.delete("http://localhost:3001/computer"+ this.selectedComputer)
      },
      nextSlide: function() {
        hop = 1
        while(hop < this.computerList.length){
          index = (this.activeIndex + hop)% this.computerList.length
          if(this.computerList[index].lastResponse == 0){
            break
          }
          hop++
        } 
        this.activeIndex = (this.activeIndex + hop) % this.computerList.length;
        
      },
      goToSlide: function(index) {
        this.activeIndex = index;
        this.stopAutoChange();
      },
      startAutoChange: function() {
        this.autoChangeInterval = setInterval(() => {
          if (!this.userSelectionTimeout) {
            this.nextSlide();
          }
        }, 5000);
      },
      stopAutoChange: function () {
        clearInterval(this.autoChangeInterval);
        this.autoChangeInterval = null;
        this.userSelectionTimeout = setTimeout(() => {
          this.startAutoChange();
          this.userSelectionTimeout = null;
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
            computer.GPU.forEach(function(gpu, indexGPU){
              oldData = oldVal[index].GPU[indexGPU]
              if((gpu.temperature !== oldData.temperature) || (gpu.gpu_usage !== oldData.gpu_usage) || (gpu.memory_usage !== oldData.memory_usage)){
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
            })

            //Verification and logging of the connections and disconnections
            if(computer.lastResponse !== oldVal[index].lastResponse){
              if(computer.lastResponse != 0){
                logMessage = computer.IP + " offline"
                newLog = {message:logMessage, date:logDate}
                localApp.logs.unshift(newLog)
              } else {
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
     * This mounted() function is called whenever the application is mounted
     * Define an interval in which the informations will be gathered.
     * 1000 -> 1second
     * Set by default to 300000 -> 5minutes
     */
    mounted(){
      console.log('App Mounted');
      setInterval(() => {
        this.gatherLast();
      }, 3000000);

      setInterval(() => {
        this.autoScroll();
      }, 400);

      this.startAutoChange();
  }
  });
  
  app.mount('.app');