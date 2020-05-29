import io from 'socket.io';

const socketServer = (app) => {
  const server = io(app);

  server.on('connection', socket => {
    socket.join('Lobby');

    socket.on('chat mounted', (id) => {
      console.log('>>> server > chat mounted')
      socket.emit('receive socket', id, socket.id)
    });

    socket.on('disconnect', () => {
      console.log('>>> socket disconnected.')
    });

    socket.on('new message', (message) => {
      server.emit('new message', message)
    });
  });
}

export default socketServer;
