(function () {
  var express = require('express');
  var router = express.Router();
  var blogCtrl = require('../blog/blog.api.ctrl.js');

  // Blog API urls

  //router.get('/blog', blogCtrl.postsByCategory);
  router.post('/blog', blogCtrl.postCreate);
  router.get('/blog/:postID', blogCtrl.readPost);
  router.put('/blog/:postID', blogCtrl.updatePost);
  router.delete('/blog/:postID', blogCtrl.deletePost);

  //
  router.post('/blog/:authorID/authors', blogCtrl.createAuthor);
  router.get('/blog/:authorId/authors/:authorId', blogCtrl.readAuthor);
  router.put('/blog/:authorId/authors')
  router.delete('/blog/', blogCtrl.deleteAuthor);

  module.exports = router;
}());
