var counter = 0;

//const express   = require('express');
//const app       = express();
//const http      = require('http');
//const server    = http.createServer(app);
//const socketIO  = require('socket.io')(server);



AFRAME.registerComponent('remove-component-Y-box', {
    schema: {},     
    init : function() {

        if(window.socketIo == null){
            window.socketIo = io();
            console.log("fownl")
        }

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.deleteMyself();

            let block = document.activeElement.id

            window.socketIo.emit('YBlockDeleted', {id:"#" + block});
            console.log(block + "-----------------------------");
            
        });
    },
    
    deleteMyself : function() {
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); 
        //note memmory may stay aroudn until "garbage collected" so consider pooling instead of deleting. See note in create-cow element
    }
});
