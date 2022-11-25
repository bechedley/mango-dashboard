const router = require("express").Router();
const { Project, Collab, ProjectCollab } = require("../../models");

// Route that updates the budget of the specified project
router.put("/:id/budget", async (req, res) => {
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
router.post("/:id/collab", async (req, res) => {
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

module.exports = router;