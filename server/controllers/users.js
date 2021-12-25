var db= require("../db/index");
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports={
    GetUserDetails: (req, res) => {
        db.query(
            "select * from users where userId= ?" ,
            [req.params.userId],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result[0]);
                }
            }
        );
    },

    GetUserDetailsByUserName: (req, res) => {
        console.log('sssssssssssss :', req.body)
        db.query(
            "select * from users where userName= ?" ,
            [req.body],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result[0]);
                }
            }
        );
    },
   find_all : (result) => {
    db.query("SELECT * FROM users", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},
find_One:(id, result) => {
    id=req.param.id
    db.query("SELECT * FROM users WHERE users_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
},
update_One:(data, id, result) => {
    console.log("");
    id=req.param.id
    db.query("UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},
remove_One:(id, result) => {
    id=req.param.id
    db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
},
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



 
