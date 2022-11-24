const router = require("express").Router();
const { Project, Tag, ProjectTag } = require("../models");
const withAuth = require("../utils/auth");

router.get("/project", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.redirect("/login");
});