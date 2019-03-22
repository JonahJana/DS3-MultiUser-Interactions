var counter = 0;

//const express   = require('express');
//const app       = express();
//const http      = require('http');
//const server    = http.createServer(app);
//const socketIO  = require('socket.io')(server);



AFRAME.registerComponent('remove-component-b-box', {
    schema: {},     
    init : function() {

        if(window.socketIo == null){
            window.socketIo = io();
        }

        const Context_AF = this;


        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            

            var block = Context_AF.el.getAttribute('id');

            console.log("ooooooo " + block + " oooooooooo");
            
            window.socketIo.emit('BBlockDeleted', {id:block});
            console.log(block + "++++++++++++++++++++");
            
            Context_AF.deleteMyself();
        });
    },
    deleteMyself : function() {
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); 
        //note memmory may stay aroudn until "garbage collected" so consider pooling instead of deleting. See note in create-cow element
    }
});
