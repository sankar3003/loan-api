let mongoose = require('mongoose')

let usersShema= mongoose.Schema({
     loanName:String,
     loanType:String ,
     loanAmt:Number,
     loanIssueDate:Date,
     loanStatus:String,

})

const usersModel= mongoose.model("Users" , usersShema )

module.exports =usersModel;