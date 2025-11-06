// loading_spinner.js
function loadingSpinner(text = "Loading", duration = 3000) {
  const spinner = ["|", "/", "-", "\\"];
  let i = 0;
  const interval = setInterval(() => {
    process.stdout.write(`\r${text} ${spinner[i % spinner.length]}`);
    i++;
  }, 100);

  return new Promise((resolve) => {
    setTimeout(() => {
      clearInterval(interval);
      process.stdout.write("\r\x1b[K✅ Done!\n");
      resolve();
    }, duration);
  });
}

(async () => {
  await loadingSpinner("Processing", 5000);
})();
