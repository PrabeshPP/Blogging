const sequelize=require("../util/db")
const Sequelize=require("sequelize")

const User=sequelize.define("user",{
    id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey:true,
        allowNull:false
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=User