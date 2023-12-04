const socketIO = require('socket.io');

function iniciarSocketIO(server) {
  const io = socketIO(server, {
    cors: {
      origin: 'http://localhost:4200', // Reemplaza con el origen de tu aplicación Angular
      methods: ['GET', 'POST'],
      allowedHeaders: ['my-custom-header'],
      credentials: true,
    }
  });

  io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado a Socket.IO');

    socket.on('join_room', (roomName) => {
      socket.join(roomName);

      const socketsInRoom = io.sockets.adapter.rooms.get(roomName);
      const numUsersInRoom = socketsInRoom ? socketsInRoom.size : 0;

      console.log(`Usuarios conectados a la sala ${roomName}: ${numUsersInRoom}`);
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado de Socket.IO');
    });

    // En el servidor Socket.IO (backend)
    socket.on('nuevo-mensaje', (data) => {
      console.log('EMITER DESDE EL FRONTEND ');
      // Realizar acciones con los datos recibidos
      //emitir a todos los clientes conectados
      socket.broadcast.emit('nuevo-mensaje', data);
      
    });


  });


}

module.exports = { iniciarSocketIO };
