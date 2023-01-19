const User=require("../model/user")
const bcrypt=require("bcrypt")


const getSignUpForm=(req,res)=>{
    res.status(200).render("signup")
}

const createUser=async(req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email
    const password=req.body.password
    const hashedPassword=await bcrypt.hash(password,12)
    const user=new User({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:hashedPassword
    })

    const result=await user.save()
    res.redirect("/login")
}

module.exports={getSignUpForm,createUser}