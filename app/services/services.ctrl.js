(function () {
	/* GET SERVICES view */
	module.exports.services = function(req, res) {
		res.render('services', {
			banner: {
				heading: 'Services',
				copy: ''
			},
			box: {
				title: 'Professional Services offered for the discerning small business owner',
				heading: 'This website is about professional services for customer',
				copyOne: 'This is a paragraph with all of the necessary content I need in order to launch this new startup idea of mine. To build up the contracts I need in order to be successful.',
				copyTwo: 'This is a paragraph with all of the necessary content I need in order to launch this new startup idea of mine. To build up the contracts I need in order to be successful.',
				buttonOne: 'Get started',
				buttonTwo: 'Contact'
			},
			services: [
				{
					header: 'Website Development',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					image: 'http://loremflickr.com/g/500/300/portland',
					link: 'products/websites',
					button: 'Explore Web Development'
				},
				{
					header: 'Website Design',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					image: 'http://loremflickr.com/g/500/300/portland',
					link: 'products/e-commerce',
					button: 'Explore website Maintenance'
				},
				{
					header: 'Website Maintenance',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					image: 'http://loremflickr.com/g/500/300/portland',
					link: 'products/cms-systems',
					button: 'Explore website redesign'
				},
				{
					header: 'Digital Marketing',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					image: 'http://loremflickr.com/g/500/300/portland',
					link: 'products/cms-systems',
					button: 'Explore digital marketing'
				},
				{
					header: 'Copywriting',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					image: 'http://loremflickr.com/g/500/300/portland',
					link: 'products/cms-systems',
					button: 'Explore copywriting'
				},
				{
					header: 'Branding',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					image: 'http://loremflickr.com/g/500/300/portland',
					link: 'products/cms-systems',
					button: 'Explore branding'
				},
				{
					header: 'Consulting',
					copy: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					image: 'http://loremflickr.com/g/500/300/portland',
					link: 'products/consulting',
					button: 'Explore branding'
				}
			],
			packages: [
				{
					header: 'Package Level One',
					description: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					image: 'http://loremflickr.com/g/500/300/portland',
					link: 'products/websites',
					button: 'Explore Web Development'
				},
				{
					header: 'Package Level Two',
					description: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					image: 'http://loremflickr.com/g/500/300/portland',
					link: 'products/websites',
					button: 'Explore Web Development'
				},
				{
					header: 'Package Level Three',
					description: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					image: 'http://loremflickr.com/g/500/300/portland',
					link: 'products/websites',
					button: 'Explore Web Development'
				},
				{
					header: 'Package Level Four',
					description: 'We offer websites for simple, dynamic, and custom pricing tiers. We\'ll give you whatever you want or need. This is another small paragraph with the stuff needed for this section.',
					image: 'http://loremflickr.com/g/500/300/portland',
					link: 'products/websites',
					button: 'Explore Web Development'
				}
			]
		});
	}
}());
