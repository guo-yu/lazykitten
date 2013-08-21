/**
 *
 * lazykitten
 * @author: [turingou]
 * @created: [2013/07/19]
 *
 **/

var express = require('express'),
  http = require('http'),
  path = require('path'),
  fs = require('fs'),
  pkg = require('./pkg').fetch(),
  optimist = require('optimist'),
  argv = optimist.argv,
  color = require('colorful');

var Server = function(params) {

  var app = express(),
      port = params.p ? params.p : pkg.lazykitten.port,
      beaman = params.beaman ? params.beaman : false;

  app.set('port', process.env.PORT || port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('less-middleware')({
    src: __dirname + '/public'
  }));
  app.use(express.static(path.join(__dirname, 'public')));

  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }

  if (beaman) {
    pkg.lazykitten.man = beaman;
    require('./pkg').set(pkg);
  }

  app.locals({
    sys: pkg
  });
  app.get('/html/:delay', require('./routes/index'));
  app.all('/api/:delay', require('./routes/api'));
  app.get('/image/:width/:height/:delay', require('./routes/image'));

  this.app = app;
}

Server.prototype.run = function(port) {
  var p = port ? parseInt(port) : this.app.get('port');
  http.createServer(this.app).listen(p, function() {
    console.log(color.yellow('[' + pkg.name + ']' + ' is running on ......' + ' ==> http://localhost:' + p));
  });
}

exports.server = Server;

exports.start = function() {
  var server = new Server(argv);
  server.run();
}