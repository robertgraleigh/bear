(function () {
  var mongoose = require('mongoose');
  var postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    author: [authorSchema],
    tags: {type: [String] },
    published: {type: Date, 'default': Date.now},
    updated: [Date],
    content: String
  });

  mongoose.model('Post', postSchema, 'posts');
}());
