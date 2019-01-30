var express = require('express');
var router = express.Router();
var db = require('../models/');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');


router.get('/register',(req,res)=>{
    res.render('register')
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/register',(req,res)=>{

    let password = bcrypt.hashSync(req.body.password,8)
    
    db.user.create({username: req.body.username, password:password, age:req.body.age, weight:req.body.weight, gender:req.body.gender})
    .then(()=>{
        res.redirect('/')
    })
});

module.exports = router;