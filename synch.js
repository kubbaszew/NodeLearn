var fs = require('fs'),
    path = require('path');

  licz(fs.readFileSync(process.argv[2]));


function licz(text) {
    var licznik = text.toString().split('\n').length - 1;
    console.log(licznik);
};
