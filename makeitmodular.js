require("./modul_1")(process.argv[2], process.argv[3], function (err, list) {
    if (err)
            return console.log(err);
    list.forEach(function(wejscie) {
      console.log(wejscie);
    })
});
