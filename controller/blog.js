const Blog=require("../model/blog")

const getBlogs=async(req,res,next)=>{
    const blogs=await Blog.findAll()
    res.status(200).render('blog',{'blogs':blogs})
}

const getDetailBlog=async(req,res,next)=>{
    const blogId=req.params.id
    const result=await Blog.findOne({where:{
        id:blogId
    }})
    res.status(200).render('blog-detail',{'blog':result})
}

//delete the Blog
const deleteBlog=async(req,res,next)=>{
    const blogId=req.params.id
    const result=await Blog.destroy({where:{
        id:blogId
    }})
    res.redirect("/")
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

module.exports={getBlogForm,getBlogs,postBlogs,getDetailBlog,deleteBlog }