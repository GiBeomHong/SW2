var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var ejs = require('ejs');
var http = require('http');

var routes = require('./routes/index');
var users = require('./routes/users');
var Pagecntr = require('./control/pagecntr');
var Dbcntr = require('./control/dbcntr');

var app = express();

var db = require('./db');
db.start();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine("html", ejs.renderFile);

app.set('port', process.env.PORT || 4000);
app.set('host', process.env.HOST || '52.88.241.133');
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port') + " "+app.get('host'));
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);
app.all('/',Pagecntr.mainpage);
app.all('/man',Pagecntr.man);
app.all('/woman',Pagecntr.woman);
app.all('/enrollpage',Pagecntr.enrollpage);

app.all('/man_vote',Dbcntr.man_vote);
app.all('/woman_vote',Dbcntr.woman_vote);
app.all('/enroll',Dbcntr.enroll);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
