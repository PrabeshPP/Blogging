    const {Sequelize}=require('sequelize')
    const databaseName=process.env.PGDATABASE
    const databaseUserName=process.env.PGUSER
    const databasePassword=process.env.PGPASSWORD
    const databaseHost=process.env.PGHOST
    const sequelize=new Sequelize(databaseName,databaseUserName,databasePassword,{
        host:databaseHost,
        dialect:"postgres"
    })

    module.exports=sequelize