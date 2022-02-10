var dbconfig = require('../config/dbconfig')
var  Sequelize = require('sequelize')
var sequelize =  new Sequelize(
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
// db.employees = require('./Employee.js')(db.sequelize,Sequelize.DataTypes)
db.projects = require('./Project')(sequelize,Sequelize.DataTypes)
db.projectuseraccess = require('./ProjectUserAccess')(db.sequelize,Sequelize.DataTypes)
db.role = require('./Role')(db.sequelize,Sequelize.DataTypes)
db.user = require('./User')(db.sequelize,Sequelize.DataTypes)
db.userrole = require('./UserRole')(db.sequelize,Sequelize.DataTypes)

db.sequelize.sync({ force:false })
.then(()=>{
    console.log("DB Synced!")
    console.log("hii",db.sequelize.models);
})

db.Query = db.sequelize
Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = db;