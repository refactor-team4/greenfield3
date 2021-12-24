/* eslint-disable no-unused-vars */
var db= require("../db/index");
module.exports={
    PostOne: (req,res)=>{
        console.log(req.body)
        db.query("insert into posts (content ,imgUrl,title,place) values(?,?,?,?)",[req.body.content,req.body.imgUrl,req.body.title, req.body.place],
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
        db.query("select * from posts",(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result)
            }
        })
    },
    GetSome:(req,res)=>{
        db.query("select * from posts where place= ?",[req.params.searchedPlace],(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result)
            }
        })
    }
 }