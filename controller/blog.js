const Blog=require("../model/blog")

const getBlogs=async(req,res,next)=>{
    const blogs=await Blog.findAll()
    res.status(200).render('blog',{'blogs':blogs})
}

const getBlogForm=async(req,res,next)=>{
    res.status(200).render('add-blog')
}

const postBlogs=async(req,res,next)=>{
    const title=req.body.title;
    const description=req.body.description;

    const blog=new Blog({
        title:title,
        description:description
    })

    const result=await blog.save()
    res.redirect('/')
}

module.exports={getBlogForm,getBlogs,postBlogs}