function printTable(data, cols = 3, width = 12) {
  const makeBorder = () => {
    let border = "+";
    for (let i = 0; i < cols; i++) border += "-".repeat(width + 2) + "+";
    return border;
  };

  const border = makeBorder();
  console.log(border);

  for (let i = 0; i < data.length; i += cols) {
    let row = "|";
    for (let j = 0; j < cols; j++) {
      const val = data[i + j] || "";
      row += " " + val.padEnd(width, " ") + " |";
    }
    console.log(row);
    console.log(border);
  }
}

const data = [
  "Name", "Age", "City",
  "Alice", "21", "Tokyo",
  "Bob", "25", "Paris",
  "Charlie", "30", "London"
];

printTable(data);
