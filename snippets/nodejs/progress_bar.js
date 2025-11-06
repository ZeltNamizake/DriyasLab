// Progress Bar in Terminal with Nodejs
function progressBar(total = 20, delay = 100) {
  return new Promise((resolve) => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      const filled = "#".repeat(i);
      const empty = "-".repeat(total - i);
      process.stdout.write(`\r[${filled}${empty}] ${Math.round((i / total) * 100)}%`);
      if (i === total) {
        clearInterval(interval);
        process.stdout.write("\r\x1b[K✅ Done!\n");
        resolve();
      }
    }, delay);
  });
}

// Example
(async () => {
  await progressBar(30, 50); // total 30 step, delay 50ms
})();
