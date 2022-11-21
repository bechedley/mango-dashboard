const { Link } = require('../models');

const linkData = [
  {
    link_url: 'https://www.brandwebsite.com.au',
  },
  {
    link_url: 'www.inspowebsite.com.au',
  },
  {
    link_url: 'www.instagram.com',
  },
  {
    link_url: 'https://www.clientwebsite.com.au',
  },
  {
    link_url: 'https://www.github.com',
  },
];

const seedLinks = () => Link.bulkCreate(linkData);

module.exports = seedLinks;