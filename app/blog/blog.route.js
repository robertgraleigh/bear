(function () {
    var express = require('express');
    var router = express.Router();
    var blogCtrl = require('../blog/blog.ctrl.js');

    router.get('/', blogCtrl.blog);

    module.exports = router;
}());
