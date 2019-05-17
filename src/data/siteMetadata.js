const languages = require('./languages');

module.exports = {
  siteUrl: 'https://www.northBits.org',
  title: 'Vakera Andriyanov',
  description: 'Middle software engineer. React, and Node.js developer from Haifa.',
  author: {
    name: 'Vakera Andriyanov',
    bio: '',
    homeCity: 'Moscow',
    email: 'mprint85@gmail.com',
    twitter: 'fr019',
    defaultLink: 'https://github.com/fr019'
  },
  sourceCodeLink: 'https://github.com/fr019/northBits.org',
  disqusShortname: 'fr019',
  menu: [
    {label: 'home', slug: '/'},
    {label: 'projects', slug: '/projects/'},
    {label: 'about', slug: '/about/'},
    {label: 'contact', slug: '/contact/'}
  ],
  languages,
  contact: [
    {
      type: 'email',
      value: 'mprint85@gmail.com',
      link: 'mailto:mprint85@gmail.com'
    },
    {
      type: 'phone',
      value: '+972 53 9020563',
      country: 'he',
      link: 'tel:+972 53 9020563'
    }
  ]
};
