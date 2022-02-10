var express  = require('express');
const app = express();
require('../src/entity/index')
var empRouter = require('./app/Employee/index')
var userRoleRouter = require('./app/Employee/index')

// middleware
app.use(express.json());

//route
app.use('/api/employee', empRouter);
app.use('/api/userrole', userRoleRouter);
const PORT = 4000;

app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server Connected and server port is ${PORT}`);
})