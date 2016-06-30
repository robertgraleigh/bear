(function () {
  /* GET INDEX view. */
  module.exports.index = function(req, res) {
    res.render('index', {
      title: 'Bear - This is an app about the future',
      header: {
        mainHeader: 'Robert G. Raleigh',
        subHeader: 'Full-stack MEAN Web Developer'
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
					image: '/img/placeholder.png',
					button: 'Benefit one'
        },
        {
          header: 'Benefit two',
          description: 'This is th benefit section of thw page.',
					image: '/img/placeholder.png',
					button: 'Benefit two'
        },
        {
          header: 'Benefit three',
          description: 'This is th benefit section of thw page.',
					image: '/img/placeholder.png',
					button: 'Benefit three'
        }
      ],
      products: [
        {
          header: 'Websites',
          description: 'This is the first product of the home page.',
					image: '/img/placeholder.png',
					href: '/product-one',
					button: 'Product One'
        },
        {
          header: 'Online Stores',
          description: 'This is the second product of the home page.',
					image: '/img/placeholder.png',
					href: '/product-two',
					button: 'Product Two'
        },
        {
          header: 'Platforms',
          description: 'Platforms are ',
					image: '/img/placeholder.png',
					href: '/product-three',
					button: 'Product Three'
        }
      ],
      services: [
        {
          header: 'Services one',
          description: 'This is the first product of the home page.',
					image: '/img/placeholder.png',
					href: '/services-one',
					button: 'Services One'
        },
        {
          header: 'Services two',
          description: 'This is the second product of the home page.',
					image: '/img/placeholder.png',
					href: '/services-two',
					button: 'Services Two'
        },
        {
          header: 'Services three',
          description: 'This is the third product of the home page.',
					image: '/img/placeholder.png',
					href: '/services-three',
					button: 'Services Three'
        }
      ]
    });
  };
}());
