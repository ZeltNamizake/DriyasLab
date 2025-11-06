// Typing Animation in Terminal with Nodejs
function typeEffect(message, delay = 50) {
  return new Promise(async (resolve) => {
    for (let i = 0; i < message.length; i++) {
      process.stdout.write(message[i]);
      await new Promise(r => setTimeout(r, delay));
    }
    process.stdout.write('\n');
    resolve();
  });
}

// Example
async function main() {
  await typeEffect("Hello, this is a typing animation...");
}

main();
