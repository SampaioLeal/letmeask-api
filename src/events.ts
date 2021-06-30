import socketInstance from './socket';

const events: IEvents = {};

export default function initializeEvents() {
  Object.keys(events).forEach((eventName) => {
    socketInstance.on(eventName, events[eventName]);
  });
}
