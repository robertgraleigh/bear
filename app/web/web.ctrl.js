// app -> web.ctrl.js
(function () {
  /* GET WEB view. */
  module.exports.web = function(req, res) {
    res.render('web', {
      pageHeader: {
        title: 'Web Services',
        subTitle: 'This is the subtitle for the web services page.'
    	}
    });
  }
}());