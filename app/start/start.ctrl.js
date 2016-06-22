(function () {
  /* GET START view. */
  module.exports.start= function(req, res) {
    res.render('page', {
      pageHeader: {
        title: 'Start',
        subTitle: 'This is the subtitle for the start page.'
    	}
    });
  }
}());
