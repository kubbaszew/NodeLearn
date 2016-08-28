var fs = require('fs'),
    path = require('path');

fs.readFile(process.argv[2], licznik);

function licznik(err, text) {
    if(err)
          return console.log(errors);
    var policzone = text.toString().split('\n').length - 1;
    console.log(policzone);
};
