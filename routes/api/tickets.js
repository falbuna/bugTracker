const router = require("express").Router();
const ticketsController = require("../../controllers/ticketsController");

router.route("/")
    .get(ticketsController.findAll);

router
    .route("/:id")
    .get(ticketsController.findById)

module.exports = router;