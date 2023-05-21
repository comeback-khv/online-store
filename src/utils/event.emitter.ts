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
