function alignText(text, align = "left") {
  const width = process.stdout.columns || 80;
  const padding = Math.max(0, width - text.length);

  switch (align) {
    case "center":
      return " ".repeat(Math.floor(padding / 2)) + text;
    case "right":
      return " ".repeat(padding) + text;
    default:
      return text;
  }
}

// Example
console.log(alignText("📦 Node.js Text Alignment", "center"));
console.log(alignText("Left-aligned", "left"));
console.log(alignText("Right-aligned", "right"));
