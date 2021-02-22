const router = require("express").Router();
const projectRoutes = require("./projects");
const ticketRoutes = require("./tickets");
const userRoutes = require("./users");

router.use("/projects", projectRoutes);
router.use("/tickets", ticketRoutes);
router.use("/users", userRoutes);

module.exports = router;