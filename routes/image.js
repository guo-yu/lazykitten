// index
var delay = require('../delay');

module.exports = function(req,res,next) {
    delay(req.params.delay,function(){
        var width = req.params.width,
            height = req.params.height;
        // todo
    });
}