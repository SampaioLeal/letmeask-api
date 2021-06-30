import { Socket } from 'socket.io';
import initializeEvents from './events';
import socketInstance from './socket';

socketInstance.on('connection', (socket: Socket) => {
  // ...
});

initializeEvents();

socketInstance.listen(3000);
