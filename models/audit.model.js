const mongoose = request('mongoose')

const auditShema= mongoose.Schema({
     firstName:String,
     lastName:String ,
     email:String,
     PhoneNumber:Number,
     dob:Date,

})

const auditModel= mongoose.model("Customers" , auditShema )

module.exports =auditModel;