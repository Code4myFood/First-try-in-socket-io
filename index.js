const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(express.static('public'));


server.listen(4000, () => console.log(`server is running`));

io.on("connection", function(socket){
 
  console.log("access one");

  socket.on("disconnect", () => {
    console.log("someone exit");
  });

});