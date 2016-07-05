// app -> form-> form.ctrl.js
(function () {
	/* GET FORM view. */
	module.exports.form = function(req, res) {
		res.render('form', {
			banner: {
				heading: 'Form Test',
				copy: 'This is a basic form test'
			}
		});
	}
}());
