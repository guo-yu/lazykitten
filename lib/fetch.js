var request = require('request');

exports.kitten = function(params,cb) {
    request({
       url: 'http://placekitten.com/' + params.width + '/' + params.height,
       encoding: null
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            cb(body)
        } else {
            cb('err')
        }
    })
}