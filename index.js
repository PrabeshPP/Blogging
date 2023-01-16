const express=require("express");

const app=express();
const path=require("path")

const blogRouter=require("./routes/blog")

app.set('view engine','ejs')
app.set('views','views')


app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))
app.use(blogRouter)

app.use((req,res,next)=>{
    res.render("404",{pageTitle:"404 Not Found"})
})

app.listen(3000)