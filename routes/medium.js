var express = require('express');
var router = express.Router();
var dbs = require('../models/modelsql/database.js')

router.get('/medium', (req, res) => {
    dbs.any("select music.* from music inner join difficulty on music.difficultyid=difficulty.id and difficulty.difficulty='medium'")
        .then((results) => {
            
            var age = req.user.age;
            var userWeight = req.user.weight;

            var songDurArr = []
            var arrayofcalories = []
            var caloriesPerSong;

            results.forEach((song) => {
                
                songDurArr.push(song.duration)
            })

            function caloriesCalc(age, weight, fbz, arr) {
                if (req.user.gender == 'm') {
                    console.log('m')
                    for (var i = 0; i < arr.length; i++) {
                        var result = (.2017 * age + .1988 * (.45359237 * weight) + .6309 * fbz - 55.0969) * arr[i] / 4.184
                        caloriesPerSong = Math.round(result * 1e2) / 1e2
                        arrayofcalories.push(caloriesPerSong)
                    }
                    return arrayofcalories

                } else if (req.user.gender == 'f') {
                    console.log('f')
                    for (var i = 0; i < arr.length; i++) {
                        var result = (.074 * age + .1263 * (.45359237 * weight) + .4472 * fbz - 20.4022) * arr[i] / 4.184
                        caloriesPerSong = Math.round(result * 1e2) / 1e2
                        arrayofcalories.push(caloriesPerSong)
                    }
                    return arrayofcalories
                }
            }

            function maleCalPerSong() {
                if (age > 18 && age < 25) {
                    var avgAge = 22;
                    var fbz1 = 140;
                    console.log(`i am ${avgAge}`)
                    caloriesCalc(avgAge, userWeight, fbz1, songDurArr)

                } else if (age > 26 && age < 35) {
                    var avgAge = 31;
                    var fbz2 = 133;
                    console.log(`${avgAge}`)
                    caloriesCalc(avgAge, userWeight, fbz2, songDurArr)

                } else if (age > 35 && age < 50) {
                    var avgAge = 43;
                    var fbz3 = 122;
                    console.log(`${avgAge}`)
                    caloriesCalc(avgAge, userWeight, fbz3, songDurArr)
                }
            }

            var totalCalc = ((arr) => {
                return arr.reduce((a, b) => {
                    var total = a + b
                    return Math.round(total * 1e2) / 1e2
                }, 0)
            })
            
            maleCalPerSong()

            var totalCalories = totalCalc(arrayofcalories)
            
            res.render('medium', {
                mediumplaylist: results,
                caloriesPerSong: arrayofcalories,
                totalCalories: totalCalories
            })
        })
})
module.exports = router