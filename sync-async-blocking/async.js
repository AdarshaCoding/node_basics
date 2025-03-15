console.log("---async module---");

/**
 * V8 engine off load the below task to libuv
 * libuv will communicate with OS (timer) to monitor the time
 * once the waiting time over, libuv has EVENT LOOP to push the callback to call stack (inside V8 engine)
 * */
setTimeout(() => {
  console.log("setTimeOut - Executed after sometime!");
}, 1000);

console.log("END!! - Gloable Execution Context Popped Out Of The Call Stack!!");
