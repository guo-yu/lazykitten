// index
var delay = require('../delay');

module.exports = function(req,res,next) {
    delay(req.params.delay,function(){
        res.render('index');
    });
}