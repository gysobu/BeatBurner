var express=require('express');
var router=express.Router();
var dbs=require('../models/modelsql/database.js')
router.get('/warmup',(req,res)=>{
    dbs.any("select music.* from music inner join difficulty on music.difficultyid=difficulty.id and difficulty.difficulty='warmup'")
    .then((results)=>{
     res.render('warmup',{
         warmupplaylist:results
     })
    })
    

})
module.exports=router