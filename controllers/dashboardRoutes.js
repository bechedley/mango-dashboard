const router = require("express").Router();
const {
  Project,
  Tag,
  Collab,
  Link,
  ProjectLink,
  ProjectTag,
  ProjectCollab,
} = require("../models");
const withAuth = require("../utils/auth");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.redirect("/login");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    let search = req.query.q ? req.query.q : null;
    let searchTags = req.query.tags ? req.query.tags : null;
    let searchSort = req.query.sort ? req.query.sort : null;
    let whereOptions = { user_id: req.session.user_id };
    if (search) {
      whereOptions = {
        ...whereOptions,
        project_name: { [Op.substring]: search },
      };
    }

    const projectData = await Project.findAll({
      where: whereOptions,
      include: [
        { model: Tag, through: ProjectTag, as: "related_tags" },
        { model: Collab, through: ProjectCollab, as: "project_contributors" },
        { model: Link, through: ProjectLink, as: "project_urls" },
      ],
      order: [["project_due", "ASC"]],
    });

    let projects = projectData.map((project) => project.get({ plain: true }));

    if (searchTags) {
      tempProjects = [];
      let tagArray = searchTags.split(",");
      tagArray.forEach((element) => {
        projects.forEach((project) => {
          project.related_tags.forEach((tag) => {
            if (tag.tag_name == element) {
              tempProjects.push(project);
            }
          });
        });
      });
      projects = tempProjects;
      projects = projects.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.id === value.id)
      );
    }
    if (searchSort) {
      switch (searchSort) {
        case "sort-project-name":
          projects = projects.sort(function (a, b) {
            return a.project_name > b.project_name
              ? 1
              : b.project_name > a.project_name
              ? -1
              : 0;
          });
          break;
        case "sort-project-due":
          projects = projects.sort((a, b) => a.project_due - b.project_due);
          break;
        case "sort-project-status":
          projects = projects.sort(function (a, b) {
            return a.project_status > b.project_status
              ? 1
              : b.project_status > a.project_status
              ? -1
              : 0;
          });
          break;
      }
    }

    const tagData = await Tag.findAll({
      where: {user_id: req.session.user_id},
      order: [["tag_name", "ASC"]],
    });

    const tags = tagData.map((tag) => tag.get({ plain: true }));

    res.render("dashboard", {
      projects,
      tags,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/project/:id", withAuth, async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        { model: Tag, through: ProjectTag, as: "related_tags" },
        { model: Collab, through: ProjectCollab, as: "project_contributors" },
        { model: Link, through: ProjectLink, as: "project_urls" },
      ],
    });

    const project = projectData.get({ plain: true });
    res.render("project", { project, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("auth", { login: true });
});

module.exports = router;
