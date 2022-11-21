const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'javascript',
  },
  {
    tag_name: 'api connection',
  },
  {
    tag_name: 'front-end',
  },
  {
    tag_name: 'client1',
  },
  {
    tag_name: 'backend development',
  },
  {
    tag_name: 'urgent',
  },
  {
    tag_name: 'bootstrap',
  },
  {
    tag_name: 'node.js',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;