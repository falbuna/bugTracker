const router = require("express").Router();
const ticketsContoller = require("../../controllers/ticketsController");

router.route("/")
    .post(ticketsContoller.create);

module.exports = router;