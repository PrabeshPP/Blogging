const express=require("express")
const router=express.Router()

const {getSignUpForm,createUser,getLoginForm,authenticateLogin,postLogoutUser}=require("../controller/authentication")


router.route("/signup").get(getSignUpForm)
router.route("/signup").post(createUser)
router.route("/login").get(getLoginForm)
router.route("/login").post(authenticateLogin)
router.route("/logout").post(postLogoutUser)


module.exports=router