(function () {
    var express = require('express');
    var router = express.Router();
    var contactCtrl = require('../contact/contact.ctrl.js');

    router.get('/', contactCtrl.contact);

    module.exports = router;
}());
