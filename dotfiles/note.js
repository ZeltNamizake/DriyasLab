const fs = require("fs")

console.log("Write the note below, press (CTRL + D) to save and exit:\n");

let input = "";

process.stdin.setEncoding("utf8");

process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  const text = input.trim();
  fs.writeFileSync("note.txt", text);
  console.log("\n✅ Saved notes './note.txt'");
});

