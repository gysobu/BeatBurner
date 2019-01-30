var express=require('express');
var router=express.Router();
var dbs=require('../models/modelsql/database.js')
router.get('/medium',(req,res)=>{
    dbs.any("select music.* from music inner join difficulty on music.difficultyid=difficulty.id and difficulty.difficulty='medium'")
    .then((results)=>{
     res.render('medium',{
         mediumplaylist:results
     })
    })
})
module.exports=router