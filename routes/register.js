var express = require('express');
var router = express.Router();
var bcrypt = require("bcrypt")
const User = require("./../models/register.model");
const jwt = require("jsonwebtoken");

const secret_key = "FDGASFGDSFGfdg#^%YGSDGFHD@%^THGFDSHGDFHdsf";

// chang password
router.post('/change-password', async function (req, res, next) {

   
        console.log("body dara", req.body);
        var {  token, newpassword:PlaintextPassword,id } = req.body;

        const user =await jwt.verify(token,secret_key)
        console.log("user" ,user);
        const _id =user.id
        console.log("user" ,_id);
const password=await bcrypt.hash(PlaintextPassword, 10)
try {
 await User.updateOne(
    {_id},
{$set:{password}}
)

    } catch (error) {
        console.log("err");
    }


    //    User.create({}) 
});

// login user  in app 

router.post('/login', async function (req, res, next) {

    try {
        console.log("body dara", req.body);
        var { username, password } = req.body;
        let user =await  User.findOne({ "username": username }).lean()
        console.log("rr ", user.username);
        if (bcrypt.compare(password, user.password)) {


            let tokens = jwt.sign({
                id: user.id,
                username: user.username
            }, secret_key)

            return res.json({
                status: "ok",
                data: tokens
            })
        }



    } catch (error) {
        console.log("err");
    }


    //    User.create({})
});


/* Save users . */
router.post('/register', function (req, res, next) {
    var { username, password: PlaintextPassword } = req.body;
    try {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(PlaintextPassword, salt, function (err, hash) {
                console.log("ff", hash);
                password = hash;
                User.create({ username, password }, function (err) {
                    if (err) {
                        res.send({
                            status: "Error",
                            message: "Failed"
                        })
                    } else {
                        res.send({
                            status: "Success",
                            message: "User Created successfully"
                        })
                    }
                })
                // Store hash in the database
            });
        })


    } catch (error) {
        console.log("err");
    }


    //    User.create({})
});

module.exports = router;
