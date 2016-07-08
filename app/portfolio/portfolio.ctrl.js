// app -> portfolio -> portfolio.ctrl.js
(function () {
	/* GET PORTFOLIO view. */
	module.exports.portfolio = function(req, res) {
		res.render('portfolio', {
			pageHeader: {
				title: 'Portfolio',
				subtitle: 'View examples of our paid and unpaid client work.'
			},
			pageInfo: {
				header: 'You can build your business together with us. Or you can choose to build your business alone.',
				firstCopy: 'At Raleigh &amp; Company we work with business owners to start, build, and sustain businesses.',
				secondCopy: 'We work with nonprofits, artists, and individual entrepreneurs.'
			},
			projects: [
				{
					title: 'Hispanic Metropolitan Chamber',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Hispanic Metropolitan Chamber',
					desc: 'I provided paid copywriting services for the Hispanic Chamber\'s weekly newsletter, writing articles for 4000 weekly subscribers.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Hispanic Chamber website',
					disabled: ''
				},
				{
					title: 'Programming to Progress',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Programming for Progress',
					desc: 'I volunteered unpaid frontend web development and website design services for this ongoing Hack Oregon education project.',
					link: 'http://www.programmingtoprogress.org/',
					text: 'Visit the Programming for Progress website',
					disabled: ''
				},
				{
					title: 'Travels with the Rayman',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Travels with the Rayman',
					desc: 'I provided paid copywriting, website migration, and database migration services for this travel blog web project.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Travels with Rayman blog',
					disabled: ''
				},
				{
					title: 'Artistic Stone',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Artistic Stone',
					desc: 'I provided paid website copywriting, and web design services for this website project.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Artistic Stone website',
					disabled: ''
				},
				{
					title: 'crazy Colorful Fitness',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'crazy Colorful Fitness',
					desc: 'I provided paid website copywriting services for this fitness blog website project.',
					link: 'http://www.crazycolorfulfitness.com',
					text: 'Visit the crazy Colorful Fitness website',
					disabled: ''
				},
				{
					title: 'Log Camp',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Log Camp',
					desc: 'I provided paid fullstack web development, design, branding, copywriting, and technology instructional services for this project.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Log Camp website',
					disabled: 'disabled'
				},
				{
					title: 'Natives Who Code',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Natives Who Code',
					desc: 'I provided unpaid website development, website design, branding, and copywriting services for this not-for-profit organization.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Natives Who Code website',
					disabled: ''
				},
				{
					title: 'Survivance',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Survivance',
					desc: 'I provided paid website development, website design, website hosting, and copywriting services for this Indigenous game website.',
					link: 'http://www.survivance.org',
					text: 'Visit the Survivance website',
					disabled: ''
				},
				{
					title: 'Jackaldog Productions',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Jackaldog Productions',
					desc: 'I provided paid web development, web design, and copywriting services for this photagrapher based in Portland, OR.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Jackaldog Productions website',
					disabled: ''
				},
				{
					title: 'Blood and Bergamot',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Blood and Bergamot',
					desc: 'I provided volunteer web development, web design, and copywriting services for this theater production in Portland, OR.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Blood and Bergamot website',
					disabled: ''
				},
				{
					title: 'Portland Bike Station',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Portland Bike Station',
					desc: 'I provided paid web development, web design, e-commerce, and direct marketing services for this bicycle repair shop in Portland, OR.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Bike Station website',
					disabled: ''
				},
				{
					title: 'Drug Free Athletes',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Drug Free Athletes',
					desc: 'I provided paid website development and web design services for the Newsletter',
					link: 'http://www.drugfreeathletes.com',
					text: 'Visit the Drug Free Athletes website',
					disabled: 'disabled'
				},
				{
					title: 'IN Corvallis Monthly Magazine',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Corvallis Monthly Magazine',
					desc: 'I provided paid copywriting and content services for this monthly magazine based in Corvallis, OR.',
					link: 'https://www.linkedin.com/company/in-corvallis-magazine',
					text: 'Visit the IN Corvallis Monthly website',
					disabled: ''
				},
				{
					title: 'Corvallis Artisans Market',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Corvallis Artisans Market',
					desc: 'I provided paid web development, web design, branding, copywriting and direct marketing services for this year-round artists boutique.',
					link: 'http://www.gazettetimes.com/corvallis-artisans-market-boutique/image_d2dcc982-d549-11de-b92e-001cc4c002e0.html',
					text: 'Visit the Corvallis Artisans Market website',
					disabled: ''
				},
				{
					title: 'The Back Room',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'The Back Room',
					desc: 'I provided basic branding, event management, sound services for this all ages music venue and event space.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Back Room website',
					disabled: 'disabled'
				},
				{
					title: 'Intersector Workspace',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Intersector Workspace',
					desc: 'I provided paid web development, direct marketing, branding, and copywriting services for this coworking space in Corvallis, OR.',
					link: 'https://intersectorwork.wordpress.com/',
					text: 'Visit the Intersector website',
					disabled: ''
				},
				{
					title: 'Beckon Call Window Cleaners',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Beckon Call Window Cleaners',
					desc: 'I provided paid branding design services for the window cleaning firm located in Corvallis, OR.',
					link: 'http://www.beckoncallservices.com/',
					text: 'Visit the Beckon Call website',
					disabled: ''
				},
				{
					title: 'Willamette Angel Conference',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Willamette Angel Conference',
					desc: 'I provided paid copywriting, graphic design, and direct marketing services for this angel investment conference located in Corvallis, OR.',
					link: 'http://willametteconference.com/',
					text: 'Visit the Willamette Angel Conference website',
					disabled: ''
				},
				{
					title: 'Dafna Idit Margalit',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Dafna Idit Margalit',
					desc: 'I provided paid website development, website design,  and e-commerce services for this artist located in Portland, OR.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Dafna Idit Margalit\'s website',
					disabled: 'disabled'
				},
				{
					title: 'Willamette Innovators Night Expo',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Willamette Innovator\'s Night',
					desc: 'I provided paid event management, event marketing, and sponsorship sales services for this yearly event held in Corvallis, OR.',
					link: 'https://www.willametteinnovators.com/win-expo/',
					text: 'Visit the Willamette Innovator\'s Night website',
					disabled: ''
				},
				{
					title: 'Willamette Innovation Network',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Willamette Innovation Network',
					desc: 'I provided paid project management, branding, and copywriting services for this website.',
					link: 'https://www.willametteinnovators.com/',
					text: 'Visit the Willamette Innovators Network website',
					disabled: ''
				},
				{
					title: 'Stained Glass Overlay',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Stained Glass Overlay Portland',
					desc: 'I provided paid website development, website design, and website hosting services for this stained glass company in Portland, OR.',
					link: 'http://www.stainedglassoverlay.com',
					text: 'Visit the Stained Glass Overlay website',
					disabled: ''
				},
				{
					title: 'Solidcraft Countertops',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Solidcraft Countertops',
					desc: 'I provided paid website development, website design, web hosting, and copywriting services for this countertop company in Portland, OR.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Solidcraft Countertops website',
					disabled: 'disabled'
				},
				{
					title: 'Collage',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Collage',
					desc: 'I provided paid website development, website design, website hosting, and copywriting services for this art supply store in Portland, OR.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Collage website',
					disabled: 'disabled'
				},
				{
					title: 'Stellas Barbershop',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Stella\'s Barbershop',
					desc: 'I provided paid website development, website design, website hosting, and copywriting services for this barbershop in Portland, OR.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit Stella\'s Barbershop website',
					disabled: 'disabled'
				},
				{
					title: 'Dorado Sound',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Dorado Sound',
					desc: 'I provided paid website development, website design, website hosting, and e-commerce services for this musical group in Portland, OR.',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Dorado Sound website',
					disabled: ''
				},
				{
					title: 'Guerilla Division',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Guerilla Division',
					desc: 'I provided paid  copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Guerilla Division website',
					disabled: 'disabled'
				},
				{
					title: 'Press Digital Magazine',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Press Digital Magazine',
					desc: 'I performed copywriting services for the Newsletter',
					link: 'http://www.hmccoregon.com',
					text: 'Visit the Press Digital Magazine website',
					disabled: 'disabled'
				},
				{
					title: 'Ooligan Press',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Ooligan Press',
					desc: 'I provided unpaid direct sales and marketing services during a summer internship at this Portland State University publisher.',
					link: 'https://ooligan.pdx.edu/',
					text: 'Visit the Ooligan Press website',
					disabled: ''
				},
				{
					title: 'Corvallis Youth Garden Project',
					imageOne: '/img/placeholder.png',
					imageTwo: '/img/placeholder.png',
					company: 'Corvallis Youth Garden Project',
					desc: 'I provided paid operations and management support for a community youth workforce development project in Corvallis, OR.',
					link: 'http://communityservices.us/education/detail/category/youth-garden/',
					text: 'Visit the Corvallis Youth Garden website',
					disabled: ''
				}
			]
		});
	};
}());
