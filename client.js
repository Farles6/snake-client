const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", (connect) => {
    console.log("Finally connected");
    conn.write("Name: FAR");
  });

  return conn;
};

module.exports = {
  connect,
};
