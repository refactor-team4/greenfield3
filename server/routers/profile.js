const express =require("express")
const router = express.Router()
const profileController= require("../controllers/users")

router.route("/profile")
  .get(ProfileController.find_All)
  
router.route("/profile/:userId")
  .get(profileController.find_One) 
  .put(profileController.update_One) 
  .delete(profileController.remove_One)

module.exports = router;
