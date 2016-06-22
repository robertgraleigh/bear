(function () {
  var mongoose = require('mongoose');
  var projectSchema = new mongoose.Schema({
    title: {type: String, required: true, min: 2, max: 25},
    preview: {type: String, required: true, min: 2, max: 140},
    url: {type: String, required: true},
    link: {type: String, required: true}
  });

  mongoose.model('Project', postSchema, 'projects');

}());
