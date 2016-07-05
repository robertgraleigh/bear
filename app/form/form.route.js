// app -> form -> form.route.js
(function () {
	var express = require('express');
	var router = express.Router();
	var formCtrl = require('../form/form.ctrl.js');

	router.get('/', formCtrl.form);

	module.exports = router;
}());
