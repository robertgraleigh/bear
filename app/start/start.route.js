(function () {
    var express = require('express');
    var router = express.Router();
    var startCtrl = require('../start/start.ctrl.js');

    router.get('/', startCtrl.start);

    module.exports = router;
}());
