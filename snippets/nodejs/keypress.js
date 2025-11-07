// keypress.js
const readline = require("readline");

// Enable keypress events
readline.emitKeypressEvents(process.stdin);

// stdin is in raw mode and active
if (process.stdin.isTTY) process.stdin.setRawMode(true);
process.stdin.resume();


// Listen to keypress events
const onKey = (str, key) => {
 if(key && key.name === "q") {
  console.log("Exit...")
  cleanup()
  process.exit(0)
 }
 console.log(key)
}
process.stdin.on("keypress", onKey)

// Function to clear input mode
function cleanup() {
 // stdin is not in raw mode and is inactive
  if (process.stdin.isTTY) process.stdin.setRawMode(false);
  process.stdin.pause();
}

