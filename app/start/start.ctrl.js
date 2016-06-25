(function () {
  /* GET START view. */
  module.exports.start = function(req, res) {
    res.render('start', {
      pageHeader: {
        title: 'Start',
        subTitle: 'This is the subtitle for the start page.'
    	}
    });
  }
}());
