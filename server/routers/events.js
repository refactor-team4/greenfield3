const express =require("express")
const router = express.Router()
const eventsController= require("../controllers/events")

router.route("/add")
.post(eventsController.PostOne);


router.route("/fetch")
.get(eventsController.GetAll);

router.route("/delete/:name")
.delete(eventsController.delete);




















module.exports = router