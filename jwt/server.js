const express = require('express');
const jwt = require('jsonwebtoken');
const router = require('./router/authRoutes');
const db = require('./config/db.json');
const { verifyAccessToken } = require('./jwt_helper/token.js');
require('./entity')
app = express();

app.use(express.json());



app.get('/',verifyAccessToken,(req,res,next)=>{
  console.log("Hi You're in a protected homepage");
  res.json({ message:'Welcome to Home Page'});
})

app.use('/auth',router);

app.listen(db.PORT,()=>{
    console.log('Server connected on :'+ db.PORT);
})