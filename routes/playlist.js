var express =require('express')
var router =express.Router();
var db=require('../model/database.js')
router.get('/playlist',(req,res)=>{
    db.any('SELECT * FROM music')
    .then((results)=>{
        res.render('playlist',{
          playlists:results
        })
       
    })
});

module.exports=router;
