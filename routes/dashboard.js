var express = require('express');
var router = express.Router();
var db = require('../models/');
// var dbs=require('../models/modelsql/database.js')
router.get('/dashboard',(req,res)=>{
    if(!req.isAuthenticated()){
        res.redirect('/login');
        return
    }

    var id=req.user.id;
    var age=req.user.age
    var weight=req.user.weight
    var name=req.user.username;
    // console.log(req.user.id)
    // console.log(req.user.username)
    // console.log(req.user.username)
    // console.log(req.user.age)
    res.render('dashboard',{
        username:name,
        userage:age,
        userweight:weight 
    
    })
    router.post('/dashboard',(req,res)=>{
        let updatedage=req.body.updateage;
        console.log(updatedage)
        db.user.update({age: updatedage},{where:{id:id}})
        .then((result)=>{
            // console.log(result)
            res.render('dashboard',{
                username:name,
                userage:updatedage,
                userweight:weight 
            })
        })    
    })   
})
module.exports = router;

