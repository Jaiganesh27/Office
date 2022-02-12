const express = require("express");
const route = express.Router();
const authController = require('../controller/authController')

route.post('/register', authController.register)
route.get('/login', authController.login)
route.get('/refreshToken', authController.refreshToken)
route.get('/logout', authController.logout)
route.get('/getData', authController.getData)
module.exports = route;

