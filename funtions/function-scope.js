// Global scope (tempConvert, tempOne, tempTwo)
  // Local scope (tmp, celsius)
     // Local scope from if (isFreezing)
let tempConvert = function(tmp){
    let celsius = (tmp - 32) * 5/9;
    if (celsius <= 0){
        let isFreezing = true;
    }

    return celsius;
}
let tempOne = tempConvert(32);
let tempTwo = tempConvert(68);
console.log(tempOne);
console.log(tempTwo);