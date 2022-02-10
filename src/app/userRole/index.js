const express = require('express')
const handler = require('./handler')
const empRouter = express.Router()
empRouter.get('/get/:id',handler.getUserRoleById);
empRouter.get('/list',handler.getUserRolesList);