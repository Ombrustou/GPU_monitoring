const { createApp } = Vue //init VueJs app

axios.get('http://localhost:3001/monitoring')
    .then(function (response){
        computerList = response.data
        console.log(response);
        createApp({
            data(){
                return{
                    computers:computerList
                }
            }
        }).mount('.app')
    })
    .catch(function (error){
    //handle error
        console.log(error);
        alert("Error From Api");
    });