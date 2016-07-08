(function () {
  /* GET INDEX page. */
  module.exports.company = function(req, res) {
    res.render('company', {
			page: {
				title: 'Company',
				description: 'Raleigh & Company is a digital business agency in Portland, OR. ',
			},
      pageHeader: {
        title: 'Company',
        subTitle: 'This is the subtitle for the about page.'
    	},
			ourStory: {
        title: 'Our Story',
        subTitle: 'This is the story of Raleigh & Co.'
      },
			ourFounder: {
        title: '',
        subtitle: '',
				header: '',
				copyOne: '',
				copyTwo: ''
      },
			idealClients: {
        title: '',
        subtitle: '',
				header: '',
				copyOne: '',
				copyTwo: ''
      },
			ventures: [
				{
					title: 'Natives Who Code',
					desc: 'A professional association for Native American and Indigenous software developers, web developers, mobile developers, and technology professionals.',
					dates: '2016 - Present',
					status: 'In development',
					link: 'http://www.nativeswhocode.org',
					text: 'Visit Natives Who Code website',
					link: 'http://www.nativeswhocode.org',
					disabled: 'disabled'
				},
				{
					title: 'Log Camp',
					desc: 'A vocational training school for underserved youth, teaching coding, computer science, and software develpoment skils.',
					dates: 'Oct, 2012 - Mar, 2016.',
					status: 'On hiatus.',
					link: 'http://www.nativeswhocode.org',
					text: 'Visit Log Camp website',
					disabled: ''
				},
				{
					title: 'Guerilla Division',
					desc: 'A boutique digital agency, offering web design, web hosting, and direct marketing services, in Portland, OR.',
					dates: '2004 - 2012.',
					status: 'Closed indefinately.',
					link: 'http://www.nativeswhocode.org',
					text: 'Visit Natives Who Code website',
					disabled: 'disabled'
				},
				{
					title: 'Press Digital Magazine',
					desc: 'A digital arts, culture, and literature publication based in Portland, OR.',
					dates: '2004 - 2005',
					status: 'Closed indefinately.',
					link: 'http://www.nativeswhocode.org',
					text: 'Visit Natives Who Code website',
					disabled: 'disabled'
				}
			]
    });
  }
}());
