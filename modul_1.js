var fs = require("fs"),
    path = require("path")

module.exports = function(directory, filter, callback) {
    filter = "." + filter
    fs.readdir(directory, function (err, list) {
        if(err)
              return callback(err)

        callback(null, list.filter(function (entry) {
                return path.extname(entry) === filter
        }))
    })
};
