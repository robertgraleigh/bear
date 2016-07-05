// app -> locations-> locations.ctrl.js
(function () {
  var express = require('express');
	var router = express.Router();
	var locationsCtrl = require('../locations/locations.ctrl.js');

	// Locations views
	router.get('/locations', locationsCtrl.locations);
	router.get('/locations', locationsCtrl.locationList);
	router.get('/locations', locationsCtrl.locationInfo);
	router.get('/locations/review/new', locationsCtrl.addReview);

	module.exports = router;
}());
