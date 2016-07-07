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
					subheader: 'This is the websites section subheader',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					link: 'products/websites',
					button: 'Explore Websites'
				},
				{
					header: 'Online Shops',
					subheader: 'This is the online store section subheader',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					link: 'products/e-commerce',
					button: 'Explore Online Stores'
				},
				{
					header: 'CMS Systems',
					subheader: 'This is the cms systems section subheader',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					link: 'products/cms-systems',
					button: 'Explore CMS Systems'
				},
				{
					header: 'Apps',
					subheader: 'This is the subheader for the apps section.',
					copy: 'We offer three levels of pricing for apps. simple, complex, and custom application development and integration.',
					link: '/apps',
					button: 'Explore Apps'
				},
				{
					header: 'Content',
					subheader: 'This is the subheader for the copy section.',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					link: '/content',
					button: 'Explore Content'
				}
			]
		});
	};

	/*
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
	*/

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
