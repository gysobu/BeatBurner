
var weight = 150;
var avgAge = 22;
var fbz1 = 140
var songInMin = 3.85


function male(age, userWeight, fbz, duration){
    var result = (.2017 * age + .1988 * (.45359237 * userWeight) + .6309 * fbz - 55.0969) * duration / 4.184;

    var caloriesPerSong = Math.round(result * 1e2 ) / 1e2;

    return caloriesPerSong
}

console.log(male(avgAge, weight, fbz1, songInMin))


