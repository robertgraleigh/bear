// resources.ctrl.js
(function () {
  /* GET RESOURCES view. */
  module.exports.resources = function(req, res) {
    res.render('resources', {
      pageHeader: {
        title: 'Resources',
        subTitle: 'This is the subtitle for the resources page.'
    	}
    });
  }
}());