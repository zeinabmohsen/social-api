const express = require('express');
const router = express.Router();
const registerController = require("../controllers/userControllers");

router.post("/register",registerController.registerUsers);

module.exports = router ;
