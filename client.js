const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data)
  })
  conn.on('connect', (connect) => {
    let timer = 0;
    console.log('Finally connected');
    conn.write('Name: FAR');
   
  });


  return conn;
};

module.exports = connect;

// setInterval(() => {
//   conn.write('Move: up');
// }, 50)