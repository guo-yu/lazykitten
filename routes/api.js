var delay = require('../lib/delay'),
    fs = require('fs'),
    pkg = require('../pkg').fetch();

module.exports = function(req,res,next) {
    delay(req.params.delay,function(){
        res.json(pkg.lazykitten.json);
    });
}