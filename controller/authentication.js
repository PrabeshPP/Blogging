const User=require("../model/user")
const bcrypt=require("bcrypt")
const { where } = require("sequelize")

const getLoginForm=(req,res)=>{
    res.status(200).render("login")
}

const getSignUpForm=(req,res)=>{
    res.status(200).render("signup")
}

const createUser=async(req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email
    const password=req.body.password
    try{
        const hashedPassword=await bcrypt.hash(password,12)

        const user=new User({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:hashedPassword
        })
    
        const result=await user.save()
        res.redirect("/")
    }catch (err){
        console.log(err)
    }
  
}

const authenticateLogin=async(req,res)=>{
    const userEmail=req.body.email
    const userPassword=req.body.password

    

    try{
        const user=await User.findOne({
            where:{
                email:userEmail
            }
        })
        if(user){
            const encryptedPassword=user.password
            const isAuthenticated=await bcrypt.compare(userPassword,encryptedPassword)
            if(isAuthenticated){
                req.session.isAuthenticated=true
                req.session.user=user
                res.redirect("/")
            }else{
                res.render('login',{"error":"Email or Password did not match"})
            }
        }else{
            res.render("login",{"error":"There is no Account Associated with the entered Email"})
        }
    }catch(err){
        console.log(err)
    }

}


const postLogoutUser=(req,res)=>{
    req.session.destroy(err=>{
        console.log(err)
        res.redirect('/')
    })
}

module.exports={getSignUpForm,createUser,getLoginForm,authenticateLogin,postLogoutUser}