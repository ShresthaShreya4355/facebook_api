const express = require("express");
const router = express.Router();
const Users = require('../model/user_model')
const auth = require('../middleware/auth');
const UserController = require('../controller/user_)controller')


router.post("/register",UserController.adduser)

router.post("/login", UserController.login)

module.exports = router