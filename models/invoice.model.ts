let mongoose = require('mongoose');

const invoiceShema= mongoose.Schema({
     firstName:String,
     lastName:String ,
     email:String,
     PhoneNumber:Number,
     dob:Date,

})

const ivoiceModel= mongoose.model("Customers" , invoiceShema )

module.exports =ivoiceModel;