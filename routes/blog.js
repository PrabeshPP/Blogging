const express=require("express")
const router=express.Router()

router.route("/").get((req,res)=>{
    res.status(200).render('blog',{pageTitle:"Home"})
})

router.route("/add-blog").get((req,res)=>{
    res.status(200).render('add-blog',{pageTitle:"Blog"})
})

router.route("/add-product").post((req,res)=>{
    console.log(req.body)
})

module.exports=router