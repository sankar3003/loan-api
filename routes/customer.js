var express = require('express');
var router = express.Router();

const customerModel= require("./../models/customer.model");

// create new customer

router.post("/add", function(req,res,next){
console.log("dfsf");
  let customerobj = new customerModel({
    firstName:"Raji",
    lastName:"santhose " ,
    email:"raji@yopmail.com",
    PhoneNumber:54354325345,
    dob:"30-1-1998",
    department:"Ror"
  })

  customerobj.save(function(err,resss){

    if(err){
      res.send({
        status:500,message:"Unable to saave customer"
      })


    }
    else{
      res.send({status:200, message:"Saved", customerDetails:resss})
    }
  })
})

/* GET all customers listing. */
router.get('/list', function(req, res, next) {
  customerModel.find((err,customerData)=>{
    if(err){
      res.send({
        status:500,message:"Unable to find customer"
      })


    }
    else{
      let length= customerData.length;
      res.send({status:200, dataLength:length, results:customerData})
    }
  })
});

// get details of a specific customer
router.get('/view', function(req, res, next) {
  let id= req.query.user_id; // get the query params in express js
  console.log("id" ,id);
  customerModel.findById(id,(err,customerDetail)=>{
    if(err){
      res.send({
        status:500,message:"Unable to find customer"
      })


    }
    else{
      let length= customerDetail.length;
      res.send({status:200, dataLength:length, results:customerDetail})
    }
  })
});

// find one customer and update
router.put('/update', function(req, res, next) {
  console.log("tets");
  let id= req.query.user_id; // get the query params in express js
  console.log("id" ,id);
  let customerobj ={
    firstName:"Ravi",
    lastName:"Yathav" ,
    email:"ravi@yopmail.com",
    PhoneNumber:6344643122,
    dob:"01-01-1996",
    department:"Sales"
  }
  customerModel.findByIdAndUpdate(id,customerobj,function(err,customerRes){
    if(err){
      console.log("sdfsf" ,err);
      res.send({
        status:500,message:"Unable to update the customer"
      })


    }

    else{
       console.log("no");

      res.send({status:200, results:customerRes})
    }
  })
});




// delete particular custmoner

router.delete("/delete" ,(req,res,next)=>{
  let id= req.query.user_id; // get the query params in express js
  console.log("id" ,id);
  customerModel.findByIdAndDelete(id,(err,customerDetail)=>{
    if(err){
      res.send({
        status:500,message:"Unable to delete customer"
      })


    }
    else{

      res.send({status:200, message:"Deleted customer successfully"})
    }
  })
})

// delete  multipel customers

router.delete("/delete-many" ,(req,res,next)=>{
  let id= req.query.user_id; // get the query params in express js
  console.log("id" ,id);
  customerModel.deleteMany({firstName:"Raji"},(err,customerDetail)=>{
    if(err){
      res.send({
        status:500,message:"Unable to delete customers"
      })


    }
    else{

      res.send({status:200, message:"Deleted customers selected successfully"})
    }
  })
})

module.exports = router;
