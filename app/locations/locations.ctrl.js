// app -> locations -> locations.ctrl.js
(function () {

  /* GET LOCATIONS view */
  module.exports.locations = function(req, res) {
    res.render('index', { title: 'Locations' });
  };

  /* GET LOCATIONS LIST view */
  module.exports.locationsList = function(req, res) {
    res.render('index', { title: 'Locations List' });
  };

  /* GET 'LOCATION INFO' page */
  module.exports.locationInfo = function(req, res) {
    res.render('index', { title: 'Location Info'});
  };

  /* GET 'ADD REVIEW' page */
  module.exports.addReview = function(req, res) {
    res.render('index', { title: 'Add review'});
  };

}());
