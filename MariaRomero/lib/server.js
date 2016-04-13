const net = require('net');
const fs = require('fs');

const server = net.createServer(function(socket){
  var writeFile = fs.createWriteStream(__dirname + '/../textfiles/' + Date() + '.txt');
  socket.pipe(writeFile);
  socket.on('data', function(){
    socket.end(); 
  })

}).listen(3000, function(){
  process.stdout.write('server up on 3000\n');
});

module.exports = server;
