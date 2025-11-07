const inquirer = require("inquirer");

class Inquirer {
  async example1() {
    const testing = await inquirer.prompt([
      {
        type: "list",
        name: "Role",
        message: "Select a role",
        choices: ["Developer", "Gamer", "Explorer"],
      },
      {
        type: "input",
        name: "Name",
        message: "Enter your name: ",
        validate: (input) => input.trim() !== "" || "Name cannot be empty!",
      },
    ]);
    console.log("===Result===");
    console.log(testing);
  }

  async example2() {
    console.log("=====Sign Up=====");
    const signup = await inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "Enter username:",
        validate: (username) => {
          if (username.trim().length < 5) {
            return "Username must be more than 5 characters!";
          } else if (username.trim() === "") {
            return "Username cannot be empty!";
          }
          return true;
        },
      },
      {
        type: "password",
        name: "password",
        message: "Enter password:",
        mask: "*",
        validate: (password) => {
          if (password.trim().length < 5) {
            return "Password must be more than 5 characters!";
          } else if (password.trim() === "") {
            return "Password cannot be empty!";
          }
          return true;
        },
      },
    ]);
    console.log(signup);
  }
}

const testing = new Inquirer();
testing.example2();
