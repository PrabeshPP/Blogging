const express=require("express");

const app=express();
const path=require("path")

app.set('view engine','ejs')
app.set('views','views')


app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/",(req,res)=>{
    res.status(200).render('blog',{pageTitle:"Prabesh's Blog"})
})

app.listen(3000)