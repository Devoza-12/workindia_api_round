const router = require("express").Router();
const { getUsers } = require("./feed.controller");

router.get("/", getUsers);

module.exports = router;
