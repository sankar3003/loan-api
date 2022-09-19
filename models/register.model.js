let mongoose = require('mongoose')

let registerSchema= mongoose.Schema({
     username:{type:String,require:true, unique:true },
password:{type:String}

})

const registerModel= mongoose.model("User" , registerSchema )

module.exports =registerModel;