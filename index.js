const express=require("express");

const app=express();
const path=require("path")
const session=require("express-session")
const SequelizeStore=require("connect-session-sequelize")(session.Store)
const Blog=require("./model/blog")
const User=require("./model/user")




const dotenv=require('dotenv')
dotenv.config()


const sequelize=require("./util/db")
const blogRouter=require("./routes/blog")
const authenticationRouter=require("./routes/authentication")

const maxAge=1000*60*60*24*7

const sequelizeStore=new SequelizeStore({
    db:sequelize,
    checkExpirationInterval:15*60*1000,
    expiration:maxAge
})

const PORT=process.env.PORT
app.set('view engine','ejs')
app.set('views','views')


app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

app.use(session({
    name:'userx',
    store:sequelizeStore,
    secret:process.env.SECRET,
    saveUninitialized:false,
    resave:false,
    cookie:{secure:false}
}))

app.use(blogRouter)
app.use("/authentication",authenticationRouter)
app.use((req,res,next)=>{
    res.render("404",{pageTitle:"404 Not Found"})
})

User.hasMany(Blog)
Blog.belongsTo(User,{constraints:true,onDelete:"CASCADE"})



async function main(){
    try{
        await sequelize.authenticate();
        const result=await sequelize.sync()
        console.log("connections established successfully!")
    }catch (err){
        console.log("Unable to connect to the Database:"+err)
    }
    app.listen(PORT,()=>{
        console.log(`Server running at PORT:${PORT}`)
    })
}

main()