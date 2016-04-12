const expect = require('chai').expect;
const fs = require('fs');
const net = require('net');
const testServer = require(__dirname + '/../lib/server');

describe('server', function (){
  it('should create a server on localhost 3000', function(done){
   expect(testServer.address().port).to.eql(3000);
   done();
  });

  it('should write to new file on GET request', function(done){
    var directoryLength = fs.readdirSync(__dirname + '/../textfiles').length;
    var client = net.connect({'port': 3000}, function(){});
    client.emit('end');
    client.on('end', function(){
      fs.readdir(__dirname + '/../textfiles', function(err, array){
        expect(directoryLength + 1).to.eql(array.length);
        done();
      });
    });
  });
});
