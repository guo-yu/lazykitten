var fs = require('fs');

module.exports = function() {
    return JSON.parse(fs.readFileSync( __dirname + '/package.json'))
}