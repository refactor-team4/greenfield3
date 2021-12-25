var db= require("../db/index");
module.exports={
    AddComment: (req, res) => {
        db.query(
            "insert into comments (commentaire ,posterUserName,posterPicture,postId) values(?,?,?,?)",
            [req.body.commentaire, req.body.posterUserName, req.body.posterPicture, req.body.postId],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                            res.send(result);
                        }
                    });
                },
                GetAllComments: (req, res) => {
                    console.log('reqqqq',req.body.postId)
                    db.query(
                        "SELECT * FROM comments WHERE postId = ?",[req.body.postId],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                res.send(result);
                            }
                        }
                    );
                },

            }
       
 
