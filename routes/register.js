var express = require('express');
var router = express.Router();
var bcrypt=  require("bcrypt")
const User= require("./../models/register.model");



/* Save users . */
router.post('/register', function(req, res, next) {
    var { username , password:PlaintextPassword }=  req.body;
try{
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(PlaintextPassword, salt, function(err, hash) {
            console.log("ff" , hash);
    password = hash;
            User.create({username,password}, function( err){
                if(err){
                    res.send({
                        status:"Error",
                       message:"Failed"
                    })
                }else{
                    res.send({
                        status:"Success",
                        message:"User Created successfully"
                    })
                }
                    })
            // Store hash in the database
        });
    })


}catch(error){
console.log("err");
}
    
    
//    User.create({})
});

module.exports = router;
