const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
    .get(usersController.findAll)

router
    .route("/:id")
    .get(usersController.findById)
    .put(usersController.update)

module.exports = router;