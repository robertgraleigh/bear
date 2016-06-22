(function () {
    var express = require('express');
    var router = express.Router();
    var aboutCtrl = require('../about/about.ctrl.js');

    router.get('/', aboutCtrl.about);

    module.exports = router;
}());
