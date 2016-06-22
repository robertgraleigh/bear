(function () {
  /* GET INDEX page. */
  module.exports.blog = function(req, res) {
    res.render('blog', {
      pageHeader: {
				title: 'Blog',
				subTitle: 'This is the subtitle for the about page.',
        buttons: [
          {
            text: 'Button One',
            link: '/button'
          },
          {
            text: 'Button Two',
            link: '/button'
          }
        ]
			},
      pageSection: {
        heading: ''
      },
      authors: [
        {
          id: 'robertRaleigh',
          firstName: 'Robert',
          lastName: 'Raleigh',
          twitter: '@RobertGRaleigh',
          city: 'Portland',
          state: 'OR',
        }
      ],
      recent: [
        {
					id: 'Post One',
					name: 'Tutorials',
					desc: 'Learn JavaScript using these tutorials',
					link: 'View tutorials'
				},
        {
					id: 'Post Two',
					name: 'Tutorials',
					desc: 'Learn JavaScript using these tutorials',
					link: 'View tutorials'
				},
        {
					id: 'Post Three',
					name: 'Tutorials',
					desc: 'Learn JavaScript using these tutorials',
					link: 'View tutorials'
				}
      ],
			categories: [
				{
					id: 'Tuts',
					name: 'Tutorials',
					desc: 'Learn JavaScript using these tutorials',
					link: 'View tutorials'
				},
				{
					id: 'Art',
					name: 'Articles',
					desc: 'Articles about javascript',
					link: 'View articles'
				},
				{
					id: 'Tools',
					name: 'Tools',
					desc: 'Tools to use coding JavaScript',
					link: 'View tools'
				},
				{
					id: 'Events',
					name: 'Events',
					desc: 'Tools to use coding JavaScript',
					link: 'View tools'
				},
				{
					id: 'Books',
					name: 'Books',
					desc: 'Books to use coding JavaScript',
					link: 'View books'
				},
        {
					id: 'Resources',
					name: 'Resources',
					desc: 'Tools to use coding JavaScript',
					link: 'View tools'
				}
			],
      posts: [
        {
          id: 'samplePostOne',
          title: 'Sample Post One',
          desc: 'Learn JavaScript using these tutorials',
          link: 'View tutorials'
        },
        {
          id: 'samplePostTwo',
          name: 'Sample Post Two',
          desc: 'Articles about javascript',
          link: 'View articles'
        },
        {
          id: 'samplePostThree',
          name: 'Sample Post Two',
          desc: 'Articles about javascript',
          link: 'View articles'
        },
        {
          id: 'samplePostFour',
          name: 'Sample Post Two',
          desc: 'Articles about javascript',
          link: 'View articles'
        },
        {
          id: 'samplePostFive',
          name: 'Sample Post Two',
          desc: 'Articles about javascript',
          link: 'View articles'
        }
      ]
  });
};
}());
