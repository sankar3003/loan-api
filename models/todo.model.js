const mongoose = require("mongoose");

const todoShema= mongoose.Schema({

name:String

})
const todoModel= mongoose.model("Todos" , todoShema )

module.exports =todoModel;
