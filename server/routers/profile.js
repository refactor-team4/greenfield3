const express =require("express")
const router = express.Router()
const myprofileController= require("../controllers/users")

router.route("/myprofile")
  .get(myprofileController.find_All)
  
router.route("/myprofile/:userId")
  .get(myprofileController.find_One) 
  .put(myprofileController.update_One) 
  .delete(myprofileController.remove_One)

module.exports = router;
