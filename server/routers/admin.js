const express =require("express")
const router = express.Router()
const AdminController= require("../controllers/admin")


router.route("/login")
.post(AdminController.login_an_admin);














module.exports = router