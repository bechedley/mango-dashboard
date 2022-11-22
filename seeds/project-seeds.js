const { Project } = require('../models');

const projectData = [
  {
    project_name: "Website Design",
    project_budget: 1400.00,
    project_due: '2022-12-30',
    project_summary: "Website design for retail brand",
    project_description: "This is a detailed project summary explaining the user story and acceptance criteria of the project, along with any other pertinent information. This can be many lines of text and can be added to or edited once the project has been created.",
    project_status: "active",
    user_id: 1,
  },
  {
    project_name: "eCommerce Website",
    project_budget: 20000.00,
    project_due: '2023-07-03',
    project_summary: "eCommerce store for clothing brand",
    project_description: "This project includes detailed information and filtering with animated content and a responsive eCommerce mobile application.",
    project_status: "upcoming",
    user_id: 5,
  },
  {
    project_name: "Blog Redesign",
    project_budget: 500.00,
    project_due: '2023-02-10',
    project_summary: "Redesign of online blog",
    project_description: "Simple front end updates and refactoring to improve mobile responsiveness and accessibility. Project is pending client design approval.",
    project_status: "pending",
    user_id: 4,
  },
  {
    project_name: "API Connection",
    project_budget: 8000.00,
    project_due: '2023-01-15',
    project_summary: "Create an API database connection",
    project_description: "Create an API connection between a website and SQL database. Project has been cancelled but may be restarted early next year.",
    project_status: "cancelled",
    user_id: 3,
  },
  {
    project_name: "Mobile App",
    project_budget: 3000.00,
    project_due: '2022-11-30',
    project_summary: "Mobile app for sport brand",
    project_description: "A mobile app to announce upcoming games, training information and supporter updates for a sporting team.",
    project_status: "finished",
    user_id: 2,
  },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
