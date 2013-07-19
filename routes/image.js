// index
var delay = require('../lib/delay'),
    fetch = require('../lib/fetch'),
    pkg = require('../pkg').fetch(),
    beaman = pkg.lazykitten.man;

module.exports = function(req, res, next) {
    
    var type = 'kitten';

    if (beaman == 'true') {
        type = 'beaman';
    }

    fetch[type]({
        width: req.params.width,
        height: req.params.height
    }, function(img) {
        delay(req.params.delay, function() {
            if (img != 'err') {
                res.set('Content-Type', 'image/jpeg');
                res.send(img);
            } else {
                res.send('萌猫的网站挂了。。稍等一下吧喵，你也可以直接访问这里：http://placekitten.com/')
            }
        });
    });

}