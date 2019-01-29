var avgAge = 31;
var weight = 122;
var fbz2 = 133;

function female(age, weight, fbz){
    var result = (0.074 * avgAge - 0.1263 * (0.45359237 * weight) + 0.4472 * fbz2 - 20.4022) * 5 / 4.184;
    
    var caloriesPerSong = Math.round(result * 1e2 ) / 1e2;

    return caloriesPerSong
}

console.log(female(avgAge, weight, fbz2))