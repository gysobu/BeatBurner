
var weight = 230;
var avgAge = 22;
var fbz1 = 140

function male(age, weight, fbz){
    var result = (.2017 * avgAge + .1988 * (.45359237 * weight) + .6309 * fbz - 55.0969) * 5 / 4.184;

    var caloriesPerSong = Math.round(result * 1e2 ) / 1e2;

    return caloriesPerSong
}

console.log(male(weight, avgAge, fbz1))


