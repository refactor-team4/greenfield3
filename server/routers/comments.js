const express =require("express")
const router = express.Router()
const CommentsController= require("../controllers/comments")

router.route('/postComment').post(CommentsController.AddComment)
router.route('/getComments').post(CommentsController.GetAllComments)

















module.exports = router