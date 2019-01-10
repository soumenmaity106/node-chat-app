const express = require('express');
const http = require('http');
const app = express();
const socketIO = require('socket.io');

const port = process.env.PORT || 3000


const path = require('path');

const publicpath = path.join(__dirname,'../public');
app.use(express.static(publicpath))

var server = http.createServer(app)
var io = socketIO(server);


io.on('connection',(socket)=>{
 console.log('New User Connected');
 socket.on('disconnect',()=>{
     console.log('User was disconnect')
 })
 
})
server.listen(port,()=>{
    console.log(`Server has start ${port}`)
})