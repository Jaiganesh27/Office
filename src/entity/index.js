var dbconfig = require('../config/dbconfig')
var {Sequelize , DataTypes}  = require('sequelize')

var sequelize = new Sequelize(
    dbconfig.DATABASE,
    dbconfig.USERNAME,
    dbconfig.PASSWORD,
    {
       host: dbconfig.HOST,
       dialect: dbconfig.DIALECT
    }   
)

sequelize.authenticate()
.then(()=> console.log("DB Connected!"))
.catch((err)=> console.log("Error",err))

db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.employees = require('./Employee.js')(sequelize,DataTypes)
db.sequelize.sync({ force:false })
.then(()=>{
    console.log("DB Synced!")
    console.log("hii",db.sequelize.models);
})

module.exports = db;