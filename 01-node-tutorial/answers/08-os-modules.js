const os = require('os');

console.log({
    os: os.type(),
    release: os.release(),
    uptime: os.uptime(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
});