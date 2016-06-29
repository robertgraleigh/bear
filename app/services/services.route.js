// services.route.js
(function () {
	var express = require('express');
	var router = express.Router();
	var servicesCtrl = require('../services/services.ctrl.js');

	router.get('/', servicesCtrl.services);

	module.exports = router;
}());
