var db= require("../db/index");
var bcrypt = require("bcrypt");
module.exports={
   
    // login_an_admin: (req, res) => {
	// 	      db.query('select * from admins where userName=?',[req.body.username],(err,result)=>{
    //               console.log(result);
    //         if(err){
    //             console.log("userName wrong")
    //         }else{
    //             // console.log(result)
    //             bcrypt.compare(req.body.password, result[0].password, function(err, response) {
    //                 console.log(result[0].password)
    //                 if(err){
    //                     console.log(err)
    //                     console.log("password is wrong")
    //                 }else{
    //                     // console.log(response)
    //                     res.send(result)
    //                 }})}})}}





    login_an_admin: (req, res) => {
        db.query('select * from admins where userName=?',[req.body.username],(err,result)=>{
      if(err){
          res.send("this user does not exist")
      }else{
          // console.log(result)
          if(result.length===0){return res.send("this user does not exist")}
          bcrypt.compare(req.body.password, result[0].password, function(err, response) {
              console.log(result[0].password)
              if(err){
                  console.log(err)
                  res.send("password is wrong")
              }else{
                 if(response){res.send(result)}
                 else{res.send("password is wrong")}
              }})}})},
              PostOne: (req,res)=>{
                console.log(req.body)
                db.query("insert into products (productName,price,img) values(?,?,?)",[req.body.productName,req.body.productPrice,req.body.productImg],
                (err,result)=>{
                    if(err){
                        console.log(err);
                    }else{
                        db.query("select * from posts",(err,result)=>{
                            if(err){
                                console.log(err);
                            }else{
                                res.send(result)
                            }
                        })
                    }
                })
            },
            GetAll:(req,res)=>{
                db.query("select * from products",(err,result)=>{
                    if(err){
                        console.log(err);
                    }else{
                        res.send(result)
                    }
                })
            }
            }
      
            
        
    
