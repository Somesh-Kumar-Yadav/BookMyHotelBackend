const express = require("express");
const userController = require("./controller/user.controller");

const router = express.Router();

router.use("/app", userController);

module.exports = router;
