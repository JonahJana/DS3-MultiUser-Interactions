var counter = 0;

//const express   = require('express');
//const app       = express();
//const http      = require('http');
//const server    = http.createServer(app);
//const socketIO  = require('socket.io')(server);



AFRAME.registerComponent('remove-component', {
    schema: {},     
    init : function() {

        if(window.socketIo == null){
            window.socketIo = io();
        }

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.deleteMyself();
            counter++;

            if (counter == 1){
                Context_AF.initDate = new Date();
                document.querySelector('#timeTracker').components['time-component'].currentTime = Context_AF.initDate;
             }
            if (counter == 10){
                var currentDate = new Date();
                var pastDate = document.querySelector('#timeTracker').components['time-component'].currentTime;
                var finalTime = currentDate - pastDate;
                var timeSec = finalTime/1000;
                
                console.log("-" + localStorage.getItem("Highscore") + "-");

                var Highscore = localStorage.getItem("Highscore");

                console.log("-" + Highscore + "-");

                if(Highscore < timeSec){
                    alert("Your final time: " + timeSec + "sec./n");
                    alert("Current Highscore: " + Highscore)
                }else{
                    localStorage.getItem("Highscore") = timeSec;
                    alert("NEW HIGH SCORE: " + timeSec + "sec.");
                }

                window.socketIo.emit('completed', finalTime);

            }
            
        });
    },
    deleteMyself : function() {
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); 
        //note memmory may stay aroudn until "garbage collected" so consider pooling instead of deleting. See note in create-cow element
    }
});
