/**
 * Created by stevyhacker on 14.6.2016..
 */

module.exports = function (directoryName, extension, callback) {
    var fs = require('fs');
    var path = require('path');

    var ext = '.' + extension;

    var data = [];

    fs.readdir(directoryName, function (err, files) {
        if (err) return callback(err);

        files.forEach(function(file) {
            if (path.extname(file) === ext) {
                data.push(file);
            }
        });

        callback(null, data);
    })
};

