const router = require("express").Router();
const projectRoutes = require("./projects");
const ticketRoutes = require("./tickets");

router.use("/projects", projectRoutes);
router.use("/tickets", ticketRoutes);

module.exports = router;