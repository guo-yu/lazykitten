// index
var delay = require('../lib/delay');

module.exports = function(req,res,next) {
    delay(req.params.delay,function(){
        res.render('index');
    });
}