var request = require('request');

exports.kitten = function(params,cb) {
    request('http://placekitten.com/' + params.width + '/' + params.height, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            cb(body)
        }
    })
}