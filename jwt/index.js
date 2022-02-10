const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');


let user = {
    userName:"Google",
    password:"Google12345"
}

app.get("/",(req,res)=>{
    console.log("home page");
    res.json({value:"Welcome to the home page!"});
})

app.get("/genToken",async (req,res)=>{
    try{
    var token = await jwt.sign({user}, 'dsfsrhfjkerrhtjrjrewlkfwjrrkj3rlkjwj',{ expiresIn: '1m' });
    res.json({ msgValue: 'Success', token:token });
    }
    catch(err){
    console.log("Failure");
    res.json({msgValue: 'Failure', err:err})
    }
})

app.get("/check/token/:id",async (req,res)=>{
    var token = req.params.id;
    try {
        var afterTokenGenerate = await jwt.verify(token, 'dsfsrhfjkerrhtjrjrewlkfwjrrkj3rlkjwj');
        res.json({msg:"Success",data:afterTokenGenerate});
      } catch(err) {
         if(err) 
         res.json({msgValue:"Failure",data:"invalid token error occured!",err:err})
      }
})

var PORT = 3500;
app.listen(PORT,()=>{
    console.log(`App listening in PORT :${PORT}`);
})
