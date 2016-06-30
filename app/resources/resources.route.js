// resources.route.js
(function () {
	var express = require('express');
	var router = express.Router();
	var resourcesCtrl = require('../resources/resources.ctrl.js');

	router.get('/', resourcesCtrl.resources);

	module.exports = router;
}());
