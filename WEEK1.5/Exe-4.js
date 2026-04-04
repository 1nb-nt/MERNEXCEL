const fs = require('fs');

function nitsReadFile(){
  return new Promise (function(resolve){
    fs.readFile('scram.txt', 'utf8', function(err, data){
      resolve(data);
    });
  })}

function onDone(data){
  console.log(data);
}

nitsReadFile().then(onDone);