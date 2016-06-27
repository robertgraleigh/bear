(function () {
  /* GET INDEX view. */
  module.exports.index = function(req, res) {
    res.render('index', {
      title: 'Bear - This is an app about the future',
      header: {
        mainHeader: 'Robert G. Raleigh',
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
      ],
      benefits: [
        {
          header: 'Benefit one',
          description: 'This is th benefit section of thw page.',
					image: '/img/placeholder.png'
        },
        {
          header: 'Benefit two',
          description: 'This is th benefit section of thw page.',
					image: '/img/placeholder.png'
        },
        {
          header: 'Benefit three',
          description: 'This is th benefit section of thw page.',
					image: '/img/placeholder.png'
        }
      ],
      products: [
        {
          header: 'Product one',
          description: 'This is the first product of the home page.',
					image: '/img/placeholder.png'
        },
        {
          header: 'Product two',
          description: 'This is the second product of the home page.',
					image: '/img/placeholder.png'
        },
        {
          header: 'Product three',
          description: 'This is the third product of the home page.',
					image: '/img/placeholder.png'
        }
      ],
      services: [
        {
          header: 'Services one',
          description: 'This is the first product of the home page.',
					image: '/img/placeholder.png'
        },
        {
          header: 'Services two',
          description: 'This is the second product of the home page.',
					image: '/img/placeholder.png'
        },
        {
          header: 'Services three',
          description: 'This is the third product of the home page.',
					image: '/img/placeholder.png'
        }
      ]
    });
  };
}());
