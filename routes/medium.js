// var express=require('express');
// var router=express.Router();
// var dbs=require('../models/modelsql/database.js')
// router.get('/medium',(req,res)=>{
//     dbs.any("select music.* from music inner join difficulty on music.difficultyid=difficulty.id and difficulty.difficulty='medium'")
//     .then((results)=>{
//      res.render('medium',{
//          mediumplaylist:results
//      })
//     })


// })
// module.exports=router

var express = require('express');
var router = express.Router();
var dbs = require('../models/modelsql/database.js')
var db = require('../models/')


router.get('/medium',(req,res)=>{
   dbs.any("select music.* from music inner join difficulty on music.difficultyid = difficulty.id and difficulty.difficulty ='medium'")
        .then((results) => {

            var age = req.user.age;
            var userWeight = req.user.weight;

            var songDurArr = []
            var arrayofcalories = []
            var caloriesPerSong;


            results.forEach((song) => {
                console.log(`${song.duration[5]} ${song.artistname}`)
                songDurArr.push(song.duration)

            })
            // console.log(songDurArr)


            function male(age, weight, fbz, arr) {
                for (var i = 0; i < arr.length; i++) {
                    var result = (.2017 * age + .1988 * (.45359237 * weight) + .6309 * fbz - 55.0969) * arr[i] / 4.184

                    caloriesPerSong = Math.round(result * 1e2) / 1e2



                    arrayofcalories.unshift(caloriesPerSong)

                }

                return arrayofcalories

            }


            maleCalPerSong()

            function maleCalPerSong() {


                if (age > 18 && age < 25) {
                    var avgAge = 22;
                    var fbz1 = 140;
                    console.log(`i am ${avgAge}`)

                    male(avgAge, userWeight, fbz1, songDurArr)

                }

                if (age > 26 && age < 35) {
                    var avgAge = 31;
                    console.log(`${avgAge}`)
                    return male(avgAge, userWeight, fbz1, songDurArr)
                }

                if (age > 35 && age < 50) {
                    var avgAge = 43;
                    console.log(`${avgAge}`)
                    return male(avgAge, userWeight, fbz1, songDurArr)
                }

            }





            res.render('medium', {
                mediumplaylist: results,
                caloriesPerSong: arrayofcalories
            })
        })


})
module.exports = router