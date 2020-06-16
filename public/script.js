const socket = io();
console.log(socket.id);
socket.emit('my other event', {123:!23});