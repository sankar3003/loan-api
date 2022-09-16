const mongoose = require('mongoose')

const paymentShema= mongoose.Schema({
     loanName:String,
     loanType:String ,
     loanAmt:Number,
     loanIssueDate:Date,
     loanStatus:String,

})

const paymentModel= mongoose.model("Loans" , paymentShema )

module.exports =paymentModel;