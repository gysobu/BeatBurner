var express = require('express');
var router = express.Router();


router.get('/dashboard',(req,res)=>{
    if(!req.isAuthenticated()){
        res.redirect('/login');
        return
    }

    console.log(req.user.id)
    var name=req.user.username;
    var age=req.user.age;
    var weight=req.user.weight;
    var currentweight=req.user.weight-10
    res.render('dashboard',{
      name:name,
      weight:weight,
      age:age,
      cweight:currentweight
    })
})





module.exports = router;