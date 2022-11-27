const { Tag } = require('../models');

const tagData = [
  {
    tag_name: "javascript",
    user_id: 3,
  },
  {
    tag_name: "javascript",
    user_id: 4,
  },
  {
    tag_name: "api connection",
    user_id: 3,
  },
  {
    tag_name: "front-end",
    user_id: 2,
  },
  {
    tag_name: "front-end",
    user_id: 4,
  },
  {
    tag_name: "client1",
    user_id: 4,
  },
  {
    tag_name: "backend development",
    user_id: 4,
  },
  {
    tag_name: "urgent",
    user_id: 1,
  },
  {
    tag_name: "urgent",
    user_id: 5,
  },
  {
    tag_name: "bootstrap",
    user_id: 1,
  },
  {
    tag_name: "node.js",
    user_id: 1,
  },
  {
    tag_name: "node.js",
    user_id: 3,
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;