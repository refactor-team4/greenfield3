var db= require("../db/index");
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports={
Signup : (req,res)=>{
        db.query('select userId from users where userName=?',[req.body.userName],(err,result)=>{
            if(result.length!==0){
                res.json('username exists')
            }else{
        let posting='insert into users (userName,email,Adress,password) values (?,?,?,?) ' 
        bcrypt.hash(req.body.password, saltRounds, function(err, hash){
        db.query(posting,[req.body.userName,req.body.email,req.body.Adress,hash],(err,data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
                res.send(data)
            }
        
        })})}
    })},

   Login : (req,res)=>{
        // console.log(req.body)
        db.query('select * from users where userName=?',[req.body.userName],(err,result)=>{
            if(err){
                return res.send("userName wrong")
            }else{
                // console.log(result)
                if(result.length===0){return res.send("userName wrong")}
                bcrypt.compare(req.body.password, result[0].password, (err,response)=>{
                    console.log(result[0].password)
                    console.log(req.body.password);
                    console.log(response);
                    if(!response){
                       return res.send("password is wrong")
                    }else{
                        if(response){
                        res.send(result)}
                    }
                  })}
        })
    }
}


