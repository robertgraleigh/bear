// app -> index -> index.route.js
(function () {
    var express = require('express');
    var router = express.Router();
    var indexCtrl = require('../index/index.ctrl.js');

    router.get('/', indexCtrl.index);

    module.exports = router;
}());
