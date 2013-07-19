var delay = require('../delay'),
    pkg = JSON.parse(fs.readFileSync('./package.json'));

module.exports = function(req,res,next) {
    delay(req.params.delay,function(){
        res.json(pkg.lazykitten.json);
    });
}