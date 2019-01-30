var express = require('express');
var router = express.Router();


router.get('/dashboard',(req,res)=>{
    if(!req.isAuthenticated()){
        res.redirect('/login');
        return
    }

    console.log(req.user.id)
    res.render('dashboard')
})





module.exports = router;