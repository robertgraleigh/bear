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
			}
		});
	}
}());
