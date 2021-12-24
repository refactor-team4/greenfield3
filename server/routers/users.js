const express =require("express")
const router = express.Router()
const UsersController= require("../controllers/users")
router.route('/details/:userId').get(UsersController.GetUserDetails)

















module.exports = router