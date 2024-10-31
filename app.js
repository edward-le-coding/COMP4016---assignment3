var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
const myEnv = dotenv.config({ path: path.resolve(path.join(__dirname, '/config/.env')) });

// Assignment 1 Paths
var indexRouter = require('./routes/index');
var fooRouter = require('./routes/foo');
var helloRouter = require('./routes/hello');
var killRouter = require('./routes/kill');

// Assignment 2 Paths
var configValueRouter = require('./routes/configValue');
var secretValueRouter = require('./routes/secretValue');
var envValueRouter = require('./routes/envValue');

// Assignment 3 Paths
var saveStringRouter = require("./routes/saveString");
var getStringRouter = require('./routes/getString');
var busyWaitRouter = require('./routes/busyWait');
var isAliveRouter = require('./routes/isAlive');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/foo', fooRouter);
app.use('/hello', helloRouter);
app.use('/kill', killRouter);
app.use('/configValue', configValueRouter);
app.use('/secretValue', secretValueRouter);
app.use('/envValue', envValueRouter);
app.use('/saveString', saveStringRouter);
app.use('/getString', getStringRouter);
app.use('/busyWait', busyWaitRouter);
app.use('/isAlive', isAliveRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { 'title': err });
  res.send(err);
});

module.exports = app;
