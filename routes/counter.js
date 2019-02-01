function calCount() {
// Age average for 18-25
    var age1 = 22;
// Age average for 26-35
    var age2 = 31;
// Age average for 36-50
    var age3 = 43;

// Fat burning zone for age group 1
    var fbz1 = 140;
// Fat burning zone for age group 2
    var fbz2 = 133;
// Fat burning zone for age group 3
    var fbz3 = 122;
    //MALE
        // return ((0.2017 * age2 + 0.1988 * (0.45359237 * 130) + 0.6309 * fbz2 - 55.0969) * 5 / 4.184);
    //FEMALE
    return ((0.074 * age2 - 0.1263 * (0.45359237 * 130) + 0.4472 * fbz2 - 20.4022) * 5 / 4.184);
};
//converts it up to 2 decimals point
Math.round(calCount() * 1e2 ) / 1e2;

