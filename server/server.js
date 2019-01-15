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
       from:"Admin",
       text:"Welcome to ",
       createdAt:new Date(). getTime()
   })

   socket.broadcast.emit('newMessage',{
        from:"Admin",
        text:"Create a New User",
        createdAt: new Date().getTime()
   })

    socket.on('createMessage', (message) => {
        console.log("CreateMessage", message)
        io.emit('newMessage',{
            from:message.from,
            text:message.text,
            createdAt: new Date().getTime()
        })
    })

    socket.on('disconnect', function () {
        console.log('User was disconnect')
    });
})

server.listen(port, function () {
    console.log(`Server has start ${port}`)
})