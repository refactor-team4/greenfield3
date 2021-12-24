var db= require("../db/index");
module.exports={
    AddComment: (req, res) => {
        console.log('aaaa :',req.body);
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
                    db.query(
                        "SELECT * FROM comments INNER JOIN posts ON comments.postId = posts.postId",
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
       
 
