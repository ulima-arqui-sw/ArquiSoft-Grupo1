const socketIO = require('socket.io');
const http = require('http');

function iniciarSocketIO(server) {
  const io = socketIO(server);

  for (let i = 0; i < 5; i++) {
    const sala = io.of(`/sala${i}`);
    
    sala.on('connection', (socket) => {
      console.log(`Nuevo cliente conectado a la sala ${i}`);
      
      socket.on('mensaje_sala', (data) => {
        console.log(`Mensaje recibido en la sala ${i}:`, data);
        sala.emit('nuevo_mensaje', { mensaje: 'Hola a todos en la sala!' });
      });

      socket.on('disconnect', () => {
        console.log('Cliente desconectado de la sala');
      });

      // Aquí puedes manejar más eventos específicos de esta sala
    });
  }
}

module.exports = { iniciarSocketIO };
 