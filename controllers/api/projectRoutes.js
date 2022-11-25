const router = require("express").Router();
const { Project } = require("../../models");

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

module.exports = router;