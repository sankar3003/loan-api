const mongoose = require('mongoose')

const customerShema= mongoose.Schema({
     firstName:String,
     lastName:String ,
     email:String,
     PhoneNumber:Number,
     dob:Date,

})

const customerModel= mongoose.model("Customers" , customerShema )

module.exports =customerModel;