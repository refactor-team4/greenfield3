// eslint-disable-next-line no-unused-vars
var db= require("../db/index");
module.exports={PostOne: (req,res)=>{
    console.log(req.body)
    db.query("insert into products (productName,price,img) values(?,?,?)",[req.body.productName,req.body.productPrice,req.body.productImg],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            db.query("select * from products",(err,result)=>{
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
    },
    delete:(req,res)=>{
        console.log(req.params);
        db.query("DELETE FROM products WHERE productName=?",[req.params.name],
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                db.query("select * from products",(err,result)=>{
                    if(err){
                        console.log(err);
                    }else{
                        res.send(result)
                    }
                })
            }
        })}}
     
 