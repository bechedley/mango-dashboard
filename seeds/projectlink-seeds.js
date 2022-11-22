const { ProjectLink } = require('../models');

const projectLinkData = [
  {
    project_id: 1,
    link_id: 3,
  },
  {
    project_id: 1,
    link_id: 2,
  },
  {
    project_id: 1,
    link_id: 4,
  },
  {
    project_id: 2,
    link_id: 2,
  },
  {
    project_id: 3,
    link_id: 1,
  },
  {
    project_id: 3,
    link_id: 3,
  },
  {
    project_id: 3,
    link_id: 4,
  },
  {
    project_id: 3,
    link_id: 2,
  },
  {
    project_id: 4,
    link_id: 1,
  },
  {
    project_id: 4,
    link_id: 5,
  },
  {
    project_id: 4,
    link_id: 1,
  },
  {
    project_id: 5,
    link_id: 2,
  },
];

const seedProjectLinks = () => ProjectLink.bulkCreate(projectLinkData);

module.exports = seedProjectLinks;
