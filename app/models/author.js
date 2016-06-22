(function () {
  var mongoose = require('mongoose');
  var authorSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: false},
    city: {type: String, required: true},
    state: {type: String, required: true},
  });

  mongoose.model('Author', authorSchema, 'authors');
}());
