// eslint-disable-next-line no-unused-vars
var db= require("../db/index");
module.exports={PostOne: (req,res)=>{
    console.log(req.body)
    db.query("insert into events (eventName,description,price,img,time) values(?,?,?,?,?)",[req.body.EventsName,req.body.Description,req.body.price,req.body.productImg,req.body.time],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            db.query("select * from events",(err,result)=>{
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
        db.query("select * from events",(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result)
            }
        })
    },
    delete:(req,res)=>{
        console.log(req.params);
        db.query("DELETE FROM events WHERE eventName=?",[req.params.name],
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                db.query("select * from events",(err,result)=>{
                    if(err){
                        console.log(err);
                    }else{
                        res.send(result)
                    }
                })
            }
        })}}
     
 