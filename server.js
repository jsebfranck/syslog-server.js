var dgram = require("dgram");
var server = dgram.createSocket("udp4");

server.on("message", function (msg, rinfo) {
  var message = msg.toString().replace(/'/g, "''") 
  var src = rinfo.address.toString().replace(/'/g, "''")

  console.log(src, message);
});

server.on("listening", function () {
  var address = server.address();
  console.log("server listening " + address.address + ":" + address.port);  
});

server.bind(514);
