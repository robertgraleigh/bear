(function () {
	var express = require('express');
	var router = express.Router();
	var portfolioCtrl = require('../portfolio/portfolio.ctrl.js');

	router.get('/', portfolioCtrl.portfolio);

	module.exports = router;
}());
