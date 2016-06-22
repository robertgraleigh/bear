(function () {
    var express = require('express');
    var router = express.Router();
    var companyCtrl = require('../company/company.ctrl.js');

    router.get('/', companyCtrl.company);

    module.exports = router;
}());
