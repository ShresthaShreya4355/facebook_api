const express = require("express")
const auth = require('../middleware/auth');
const router = express.Router()
const upload = require('../controller/uploadfile_controller');
const post_controller = require("../controller/post_controller")
router.post("/createpost",[upload,auth],post_controller.addpost)
router.get("/findpost",auth,post_controller.findpost)
router.get("/findpostById/:_id",post_controller.findpostById)

module.exports = router