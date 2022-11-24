const seedCollabs = require('./collab-seeds');
const seedLinks = require('./link-seeds');
const seedProjects = require('./project-seeds');
const seedTags = require('./tag-seeds');
const seedUsers = require('./user-seeds');
const seedProjectTags = require('./projecttag-seeds');
const seedProjectCollabs = require('./projectcollab-seeds');
const seedProjectLinks = require('./projectlink-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedProjects();
  console.log('\n----- PROJECTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedCollabs();
  console.log('\n----- COLLABS SEEDED -----\n');

  await seedLinks();
  console.log('\n----- LINKS SEEDED -----\n');

  await seedProjectTags();
  console.log('\n----- PROJECT TAGS SEEDED -----\n');

  await seedProjectCollabs();
  console.log('\n----- PROJECT COLLABS SEEDED -----\n');

  await seedProjectLinks();
  console.log('\n----- PROJECT LINKS SEEDED -----\n');

  process.exit(0);
};

seedAll();
