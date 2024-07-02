const router = require("express").Router();
const { createShorts } = require("./create.controller");

router.post("/", createShorts);

module.exports = router; // Export the router object
