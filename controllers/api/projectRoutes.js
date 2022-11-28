const router = require("express").Router();
const {
  Project,
  Collab,
  ProjectCollab,
  Link,
  ProjectLink,
  Tag,
  ProjectTag,
} = require("../../models");
const withAuth = require("../../utils/auth");

// Route that deletes a specified project
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that updates the name and due date of the specified project
router.put("/:id/name", withAuth, async (req, res) => {
  try {
    const projectData = await Project.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!projectData) {
      res.status(404).json({
        message: "Error when trying to update the name and due date!",
      });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that updates the budget of the specified project
router.put("/:id/budget", withAuth, async (req, res) => {
  try {
    const projectData = await Project.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!projectData[0]) {
      res
        .status(404)
        .json({ message: "Error when trying to update the budget!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that updates the summary of the specified project
router.put("/:id/summary", withAuth, async (req, res) => {
  try {
    const projectData = await Project.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!projectData) {
      res
        .status(404)
        .json({ message: "Error when trying to update the summary!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that updates the description of the specified project
router.put("/:id/description", withAuth, async (req, res) => {
  try {
    const projectData = await Project.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that adds a new collaborator to the specified project
router.post("/:id/collab", withAuth, async (req, res) => {
  try {
    const newCollab = await Collab.create(req.body);
    const projectCollab = await ProjectCollab.create({
      project_id: req.params.id,
      collab_id: newCollab.id,
    });

    res.status(200).json(projectCollab);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route that deletes a specified collaborator
router.delete("/:pid/collab/:cid", withAuth, async (req, res) => {
  try {
    const collabData = await Collab.destroy({
      where: {
        id: req.params.cid,
      },
    });

    if (!collabData) {
      res.status(404).json({ message: "No collaborator found with this id!" });
      return;
    }

    res.status(200).json(collabData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that adds a new link to the specified project
router.post("/:id/link", withAuth, async (req, res) => {
  try {
    const newLink = await Link.create(req.body);
    const projectLink = await ProjectLink.create({
      project_id: req.params.id,
      link_id: newLink.id,
    });

    res.status(200).json(projectLink);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route that deletes a specified link
router.delete("/:pid/link/:lid", withAuth, async (req, res) => {
  try {
    const linkData = await Link.destroy({
      where: {
        id: req.params.lid,
      },
    });

    if (!linkData) {
      res.status(404).json({ message: "No link found with this id!" });
      return;
    }

    res.status(200).json(linkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that adds a new tag to the specified project
router.post("/:id/tag", withAuth, async (req, res) => {
  try {
    const newTag = await Tag.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    const projectTag = await ProjectTag.create({
      project_id: req.params.id,
      tag_id: newTag.id,
    });

    res.status(200).json(projectTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route that deletes a specified tag
router.delete("/:pid/tag/:tid", withAuth, async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.tid,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that updates the status of a project
router.put("/:id/status", withAuth, async (req, res) => {
  try {
    const projectData = await Project.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!projectData[0]) {
      res
        .status(404)
        .json({ message: "Error when trying to update the status!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route that adds a new project
router.post("/", withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
