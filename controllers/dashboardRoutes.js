const router = require("express").Router();
const { Project, Tag, Collab, Link, ProjectLink, ProjectTag, ProjectCollab } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.redirect("/login");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const projectData = await Project.findAll({
      include: [{ model: Tag, through: ProjectTag, as: "related_tags" }, { model: Collab, through: ProjectCollab, as: "project_contributors" }, { model: Link, through: ProjectLink, as: "project_urls" }],
      order: [["project_due", "ASC"]],
    });

    const projects = projectData.map((project) => project.get({ plain: true }));

    const tagData = await Tag.findAll({
      order: [["tag_name", "ASC"]],
    });

    const tags = tagData.map((tag) => tag.get({ plain: true }));

    res.render("dashboard", {
      projects,
      tags,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/project/:id", withAuth, async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [{ model: Tag, through: ProjectTag, as: "related_tags" }, { model: Collab, through: ProjectCollab, as: "project_contributors" }, { model: Link, through: ProjectLink, as: "project_urls" }],
    });

    const project = projectData.get({ plain: true });
    res.render("project", { project, loggedIn: req.session.loggedIn });
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

  res.render("auth");
});

module.exports = router;
