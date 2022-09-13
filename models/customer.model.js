const mongoose = require('mongoose')

const customerShema= mongoose.Schema({
     firstName:String,
     lastName:String ,
     email:String,
     PhoneNumber:Number,
     dob:String,
     department:String

})

const customerModel= mongoose.model("customers" , customerShema )

module.exports =customerModel;