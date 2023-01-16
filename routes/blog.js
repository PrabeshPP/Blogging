const express=require("express")
const router=express.Router()

const {getBlogForm,postBlogs,getBlogs}=require("../controller/blog")

router.route("/").get(getBlogs)

router.route("/add-blog").get(getBlogForm)

router.route("/add-blog").post(postBlogs)

module.exports=router