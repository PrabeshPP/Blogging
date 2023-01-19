const express=require("express")
const router=express.Router()

const {getSignUpForm,createUser}=require("../controller/authentication")


router.route("/signup").get(getSignUpForm)
router.route("/signup").post(createUser)


module.exports=router