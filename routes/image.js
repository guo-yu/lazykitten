// index
var delay = require('../lib/delay'),
    fetch = require('../lib/fetch');

module.exports = function(req, res, next) {
    delay(req.params.delay, function() {
            
        fetch.kitten({
            width: req.params.width,
            height: req.params.height
        },function(img){
            console.log(img);
            res.set('Content-Type', 'image/jpeg');
            res.send(img);
        });

    });
}