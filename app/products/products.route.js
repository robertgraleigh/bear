(function () {
	var express = require('express');
	var router = express.Router();
	var productsCtrl = require('../products/products.ctrl.js');

	/* Get 'products' views */
	router.get('/', productsCtrl.products);

	router.get('/products/:product', function(req, res) {
		res.send(req.params.product);
	});
	
	module.exports = router;

}());
