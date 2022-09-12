const mongoose = request('mongoose')

const loanShema= mongoose.Schema({
     loanName:String,
     loanType:String ,
     loanAmt:Number,
     loanIssueDate:Date,
     loanStatus:String,

})

const loansModel= mongoose.model("Loans" , loanShema )

module.exports =loansModel;