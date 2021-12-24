const express =require("express")
const router = express.Router()
const AdminController= require("../controllers/admin")


router.route("/login")
.post(AdminController.login_an_admin);

router.route("/add")
.post(AdminController.PostOne);


router.route("/fetch")
.get(AdminController.GetAll);

router.route("/delete/:name")
.delete(AdminController.delete);











module.exports = router