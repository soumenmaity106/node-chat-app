var socket = io();
socket.on('connect', () => {
    console.log("connect the server");
});

socket.on('disconnect', () => {
    console.log("Disconnect the Server");
});

socket.on('newMessage',function(message){
    console.log('newMessage',message)
})