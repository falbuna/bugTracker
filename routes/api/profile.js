const router = require("express").Router();
const profileController = require("../../controllers/profileController");

router.route("/")
    .get(profileController.findAll)

router
    .route("/:id")
    .get(profileController.findById)

module.exports = router;