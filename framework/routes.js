module.exports = function (app) {
  app.get('/', function (req, res, next) {
    res.render('index', { active: 'home'});
  });

  app.get('/signup', function (req, res, next) {
    res.render('signup', { active: 'signup'});
  });
  app.get('/login', function (req, res, next) {
    res.render('login', { active: 'login'});
  });  
  
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.render('error', {
      message: err.message,
      error: err
    });
    next(err);
  });
  
  // error handlers
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }
  
  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
};