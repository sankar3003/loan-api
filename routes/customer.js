var express = require('express');
var router = express.Router();

const customerModel= require("./../models/customer.model");

// create new customer 

router.post("/add", function(req,res,next){
console.log("req", req.body);
let firstName=req.body.firstName
let lastName=req.body.lastName
let email=req.body.email
let PhoneNumber=req.body.PhoneNumber
let dob=req.body.dob
let department=req.body.department
  let customerobj = new customerModel({
    firstName:firstName, 
    lastName:lastName,
    email:email,
    PhoneNumber:PhoneNumber,
    dob:dob,
    department:department
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
  
  let id= req.query.user_id; // get the query params in express js
  console.log("id" ,id);
  let firstName=req.body.firstName
  let lastName=req.body.lastName
  let email=req.body.email
  let PhoneNumber=req.body.PhoneNumber
  let dob=req.body.dob
  let department=req.body.department
    let customerobj ={
      firstName:firstName, 
      lastName:lastName,
      email:email,
      PhoneNumber:PhoneNumber,
      dob:dob,
      department:department 
    } 
  customerModel.findByIdAndUpdate(id,customerobj,function(err,customerobj){
    if(err){

      res.send({
        status:500,message:"Unable to update the customer"
      })

    
    }

    else{
      
    
      res.send({status:200, results:customerobj})
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
