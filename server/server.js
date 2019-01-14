const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicpath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicpath))

//Hello Project




io.on('connection', (socket) => {
    console.log('New User Connected');

   socket.emit('newMessage',{
       from:"john",
       text:"see you then",
       createdAt:123456
   })

    socket.on('createMessage', (message) => {
        console.log("CreateMessage", message)
    })

    socket.on('disconnect', function () {
        console.log('User was disconnect')
    });
})

server.listen(port, function () {
    console.log(`Server has start ${port}`)
})