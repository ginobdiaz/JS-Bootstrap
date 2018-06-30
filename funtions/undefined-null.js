//undefined for variable
let name;
name = 'Jen';
if (name === undefined){
    console.log('Need a name..')
}else {
console.log(name);
}


//undefined for function arguments
//undefined as function return default value
let square = function(num){
    console.log(num);
}

let result = square();
console.log(result);

//
let age = 27;
age = null;
//age = undefined;
console.log(age);