/**
*
* lazykitten
* @author: [turingou]
* @created: [2013/07/19]
*
**/

var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , pkg = JSON.parse(fs.readFileSync('./package.json'))
  , optimist = require('optimist')
  , argv = optimist.argv
  , color = require('colorful')

exports.start = function() {

    var app = express(),
        port = argv.p ? argv.p : pkg.lazykitten.port;

    app.set('port', process.env.PORT || port);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('less-middleware')({ src: __dirname + '/public' }));
    app.use(express.static(path.join(__dirname, 'public')));

    if ('development' == app.get('env')) {
      app.use(express.errorHandler());
    }

    app.locals({sys: pkg});
    app.get('/html/:delay', require('./routes/index'));
    app.all('/api/:delay', require('./routes/api'));
    app.get('/image/:width/:height/:delay', require('./routes/image'));

    http.createServer(app).listen(app.get('port'), function(){
      console.log(color.yellow('[' + pkg.name + ']' + ' is running on ......' + ' ==> http://localhost:' + app.get('port')));
    });

}