var express =require('express');
var router =express.Router();
var db=require('../model/database.js')
router.get('/',(req,res)=>{
    db.any('SELECT * FROM music')
    .then((data)=>{
        res.send(data)
    })
   

})
module.exports=router
