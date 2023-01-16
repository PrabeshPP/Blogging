const express=require("express");

const app=express();
const path=require("path")


const dotenv=require('dotenv')
dotenv.config()


const sequelize=require("./util/db")
const blogRouter=require("./routes/blog")
const PORT=process.env.PORT
app.set('view engine','ejs')
app.set('views','views')


app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))
app.use(blogRouter)

app.use((req,res,next)=>{
    res.render("404",{pageTitle:"404 Not Found"})
})

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