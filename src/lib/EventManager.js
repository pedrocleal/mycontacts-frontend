export default class EventManager {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(listener);
  }

  emit(event, payload) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((listener) => listener(payload));
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners[event];

    if (!this.listeners[event]) {
      return;
    }

    const filteredListeners = listeners.filter((listener) => listener !== listenerToRemove);

    this.listeners[event] = filteredListeners;
  }
}

const toastEventManager = new EventManager();

toastEventManager.on('addtoast', (payload) => {
  console.log('addtoast1', payload);
});

toastEventManager.on('addtoast', (payload) => {
  console.log('addtoast2', payload);
});

toastEventManager.emit('addtoast', { type: 'danger', text: 'text' });

console.log({ toastEventManager });
