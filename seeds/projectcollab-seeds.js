const { ProjectCollab } = require('../models');

const projectCollabData = [
  {
    project_id: 1,
    collab_id: 3,
  },
  {
    project_id: 1,
    collab_id: 2,
  },
  {
    project_id: 1,
    collab_id: 4,
  },
  {
    project_id: 2,
    collab_id: 1,
  },
  {
    project_id: 3,
    collab_id: 1,
  },
  {
    project_id: 3,
    collab_id: 3,
  },
  {
    project_id: 3,
    collab_id: 4,
  },
  {
    project_id: 3,
    collab_id: 5,
  },
  {
    project_id: 4,
    collab_id: 1,
  },
  {
    project_id: 4,
    collab_id: 2,
  },
  {
    project_id: 4,
    collab_id: 5,
  },
  {
    project_id: 5,
    collab_id: 3,
  },
];

const seedProjectCollabs = () => ProjectCollab.bulkCreate(projectCollabData);

module.exports = seedProjectCollabs;
