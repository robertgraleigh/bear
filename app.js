// app.js
(function () {
	/* ==========================================================================
		Requires: Instantiates the necessary modules for the Express app.
	========================================================================== */

	var express = require('express');
  var path = require('path');
	var http = require('http');
  var favicon = require('serve-favicon');
  var logger = require('morgan');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var db = require('./app/models/db.js');
	var router = express.Router();
	var app = express();

	/* ==========================================================================
		Routes: Defines the explicit routes for the front-end client app.
	========================================================================== */

  var index = require('./app/index/index.route.js');
  var about = require('./app/about/about.route.js');
  var company = require('./app/company/company.route.js');
  var products = require('./app/products/products.route.js');
  var services = require('./app/services/services.route.js');
	var web = require('./app/web/web.route.js');
  var portfolio = require('./app/portfolio/portfolio.route.js');
	var resources = require('./app/resources/resources.route.js');
  var blog = require('./app/blog/blog.route.js');
  var contact = require('./app/contact/contact.route.js');
  var start = require('./app/start/start.route.js');
	// var newsletter = require('./app/newsletter/newsletter.route.js');

  //var locations = require('./app/locations/locations.route.js');

  // Application API routes
  //var api = require('./api/index/index.api.route.js');

  //var routes = require('./routes/index');
  //var users = require('./routes/users');

	/* ==========================================================================
		Locals: Defines locals for the front-end app template. Move to config file.
	========================================================================== */

	app.locals.name = 'Bear';
	app.locals.tagline = 'An application with animals on the cover'
	app.locals.email = 'info@rgrventures.com';
	app.locals.phone = '+1 (xxx) xxx-xxxx';
	app.locals.company = 'Raleigh & Co., Inc.';
	app.locals.website = 'https://www.raleighandco.com';
	app.locals.twitter = '@RobertGRaleigh';
	app.locals.github = '@RobertGRaleigh';
	app.locals.year = new Date().getFullYear();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  // comment or uncomment if favicon has been placed in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  // Defines the default application path
  app.use('/', index);
  app.use('/about', about);
  app.use('/company', company);
  app.use('/products', products);
	app.use('/products/:product', function (req, res, next) {
		console.log(req.params.product)
		if(req.params.id == null) {
			res.alert('Product not found!');
		} else next();
	});
  app.use('/services', services);
	app.use('/web', web);
  app.use('/portfolio', portfolio);
	app.use('/resources', resources);
  app.use('/blog', blog);
  app.use('/contact', contact);
  app.use('/start', start);
	// app.use('/newsletter', newsletter);
  //app.use('/locations', locations);
  //app.use('/users', users);

	http.createServer(app).listen(3000, function () {
		console.log('Express app started');
	});

  // Defines the application API routes
  app.use('/api/', index);

  // catch 404 error and forward to error handler
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
}());
