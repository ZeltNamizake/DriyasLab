const inquirer = require("inquirer");
const { spawn } = require("child_process");
const readline = require("readline");

function enableRawInput() {
  if (process.stdin.isTTY) process.stdin.setRawMode(true);
  process.stdin.resume();
  readline.emitKeypressEvents(process.stdin);
}

class App {
  constructor() {
    this.interval = null;
    this.onKey = this.onKey.bind(this);
  }

  cleanup() {
    process.stdin.removeListener("keypress", this.onKey);
    if (process.stdin.isTTY) process.stdin.setRawMode(false); // return to standard mode
    process.stdin.pause(); // stop input until the menu is active again.
  }

  async menu() {
    console.clear();
    const menuApp = await inquirer.prompt([
      {
        type: "list",
        name: "menu",
        message: "DriyasLab Monitor Menu:",
        choices: ["📊 Monitor Proses (real-time)", "❌ Exit"],
      },
    ]);
    if (menuApp.menu.includes("Monitor")) {
      enableRawInput();
      this.monitor();
    } else process.exit(0);
  }

  monitor() {
    this.interval = setInterval(() => {
      console.clear();
      console.log("[Monitoring active] Press [q] anytime to go back\n");
      const ps = spawn("ps", ["aux"]);
      ps.stdout.pipe(process.stdout);
    }, 1000);
    process.stdin.on("keypress", this.onKey);
  }

  onKey(str, key) {
    if (key && key.name === "q") {
      clearInterval(this.interval);
      console.log("\nBack to menu...");
      this.cleanup();
      setTimeout(() => this.menu(), 800);
    }
  }
}

new App().menu();
