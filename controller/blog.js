const Blog=require("../model/blog")


const getBlogs=async(req,res,next)=>{
    const isAuthenticated=req.session.isAuthenticated;
    const blogs=await Blog.findAll()
    res.status(200).render('blog',{'blogs':blogs,'isAuthenticated':isAuthenticated})
}

const getDetailBlog=async(req,res,next)=>{
    const isAuthenticated=req.session.isAuthenticated;
    const edit=req.query.edit
    const blogId=req.params.id
    const result=await Blog.findOne({where:{
        id:blogId
    }})

    if (edit){
        res.status(200).render('update.ejs',{'blog':result,'isAuthenticated':isAuthenticated})
    }else{
        res.status(200).render('blog-detail',{'blog':result,'isAuthenticated':isAuthenticated,"userId":req.session.user.id})
    }
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
    const isAuthenticated=req.session.isAuthenticated;
    res.status(200).render('add-blog',{'isAuthenticated':isAuthenticated})
}

const postBlogs=async(req,res,next)=>{
    const title=req.body.title;
    const description=req.body.description;

    const blog=new Blog({
        title:title,
        description:description
    })

    blog.userId=req.session.user.id
    const result=await blog.save()
    res.redirect('/')
}

const updateBlogs=async(req,res,next)=>{
    const blogId=req.params.id
    const updatedTitle=req.body.title
    const updatedDescription=req.body.description

    const blog=await Blog.findOne({where:{
        id:blogId
    }})
    blog.title=updatedTitle
    blog.description=updatedDescription
    const result=await blog.save()
    res.redirect(`/blogs/${blogId}`)
    
}

module.exports={getBlogForm,getBlogs,postBlogs,getDetailBlog,deleteBlog,updateBlogs }