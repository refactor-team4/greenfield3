var db= require("../db/index");
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
 }

