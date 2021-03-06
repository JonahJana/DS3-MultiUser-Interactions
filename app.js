const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);

const socketIO  = require('socket.io')(server);


 const LISTEN_PORT = 8080;

 app.use(express.static(__dirname + '/public'));

 app.get('/' , function(req, res)
{
    res.sendFile(__dirname + '/public/index.html');
})

//-----------------------------------
//test scripts
app.get('/test', function(req,res) {
    res.sendFile(__dirname + '/public/test.html');
});

//routes
app.get('/menu', function(req,res) {
    res.sendFile(__dirname + '/public/menu.html');
});

app.get('/comp', function(req,res) {
    res.sendFile(__dirname + '/public/comp.html');
});

app.get('/collab', function(req,res) {
    res.sendFile(__dirname + '/public/collab.html');
});

//sub routes
app.get('/comp_p', function(req,res) {
    res.sendFile(__dirname + '/public/comp_p.html');
});

app.get('/comp_d', function(req,res) {
    res.sendFile(__dirname + '/public/comp_d.html');
});

app.get('/collab_d', function(req,res) {
    res.sendFile(__dirname + '/public/collab_d.html');
});

app.get('/collab_p', function(req,res) {
    res.sendFile(__dirname + '/public/collab_p.html');
});


//websocket stuff
socketIO.on('connection', function(socket) {
    console.log(socket.id + ' has connected!');

    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
    });

    //custom events
    //socket = one client
    //socketIO.sockets = all clients

    socket.on('completed', function(data) {
        console.log('score event heard');
        socketIO.sockets.emit('Get_score', {data});
    });


    socket.on('BBlockDeleted', function(data) {
        console.log('Blue Block has been deleted');
        socketIO.sockets.emit('Blue-Block-Deleted', {data});
    });

    socket.on('YBlockDeleted', function(data) {
        console.log('Yellow Block has been deleted');
        socketIO.sockets.emit('Yellow-Block-Deleted', {data});
    });
    
    socket.on('completedCoop', function(data) {
        console.log("Completed Coop")
        socketIO.sockets.emit('Coop-Complete');
        
    });
    
});


//-----------------------------------------

server.listen(LISTEN_PORT);

console.log('Listening to port' + LISTEN_PORT);