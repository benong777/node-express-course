const EventEmitter = require("events");  

const emitter = new EventEmitter();  

setTimeout(() => {  
  emitter.emit("timer");  
}, 1000);  

emitter.on("timer", () => console.log('\nSuccessfully completed\n'));  