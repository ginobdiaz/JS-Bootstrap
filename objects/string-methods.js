let name = 'Gino B. Diaz';

// Length property
console.log(name.length)

let isValidPassword = function(pwd){
    return pwd.length > 8 && !pwd.includes('password');
}

console.log(isValidPassword('sdfer'));
console.log(isValidPassword('87d06640t'));
console.log(isValidPassword('2932password223'));

