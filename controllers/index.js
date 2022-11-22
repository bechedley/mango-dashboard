const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./dashboardRoutes");

router.use("/", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
