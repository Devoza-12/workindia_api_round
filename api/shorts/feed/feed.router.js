const router = require("express").Router();
const { getShorts } = require("./feed.controller");

router.get("/", getShorts); // Assign getShorts as the callback function

module.exports = router;
