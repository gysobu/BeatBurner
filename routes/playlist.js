var express = require('express');
var router = express.Router();


router.get('/playlist', (req,res)=>{
    res.render('playlist')
});



module.exports = router;