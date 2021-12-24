const express =require("express")
const router = express.Router()
const UsersController= require("../controllers/users")



router.route("/Singup")
.post(UsersController.Signup);
router.route("/Login")
.post(UsersController.Login)












module.exports = router