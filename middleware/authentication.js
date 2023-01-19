const isAuthenticatedMiddleware=(req,res,next)=>{
    if(!req.session.isAuthenticated){
        res.redirect("/authentication/login")
    }
    next()
}

module.exports={isAuthenticatedMiddleware}