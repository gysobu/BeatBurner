var express = require('express');
var router = express.Router();

//for passport to authenticate
const db = require('../models/');
//used to configure passport
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
//used to decript password on database
const bcrypt = require('bcryptjs')
//used to parse cookie info into req object also decrypt signed cookies
const cookieParser = require('cookie-parser');
//used to retrieve and convert header information from user login
const bodyParser = require('body-parser');
//used to create a session middleware
const session = require('express-session');
//used to connect node to database through promise
// const sequelize = require('sequelize');
//used to store a session 
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//end passport to authenticate



//set up session
var myStore = new SequelizeStore({
    db: db.sequelize
})

router.use(session({
    secret: 'secret',
    store: myStore,
    resave: false,
    proxy: true
}))

//used to sync with session table
myStore.sync();
//end session set up

//middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
// router.use(flash());

router.use(passport.initialize())
router.use(passport.session());

router.get('/',(req,res)=>{
    res.render('login')
});

passport.use(new LocalStrategy((username, password, done)=>{
        db.user.findAll({where: {username:username}})
        .then((result)=>{

            if (result != null){
                const data = result[0];
                bcrypt.compare(password, data.password, (err, res)=>{
                    
                    if (res){
                        
                        done(null, data)

                    } 
                    else{
                        done(null, false)
                    }  
                })
            }
            else {
                done(null,false)
            }
        });
    }
));

router.post('/', passport.authenticate('local', {successRedirect: '/dashboard',
                                                        failureRedirect: '/'
                                                        }))

passport.serializeUser((user, done)=>{
    
    done(null, user.id);
    
});


passport.deserializeUser((id, done)=>{
    db.user.findById(parseInt(id,10))
    .then((data=>{
        done(null,data)
    }
    ))
})

module.exports = router;
