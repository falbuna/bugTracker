const router = require("express").Router();
const ticketsController = require("../../controllers/ticketsController");

router.route("/")
    .get(ticketsController.findAll)
    .put(ticketsController.findOpen)
    .post(ticketsController.findStatus)

router
    .route("/:id")
    .get(ticketsController.findById)
    .post(ticketsController.create)
    .put(ticketsController.update)

module.exports = router;