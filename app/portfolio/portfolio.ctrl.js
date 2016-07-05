// app -> portfolio -> portfolio.ctrl.js
(function () {
	/* GET PORTFOLIO view. */
	module.exports.portfolio = function(req, res) {
		res.render('portfolio', {
			banner: {
				heading: 'Portfolio',
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
			projects: [
				{
					title: 'Hispanic Metropolitan Chamber',
					image: 'http://www.placehold.it/300x200',
					company: 'Hispanic Metropolitan Chamber',
					desc: 'I provided copywriting services for the Hispanic Chamber\'s weekly newsletter, drafting new articles each week.',
					href: 'http://www.hmccoregon.com',
					action: 'Visit website'
				},
				{
					title: 'Programming for Progress',
					image: 'http://www.placehold.it/300x200',
					company: 'Programming for Progress',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.hackoregon.com',
					action: 'Visit website'
				},
				{
					title: 'Travels with the Rayman',
					image: 'http://www.placehold.it/300x200',
					company: 'Travels with the Rayman',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Artistic Stone',
					image: 'http://www.placehold.it/300x200',
					company: 'Artistic Stone',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Other Joseph Krune Website',
					image: 'http://www.placehold.it/300x200',
					company: 'Other Joseph Krune Website',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Log Camp',
					image: 'http://www.placehold.it/300x200',
					company: 'Log Camp',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Natives Who Code',
					image: 'http://www.placehold.it/300x200',
					company: 'Natives Who Code',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Jackaldog Productions',
					image: 'http://www.placehold.it/300x200',
					company: 'Jackaldog Productions',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Blood and Bergamot',
					image: 'http://www.placehold.it/300x200',
					company: 'Blood and Bergamot',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Portland Bike Station',
					image: 'http://www.placehold.it/300x200',
					company: 'Portland Bike Station',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Drug Free Athletes',
					image: 'http://www.placehold.it/300x200',
					company: 'Drug Free Athletes',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Corvallis Monthly Magazine',
					image: 'http://www.placehold.it/300x200',
					company: 'Corvallis Monthly Magazine',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Corvallis Artisans Market',
					image: 'http://www.placehold.it/300x200',
					company: 'Corvallis Artisans Market',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'The Back Room',
					image: 'http://www.placehold.it/300x200',
					company: 'The Back Room',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Intersector Workspace',
					image: 'http://www.placehold.it/300x200',
					company: 'Intersector Workspace',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Beckon Call Window Cleaners',
					image: 'http://www.placehold.it/300x200',
					company: 'Beckon Call Window Cleaners',
					desc: 'I performed copywriting services for the branding design services for the window cleaning firm.',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Willamette Angel Conference',
					image: 'http://www.placehold.it/300x200',
					company: 'Willamette Angel Conference',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Dafna Idit Margalit',
					image: 'http://www.placehold.it/300x200',
					company: 'Dafna Idit Margalit',
					desc: 'I built a website and created an e-commerce solution in Portland, OR.',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Willamette Innovators Night',
					image: 'http://www.placehold.it/300x200',
					company: 'Willamette Innovator\'s Night',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Willamette Innovation Network',
					image: 'http://www.placehold.it/300x200',
					company: 'Willamette Innovation Network',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Guerilla Division',
					image: 'http://www.placehold.it/300x200',
					company: 'Guerilla Division',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Solidcraft Countertops',
					image: 'http://www.placehold.it/300x200',
					company: 'Solidcraft Countertops',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Collage',
					image: 'http://www.placehold.it/300x200',
					company: 'Collage',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Stellas Barbershop',
					image: 'http://www.placehold.it/300x200',
					company: 'Stella\'s Barbershop',
					desc: 'I performed copywriting services for the Newsletter and web hosting services for located in North Portland.',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Dorado Sound',
					image: 'http://www.placehold.it/300x200',
					company: 'Dorado Sound',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Press Digital Magazine',
					image: 'http://www.placehold.it/300x200',
					company: 'Press Digital Magazine',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Ooligan Press',
					image: 'http://www.placehold.it/300x200',
					company: 'Ooligan Press',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				},
				{
					title: 'Corvallis Youth Garden Project',
					image: 'http://www.placehold.it/300x200',
					company: 'Corvallis Youth Garden Project',
					desc: 'I performed copywriting services for the Newsletter',
					href: 'http://www.google.com',
					action: 'Visit website'
				}
			]
		});
	};
}());
