const router = require("express").Router();
const { Project, Collab, ProjectCollab } = require("../../models");
const withAuth = require("../../utils/auth");

// Route that updates the budget of the specified project
router.put("/:id/budget", withAuth, async (req, res) => {
  try {
    const projectData = await Project.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!projectData[0]) {
      res.status(404).json({ message: "Error when trying to update the budget!" });
      return;
    }

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


router.delete("/:pid/collab/:cid", withAuth, async (req, res) => {
  try {
    const collabData = await Collab.destroy({
      where: {
        id: req.params.cid,
      },
    });
    console.log(collabData);

    if (!collabData) {
      res.status(404).json({ message: "No collaborator found with this id!" });
      return;
    }

    res.status(200).json(collabData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;