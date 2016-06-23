(function () {
  /* GET CONTACT view */
  module.exports.contact = function(req, res) {
    res.render('contact', {
      headerSection: {
        title: 'Contact Us',
        subTitle: 'This is the subtitle for the contact page.',
        subCopy: 'This is the supporting copy for the contact page.'
    	},
      contactForm: {
        title: 'Contact Info',
        subTitle: 'This is the '
      },
      contactSection: {
        title: 'Contact Info',
        subTitle: 'This is the subtitle for the contact info.'
      }
    });
  }
}());
