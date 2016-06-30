// views -> web.route.js
(function () {
	var express = require('express');
	var router = express.Router();
	var webCtrl = require('../web/web.ctrl.js');

	router.get('/', webCtrl.web);

	module.exports = router;
}());