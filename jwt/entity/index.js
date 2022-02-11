const Sequelize = require('sequelize');
const dbConfig = require('../config/db.json');

var sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host:dbConfig.host,
        dialect:dbConfig.dialect
    });

sequelize.authenticate().then(()=>{
    console.log('database connected!');
}).catch(err=>{
    console.log(err,'err');
}) 
db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync();

db.user = require('./user')(db.sequelize,Sequelize)


module.exports = db;
