const { stdin } = require("process");
let connection;

const handleUserInput = (data) => {
  if (data === "\u0003") process.exit();
  if (data === "w") connection.write("Move: up");
  if (data === "s") connection.write("Move: down");
  if (data === "a") connection.write("Move: left");
  if (data === "d") connection.write("Move: right");
};
stdin.on("data", handleUserInput);

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = {
  handleUserInput,
  setupInput,
};
