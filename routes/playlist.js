var express =require('express')
var router =express.Router();
// var db = require('../models/');
var dbs=require('../models/modelsql/database.js')
router.get('/playlist',(req,res)=>{
    dbs.any('SELECT * FROM music')
    .then((results)=>{
        res.render('playlist',{
          playlists:results
        })
       
    })
});

module.exports=router;
