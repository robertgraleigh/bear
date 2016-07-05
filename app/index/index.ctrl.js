// app -> index -> index.ctrl.js
(function () {
  /* GET INDEX view. */
  module.exports.index = function(req, res) {
    res.render('index', {
      title: 'Robert G. Raleigh - Multi-faceted web developer',
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
			benefit: {
				header: 'Benefits',
				subheader: 'Why you should work with Robert Raleigh'
			},
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
          header: 'Website Services',
          description: 'Drupal, Wordpress, Squarespace, Static, Dynamic',
					details: 'Launch or update a website on your preferred platform or host.',
					image: '/img/placeholder.png',
					href: '/web-services',
					button: 'Explore Web Services'
        },
        {
          header: 'E-Commerce Services',
          description: 'Magento Shopify, Stripe, Square',
					details: 'Launch an online store, sell products, or accept payments.',
					image: '/img/placeholder.png',
					href: '/e-commerce-services',
					button: 'Explore E-Commerce Services'
        },
        {
          header: 'Copywriting Services',
          description: 'Comprehensive copywriting for newsletters',
					details: 'Provide copy and content for websites, newsletters, and social media outlets.',
					image: '/img/placeholder.png',
					href: '/copywriting-services',
					button: 'Explore Copywriting Services'
        },
				{
					header: 'Development Services',
					description: '',
					details: 'Experience setting up online fundraising platforms, grantwriting.',
					image: '/img/placeholder.png',
					href: '/development-services',
					button: 'Explore Development Services'
				},
				{
					header: 'Consulting Services',
					description: 'General business consulting services',
					details: 'I can help with business model, product market fit.',
					image: '/img/placeholder.png',
					href: '/consulting-services',
					button: 'Explore Consulting Services'
				}
      ]
    });
  };
}());
