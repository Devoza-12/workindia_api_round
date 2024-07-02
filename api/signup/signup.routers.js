const router = require("express").Router();
const { createUser } = require("./signup.controller");

router.post("/", createUser);

module.exports = router; // Export the router object
