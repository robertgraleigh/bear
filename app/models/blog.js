(function () {
  // resume at page 175 when you add mongolabs
  var mongoose = require('mongoose');

  var blogSchema = new mongoose.Schema ({
    title: {type: String, required: true},
    author: {type: String, required: true}
    url: {type: String, required: true}
  });

  var authorSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: false},
    city: {type: String, required: true},
    state: {type: String, required: true, min: 2, max: 2}
  });

  var postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    author: [authorSchema],
    tags: {type: [String] },
    published: {type: Date, 'default': Date.now},
    updated: [Date],
    content: String
  });

  var categorySchema = new mongoose.Schema({
    name: {type: String, required: true}
  });

  mongoose.model('Blog', blogSchema, 'blogs');
  mongoose.model('Author', authorSchema, 'authors');
  mongoose.model('Post', postSchema, 'posts');
  mongoose.model('Category', categorySchema, 'categories');
}());
