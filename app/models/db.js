(function () {
  var mongoose = require('mongoose');
  var dbURI = 'mongodb://localhost/Bear';
  var mongooseShutdown;
  var readLine = require('readline');
  //var blog = require('.blog.js');
  //var post = require('./post.js');
  //var author = require('./author.js');
  //var project = require('./project.js');

  if (process.platform === 'win32') {
    var rl = readLine.createInterface ({
      input: process.stdin,
      output: process.stdout
    });
    rl.on ('SIGINT', function () {
      process.emit ('SIGINT');
    });
  }

  if (process.env.NODE_ENV === 'production') {
    // Uncomment this code if using MONGOLAB
    //dbURI = process.env.MONGOLAB_URI;
    dbURI =   'mongodb://heroku_app20110907:4rqhlidfdqq6vgdi06c15jrlpf@ds033669.mongolab.com:33669/heroku_app20110907';
  }

  mongoose.connect(dbURI);

  mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to: ' + dbURI);
  });

  mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
  });

  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
  });

  // For mongoose database connection termination
  mongooseShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
      console.log('Mongoose disconnected through: ' + msg);
      callback();
    });
  };

  // For nodemon manual app restart
  process.once('SIGUSR2', function () {
    mongooseShutdown('nodemon restart', function () {
      process.kill(process.pid, 'SIGUSR2');
    });
  });

  // For manual app termination
  process.on('SIGINT', function () {
    mongooseShutdown('app termination', function () {
      process.exit(0);
    });
  });

  // For Heroku app termination
  process.on('SIGTERM', function () {
    mongooseShutdown('Heroku app shutdown', function () {
      process.exit(0);
    });
  });

}());
