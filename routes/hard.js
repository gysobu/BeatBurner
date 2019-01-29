var express=require('express');
var router=express.Router();
var dbs=require('../models/modelsql/database.js')
router.get('/hard',(req,res)=>{
    dbs.any("select music.* from music inner join difficulty on music.difficultyid=difficulty.id and difficulty.difficulty='hard'")
    .then((results)=>{
     res.render('hard',{
         hardplaylist:results
     })
    })
    

})
module.exports=router