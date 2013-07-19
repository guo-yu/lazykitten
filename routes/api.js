var delay = require('../lib/delay'),
    fs = require('fs'),
    pkg = JSON.parse(fs.readFileSync('../package.json'));

module.exports = function(req,res,next) {
    delay(req.params.delay,function(){
        res.json(pkg.lazykitten.json);
    });
}