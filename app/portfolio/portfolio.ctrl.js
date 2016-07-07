// app -> portfolio -> portfolio.ctrl.js
(function () {
	/* GET PORTFOLIO view. */
	module.exports.portfolio = function(req, res) {
		res.render('portfolio', {
			pageHeader: {
				title: 'Portfolio',
				subtitle: 'Examples of our work'
			},
			pageInfo: {
				header: 'This is the page info header',
				firstCopy: 'This is the first copy paragraph.',
				secondCopy: 'This is the second copy paragraph.'
			},
			projects: [
				{
					title: 'Hispanic Metropolitan Chamber',
					image: 'http://www.placehold.it/300x200',
					company: 'Hispanic Metropolitan Chamber',
					desc: 'I provided copywriting services for the Hispanic Chamber\'s weekly newsletter, drafting new articles each week.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Hispanic Chamber website'
					disabled: ''
				},
				{
					title: 'Programming for Progress',
					image: 'http://www.placehold.it/300x200',
					company: 'Programming for Progress',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Programming for Progress website',
					disabled: ''
				},
				{
					title: 'Travels with the Rayman',
					image: 'http://www.placehold.it/300x200',
					company: 'Travels with the Rayman',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Travels with Rayman website',
					disabled: ''
				},
				{
					title: 'Artistic Stone',
					image: 'http://www.placehold.it/300x200',
					company: 'Artistic Stone',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Artistic Stone website',
					disabled: ''
				},
				{
					title: 'Other Joseph Krune Website',
					image: 'http://www.placehold.it/300x200',
					company: 'Other Joseph Krune Website',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit other joseph website',
					disabled: ''
				},
				{
					title: 'Log Camp',
					image: 'http://www.placehold.it/300x200',
					company: 'Log Camp',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Log Camp website',
					disabled: ''
				},
				{
					title: 'Natives Who Code',
					image: 'http://www.placehold.it/300x200',
					company: 'Natives Who Code',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Natives Who Code website',
					disabled: ''
				},
				{
					title: 'Jackaldog Productions',
					image: 'http://www.placehold.it/300x200',
					company: 'Jackaldog Productions',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Jackaldog Productions website',
					disabled: ''
				},
				{
					title: 'Blood and Bergamot',
					image: 'http://www.placehold.it/300x200',
					company: 'Blood and Bergamot',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Blood and Bergamot website',
					disabled: ''
				},
				{
					title: 'Portland Bike Station',
					image: 'http://www.placehold.it/300x200',
					company: 'Portland Bike Station',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Bike Station website',
					disabled: ''
				},
				{
					title: 'Drug Free Athletes',
					image: 'http://www.placehold.it/300x200',
					company: 'Drug Free Athletes',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.drugfreeathletes.com',
					text: 'Visit Drug Free website',
					disabled: ''
				},
				{
					title: 'IN Corvallis Monthly Magazine',
					image: 'http://www.placehold.it/300x200',
					company: 'Corvallis Monthly Magazine',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'https://www.linkedin.com/company/in-corvallis-magazine',
					text: 'Visit Corvallis Monthly website',
					disabled: ''
				},
				{
					title: 'Corvallis Artisans Market',
					image: 'http://www.placehold.it/300x200',
					company: 'Corvallis Artisans Market',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.gazettetimes.com/corvallis-artisans-market-boutique/image_d2dcc982-d549-11de-b92e-001cc4c002e0.html',
					text: 'Visit Artisans Market website',
					disabled: ''
				},
				{
					title: 'The Back Room',
					image: 'http://www.placehold.it/300x200',
					company: 'The Back Room',
					desc: 'I performed basic branding, event management, sound services',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Back Room website',
					disabled: ''
				},
				{
					title: 'Intersector Workspace',
					image: 'http://www.placehold.it/300x200',
					company: 'Intersector Workspace',
					desc: 'I performed basic web development, marketing, branding, and content services',
					link: 'https://intersectorwork.wordpress.com/',
					text: 'Visit Intersector website',
					disabled: ''
				},
				{
					title: 'Beckon Call Window Cleaners',
					image: 'http://www.placehold.it/300x200',
					company: 'Beckon Call Window Cleaners',
					desc: 'I performed copywriting services for the branding design services for the window cleaning firm.',
					link: 'http://www.beckoncallservices.com/',
					text: 'Visit Beckon Call website',
					disabled: ''
				},
				{
					title: 'Willamette Angel Conference',
					image: 'http://www.placehold.it/300x200',
					company: 'Willamette Angel Conference',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Willamette Angel website',
					disabled: ''
				},
				{
					title: 'Dafna Idit Margalit',
					image: 'http://www.placehold.it/300x200',
					company: 'Dafna Idit Margalit',
					desc: 'I built a website and created an e-commerce solution in Portland, OR.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Dafna Idit website',
					disabled: ''
				},
				{
					title: 'Willamette Innovators Night',
					image: 'http://www.placehold.it/300x200',
					company: 'Willamette Innovator\'s Night',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Willamette Innovator\'s website',
					disabled: ''
				},
				{
					title: 'Willamette Innovation Network',
					image: 'http://www.placehold.it/300x200',
					company: 'Willamette Innovation Network',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Innovation Network website',
					disabled: ''
				},
				{
					title: 'Guerilla Division',
					image: 'http://www.placehold.it/300x200',
					company: 'Guerilla Division',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Guerilla Division website',
					disabled: 'disabled'
				},
				{
					title: 'Solidcraft Countertops',
					image: 'http://www.placehold.it/300x200',
					company: 'Solidcraft Countertops',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Solidcraft website',
					disabled: 'disabled'
				},
				{
					title: 'Collage',
					image: 'http://www.placehold.it/300x200',
					company: 'Collage',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Collage website',
					disabled: 'disabled'
				},
				{
					title: 'Stellas Barbershop',
					image: 'http://www.placehold.it/300x200',
					company: 'Stella\'s Barbershop',
					desc: 'I performed copywriting services for the Newsletter and web hosting services for located in North Portland.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Stella\'s website',
					disabled: 'disabled'
				},
				{
					title: 'Dorado Sound',
					image: 'http://www.placehold.it/300x200',
					company: 'Dorado Sound',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Dorado Sound website'
					disabled: ''
				},
				{
					title: 'Press Digital Magazine',
					image: 'http://www.placehold.it/300x200',
					company: 'Press Digital Magazine',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Press Digital website',
					disabled: 'disabled'
				},
				{
					title: 'Ooligan Press',
					image: 'http://www.placehold.it/300x200',
					company: 'Ooligan Press',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Ooligan Press website',
					disabled: ''
				},
				{
					title: 'Corvallis Youth Garden Project',
					image: 'http://www.placehold.it/300x200',
					company: 'Corvallis Youth Garden Project',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://communityservices.us/education/detail/category/youth-garden/',
					text: 'Visit Corvallis Youth website',
					disabled: ''
				}
			]
		});
	};
}());
