const User = require("./User");
const Project = require("./Project");
const Collab = require("./Collab");
const Link = require("./Link");
const Tag = require("./Tag");
const ProjectTag = require("./ProjectTag");
const ProjectLink = require("./ProjectLink");
const ProjectCollab = require("./ProjectCollab");

// User can owns many projects
User.hasMany(Project, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
}); 

// Project belongsTo user
Project.belongsTo(User, {
  foreignKey: "user_id",
});

// User can owns many tags
User.hasMany(Tag, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
}); 

// Tag belongsTo user
Tag.belongsTo(User, {
  foreignKey: "user_id",
});

// Projects belongsToMany Collabs
Project.belongsToMany(Collab, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProjectCollab,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "project_contributors",
});

// Collabs belongsToMany Projects
Collab.belongsToMany(Project, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProjectCollab,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "collaborative_projects",
});

// Projects belongsToMany Links
Project.belongsToMany(Link, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProjectLink,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "project_urls",
});

// Links belongsToMany Projects
Link.belongsToMany(Project, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProjectLink,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "linked_projects",
});

// Projects belongsToMany Tags
Project.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProjectTag,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "related_tags",
});

// Tags belongsToMany Projects
Tag.belongsToMany(Project, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProjectTag,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "tagged_projects",
});

module.exports = {
  Project,
  User,
  Collab,
  Link,
  Tag,
  ProjectCollab,
  ProjectLink,
  ProjectTag,
};
