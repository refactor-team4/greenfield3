const express =require("express")
const router = express.Router()
const BlogsController= require("../controllers/blogs")

router.route('/postBlog').post(BlogsController.PostOne)
router.route('/getAll').get(BlogsController.GetAll)
router.route('/searchBlogs/:searchedPlace').get(BlogsController.GetSome)
router.route('/details/:id').get(BlogsController.GetDetails)



















module.exports = router