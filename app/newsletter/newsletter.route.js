// app -> newsletter -> newsletter.route.js
(function () {
	var express = require('express');
	var router = express.Router();
	router.route('/subscribers')
	.post(function(req, res) {
		var subscriber = new Subscriber();
		subscriber.firstName = req.body.firstName;
		subscriber.lastName = req.body.lastName;
		subscriber.emailAddress = req.body.emailAddress;
		subscriber.save(function(err) {
			if (err) {
				res.send(err);
			} else  {
				res.json({message: 'Subscriber created: ' + firstName + lastName + emailAddress })
			}
		});
	});

	res.render('Subscriber: ' + firstName + lastName + emailAddress);

	module.exports = router;
}());
