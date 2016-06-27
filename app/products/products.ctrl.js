(function () {
	/* GET PRODUCTS view. */
	module.exports.products = function(req, res) {
		res.render('products', {
			pageHeader: {
				title: 'Products',
				subTitle: 'This is the subtitle for the products page.'
			},
			products: [
				{
					header: 'Websites',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					link: 'products/websites',
					button: 'View website packages'
				},
				{
					header: 'Online Store',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					link: 'products/e-commerce',
					button: 'View e-commerce packages'
				},
				{
					header: 'CMS Systems',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					link: 'products/cms-systems',
					button: 'View cms-systems'
				},
				{
					header: 'Email',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					link: 'products/cms-systems',
					button: 'View cms-systems'
				},
				{
					header: 'Social Media',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					link: 'products/cms-systems',
					button: 'View cms-systems'
				},
				{
					header: 'Copywriting',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					link: 'products/cms-systems',
					button: 'View cms-systems'
				}
			]
		});
	};

	/* GET 'websites' view */
	module.exports.website = function(req, res) {
		res.render('websites', {title: 'Websites'});
	};

	/* GET 'store' view */
	 module.exports.store = function(req, res) {
		 res.render('online-stores', { title: 'Online Stores' });
	 };

	/* GET 'cms' view */
	module.exports.cms = function(req, res) {
		res.render('cms-systems', { title: 'CMS Systems' });
	};

	/* GET 'newsletters' view */
	module.exports.newsletter = function(req, res) {
		res.render('newsletters', { title: 'Newsletters' });
	};

	/* GET 'hosting' view */
	module.exports.hosting = function(req, res) {
		res.render('hosting', { title: 'Hosting' });
	};

	/* GET 'new' view */
	module.exports.new = function(req, res) {
		res.render('new', { title: 'New' });
	};

}());
