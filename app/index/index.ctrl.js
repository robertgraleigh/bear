(function () {
  /* GET INDEX page. */
  module.exports.index = function(req, res) {
    res.render('index', {
      title: 'Bear - This is an app about the future',
      header: {
        mainHeader: 'Bear',
        subHeader: 'This is the subtitle for the home page.'
    	},
      sections: [
        {
          mainHeader: 'Section title',
          subHeader: 'This is the subsection subheader.'
        },
        {
          mainHeader: 'Section title',
          subHeader: 'This is the section subheader'
        },
        {
          mainHeader: 'Section title',
          subHeader: 'This is the section subheader'
        }
      ]
    });
  };
}());
