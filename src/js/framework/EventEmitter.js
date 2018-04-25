class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, fn) {
    if (!this.events.hasOwnProperty(eventName)) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(fn);
  }
  
  emit(eventName, data) {
    const event = this.events[eventName];
    if (event) {
      event.forEach(fn => {
        fn.call(null, data);
      })
    }
  }

  unsubscribe(eventName, fn) {
    let event = this.events[eventName];
    const index = event.indexOf(fn);
    if (index != -1) {
      event.splice(index, 1);
    }
  }
}

const EVENT_EMITTER = new EventEmitter();
export default EVENT_EMITTER;