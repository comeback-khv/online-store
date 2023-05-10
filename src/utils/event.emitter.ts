type Event = {
  [key: string]: (() => void)[];
};

export class EventEmitter {
  events: Event = {};

  on(eventName: string, listener: () => void) {
    this.events[eventName] = [];
    this.events[eventName].push(listener);
  }

  emit(eventName: string) {
    if (this.events[eventName]) {
      for (const listener of this.events[eventName]) {
        listener();
      }
    }
  }
}

// export class Observer {
//   events = {};

//   on(eventName: string, callback: () => void) {
//     if (!this.events[eventName]) {
//       this.events[eventName] = [];
//     }
//     this.events[eventName].push(callback);
//     console.log(this.events);
//   }

//   off(eventName: string) {
//     delete this.events[eventName];
//   }

//   emit(eventName: string, args?) {
//     if (this.events[eventName]) {
//       for (const callback of this.events[eventName]) {
//         callback(args);
//       }
//     }
//   }
// }
