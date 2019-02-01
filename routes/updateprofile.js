var express =require('express')
var router=express.Router();
var bodyParser = require('body-parser');

router.get('/update',(req,res)=>{
    res.render('update',{
    })
})

// router.post('/update',(req,res)=>{
//     let updatedage=req.body.updateage;

//     console.log(updatedage)
// })

module.exports=router