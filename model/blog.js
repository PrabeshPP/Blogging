const Sequelize=require('sequelize')
const sequelize=require("../util/db")

const Blog=sequelize.define('blog',{
    id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey:true,
        allowNull:false
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    }
})


module.exports=Blog