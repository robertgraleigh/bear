(function () {
  /* GET INDEX page. */
  module.exports.company = function(req, res) {
    res.render('company', {
      pageHeader: {
        title: 'Company',
        subTitle: 'This is the subtitle for the about page.'
    	}
      /* ,
      ourStory: {
        title: 'Our Story',
        subTitle: ''
      },
      idealClients: {
        title: '',
        subTitle: ''
      },
      ourValues: {
        title: '',
        subTitle: ''
      }
      */
    });
  }
}());
