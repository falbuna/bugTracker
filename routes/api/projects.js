const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

router.route("/")
    .get(projectsController.findAll)
    .post(projectsController.create);

router
    .route("/:id")
    .get(projectsController.findById)
    .put(projectsController.update)

module.exports = router;