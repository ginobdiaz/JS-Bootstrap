// function  - input, code, output

let greetUser = function(){
    console.log('Welcome user!');
}

greetUser();

let square = function(num){
    let result =  num * num;
    return result;
}

let value = square(3);
console.log(square(10));
console.log(value);

let tempConvert = function(tmp){
    let celsius = (tmp - 32) * 5/9;
    return celsius;
}

console.log(tempConvert(75));