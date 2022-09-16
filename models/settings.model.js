let mongoose = require('mongoose')

let settingsShema= mongoose.Schema({
     loanName:String,
     loanType:String ,
     loanAmt:Number,
     loanIssueDate:Date,
     loanStatus:String,

})

const settingsModel= mongoose.model("Settings" , settingsShema )

module.exports =settingsModel;