var express=require('express');
var router=express.Router();
var dbs=require('../models/modelsql/database.js')
router.get('/easy',(req,res)=>{
    dbs.any("select music.* from music inner join difficulty on music.difficultyid=difficulty.id and difficulty.difficulty='easy'")
    .then((results)=>{
     res.render('easy',{
         easyplaylist:results
     })
    })
    

})
module.exports=router