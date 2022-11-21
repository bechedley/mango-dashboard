const { Collab } = require('../models');

const collabData = [
  {
    collab_email: 'contributor@email.com',
  },
  {
    collab_email: 'designer@email.com',
  },
  {
    collab_email: 'developer@email.com',
  },
  {
    collab_email: 'engineer@email.com',
  },
  {
    collab_email: 'manager@email.com',
  },
];

const seedCollabs = () => Collab.bulkCreate(collabData);

module.exports = seedCollabs;