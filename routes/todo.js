var express = require('express');
var router = express.Router();

const todoModel= require("./../models/todo.model");

// create new customer

router.post("/add", function(req,res,next){

let todoName=req.body.name;

   const todoObj = new todoModel({
    name:todoName, 

  }) 
  console.log("dsfsd" , todoObj);
  todoObj.save(function(err){

    if(err){
      res.send({
        status:500,message:"Unable to save todo"
      })


    }
    else{
      res.send({status:200, message:"Saved",})
    }
  })
})

/* GET all customers listing. */
router.get('/list', function(req, res, next) {
  todoModel.find((err,todoData)=>{
    if(err){
      res.send({
        status:500,message:"Unable to find customer"
      })


    }
    else{
   
      let length= todoData.length;
      res.send({status:200, dataLength:length, results:todoData})
    }
  })
});

// get details of a specific customer
router.get('/view', function(req, res, next) {
  let id= req.query._id; // get the query params in express js
  console.log("id" ,id);
  todoModel.findById(id,(err,todoData)=>{
    if(err){
      res.send({
        status:500,message:"Unable to find customer"
      })


    }
    else{
      let length= todoData.length;
      res.send({status:200, dataLength:length, results:todoData})
    }
  })
});

// find one customer and update
router.put('/update', function(req, res, next) {
  
  let id= req.query._id; // get the query params in express js
  console.log("id" ,id);
  let name=req.body.name

    let todoobj ={
      name:name, 

    } 
  todoModel.findByIdAndUpdate(id,todoobj,function(err,todoobj){
    if(err){
      console.log("sdfsf" ,err);
      res.send({
        status:500,message:"Unable to update the todo"
      })


    }

    else{
      
    
      res.send({status:200, results:todoobj})
    }
  })
});




// delete particular custmoner

router.delete("/delete" ,(req,res,next)=>{
  let id= req.query._id; // get the query params in express js
  console.log("id" ,id);
  todoModel.findByIdAndDelete(id,(err)=>{
    if(err){
      res.send({
        status:500,message:"Unable to delete todo"
      })


    }
    else{

      res.send({status:200, message:"Todo customer successfully"})
    }
  })
})

// delete  multipel customers

router.delete("/delete-many" ,(req,res,next)=>{
  let ids= req.body.ids; // get the query params in express js
  
   let querry={_id:{$in:ids}};
   console.log("ff" ,dd);
  const query = { name: { $regex: "good" } }; // word goods contains wil be deleted
  todoModel.deleteMany(querry,(err,data)=>{
    if(err){
      res.send({
        status:500,message:"Unable to delete customers"
      })


    }
    else{

      res.send({status:200, message:"todos  successfully deleted", data:data,
    
    })
    }
  })
})

// get panding todo
router.get("/pending" ,(req,res,next)=>{
    let id= req.query._id; // get the query params in express js
let query ={
status:false
}
    todoModel.find(query,(err,data)=>{
      if(err){
        res.send({
          status:500,message:"Unable to delete todo"
        })
  
  
      }
      else{
  
        res.send({status:200, message:"Todo customer successfully",dataValue :data})
      }
    })
  })

module.exports = router;
