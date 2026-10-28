// class MyCustomEmitter {
//   constructor() {
//     this._events = {};
//     this._onceEvents = [];
//   }

//   on(eventName, handler) {
//     if (this._events[eventName]) {
//       this._events[eventName].push(handler);
//     } else {
//       this._events[eventName] = [handler];
//     }
//   }

//   once(eventName, handler) {
//     if (!this._onceEvents.includes(eventName)) {
//       this._onceEvents.push(eventName);
//     }
//     this._events[eventName] = [handler];
//   }

//   emit(eventName, ...args) {
//     for (let i = 0; i < this._events[eventName]?.length; i++) {
//       this._events[eventName][i](args);
//       if (this._onceEvents.includes(eventName)) {
//         delete this._events[eventName];
//         this._onceEvents = this._onceEvents.filter(
//           (onceEventName) => onceEventName != eventName,
//         );
//         break;
//       }
//     }
//     // this._events[eventName]?.forEach((event) => event(args));
//     // if (this._onceEvents.includes(eventName)) {
//     //   delete this._events[eventName];
//     //   this._onceEvents = this._onceEvents.filter(
//     //     (onceEventName) => onceEventName != eventName,
//     //   );
//     // }
//   }
// }

class MyCustomEmitter {
  constructor() {
    this._events = {};
  }

  on(eventName, handler) {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }

    this._events[eventName].push({
      handler,
      once: false,
    });
  }

  once(eventName, handler) {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }

    this._events[eventName].push({
      handler,
      once: true,
    });
  }

  emit(eventName, ...args) {
    const handlers = this._events[eventName];

    if (!handlers) return;

    for (const event of [...handlers]) {
      event.handler(...args);

      if (event.once) {
        this._events[eventName] = this._events[eventName].filter(
          (item) => item !== event,
        );
      }
    }

    if (this._events[eventName]?.length === 0) {
      delete this._events[eventName];
    }
  }
}

const emitter = new MyCustomEmitter();

emitter.on("abc", () => {
  console.log("abc fired");
});

emitter.on("x", (args) => {
  console.log("x", ...args);
});

emitter.once("t", (...args) => {
  console.log("I am once", ...args);
});

emitter.once("t", () => {
  console.log("I am once won't work");
});

console.log(JSON.stringify(emitter));
emitter.emit("t", 1, 2, 3, 4);
emitter.emit("t", 3, 4);
console.log(emitter);
