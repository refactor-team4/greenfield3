const express =require("express")
const router = express.Router()
const editpasswordController= require("../controllers/users")

router
.route("/:userId")
  .put(editpasswordController.update_One) 

module.exports = router;