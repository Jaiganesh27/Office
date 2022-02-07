const express = require('express')
const handler = require('./handler')
const empRouter = express.Router()
empRouter.post('/add',handler.addEmployee);
empRouter.put('/update/:id',handler.updateEmployee);
empRouter.delete('/delete/:id',handler.deleteEmployee);
empRouter.get('/get/:id',handler.getEmployee);
empRouter.get('/list',handler.getEmployeesList);
module.exports = empRouter;