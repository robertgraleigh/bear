(function () {
	/* GET ABOUT page. */
	module.exports.about = function(req, res) {
		res.render('about', {
			pageHeader: {
				title: 'About',
				subTitle: 'This is the subtitle for the about page.'
			},
			storySection: {
				title: 'Contact',
				subTitle: 'This is the subtitle for the contact page.',
				subCopy: 'This is the supporting copy for the contact page.'
			},
			experienceSection: {
				title: 'Experience',
				subTitle: 'Exerience with the human side of technology education',
				subCopy: 'This is the supporting copy for the statement.'
			},
			skillsetSection: {
				title: 'Skillset',
				subTitle: 'This is the subheading for the skillset section.',
				subCopy: 'This is supporting copy for the additional section.'
			},
			testimonialsSection: {
				title: 'Skillset',
				subTitle: 'This is the subheading for the skillset section.',
				subCopy: 'This is supporting copy for the additional section.'
			},
			portfolioSection: {
				title: 'Skillset',
				subTitle: 'This is the subheading for the skillset section.',
				subCopy: 'This is supporting copy for the additional section.'
			},
			contactSection: {
				title: 'Skillset',
				subTitle: 'This is the subheading for the skillset section.',
				subCopy: 'This is supporting copy for the additional section.'
			},
			employers: [
				{
					image: '/img/placeholder.png',
					title: 'Fullstack Web Developer',
					company: 'Raleigh &amp; Co.',
					dates: '2016 - Present'
				},
				{
					image: '/img/placeholder.png',
					title: 'Program Director',
					company: 'Log Camp at Impact NW',
					dates: '2012 - 2016'
				},
				{
					image: '/img/corvallis-chamber-of-commerce-logo.png',
					title: 'Technology Community Relations Specialist',
					company: 'Corvallis Chamber of Commerce',
					dates: '2009'
				},
				{
					image: '/img/technology-association-oregon-logo.jpg',
					title: 'Event Manager',
					company: 'Technology Association of Oregon',
					dates: '2009'
				},
				{
					image: '/img/placeholder.png',
					title: 'Frontend Web Developer',
					company: 'Guerilla Division',
					dates: '2007 - 2012'
				},
				{
					image: '/img/oregon-health-sciences-university-logo.gif',
					title: 'Shift Leader',
					company: 'Oregon Health Sciences University',
					dates: '2004 - 2008'
				}
			],
			volunteers: [
				{
					image: '/img/placeholder.png',
					title: 'Community Advisor',
					program: 'Digital Equity Action Plan',
					company: 'City of Portland',
				},
				{
					image: '/img/placeholder.png',
					title: 'Public Guardian',
					program: 'Office of Aging and Disability',
					company: 'Multnomah County',
				},
				{
					image: '/img/placeholder.png',
					title: 'Frontend Developer',
					program: 'Education',
					company: 'Hack Oregon',
				},
				{
					image: '/img/placeholder.png',
					title: 'Mentor',
					program: 'The Young Entrepreneurs',
					company: 'TIE Oregon',
				},
				{
					image: '/img/placeholder.png',
					title: 'Technology Mentor',
					program: 'Startup Camp PDX',
					company: 'Caitlin Gabel School',
				},
				{
					image: '/img/placeholder.png',
					title: 'Council Member',
					program: 'Community Leaders Council',
					company: 'Native American Youth and Family Association',
				},
				{
					image: '/img/placeholder.png',
					title: 'Committee Member',
					program: 'Stewardship and Property Committee',
					company: 'First Baptist Church of Portland',
				}
			],
			educations: [
				{
					image: '/img/placeholder.png',
					degree: 'Bachelor of Arts, English',
					program: 'College of Arts and Sciences',
					school: 'Portland State University',
					dates: 'Graduated 2006'
				},
				{
					image: '/img/placeholder.png',
					degree: 'Associates in Web Development and Design',
					program: '',
					school: 'Portland Community College',
					dates: '2011 - 2013'
				}
			],
			trainings: [
				{
					image: '/img/placeholder.png',
					degree: 'Certificate',
					program: 'Full Stack Development',
					school: 'Treehouse',
					dates: 'Completed 2006'
				},
				{
					image: '/img/placeholder.png',
					degree: 'Project Management',
					program: 'Management and Supervisory Development',
					school: 'Portland Community College',
					dates: 'Graduated 2006'
				},
				{
					image: '/img/placeholder.png',
					degree: 'Leadership',
					program: 'Management and Supervisory Development',
					school: 'Portland Community College',
					dates: 'Graduated 2006'
				}
			],
			testimonials: [
				{
					image: '/img/placeholder.png',
					person: 'Merritt Lawrenson',
					company: 'Treehouse',
					copy: 'This is the sample content for the testimonial.'
				},
				{
					image: '/img/placeholder.png',
					person: 'David Wheeler',
					company: 'First Baptist Church of Portland',
					copy: 'This is the sample content for the testimonial.'
				},
				{
					image: '/img/placeholder.png',
					person: 'Dahlia Turnbull',
					company: 'Lyft',
					copy: 'This is the sample content for the testimonial.'
				}
			]
		});
	}
}());
