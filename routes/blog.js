const express=require("express")
const router=express.Router()

const {getBlogForm,postBlogs,getBlogs,getDetailBlog,deleteBlog,updateBlogs}=require("../controller/blog")

router.route("/").get(getBlogs)

router.route("/blogs/:id").get(getDetailBlog)
router.route("/delete/:id").post(deleteBlog)
router.route("/update/:id").post(updateBlogs)
router.route("/add-blog").get(getBlogForm)

router.route("/add-blog").post(postBlogs)



module.exports=router