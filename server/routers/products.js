const express =require("express")
const router = express.Router()
const ProductsController= require("../controllers/products")

router.route("/add")
.post(ProductsController.PostOne);


router.route("/fetch")
.get(ProductsController.GetAll);

router.route("/delete/:name")
.delete(ProductsController.delete);




















module.exports = router