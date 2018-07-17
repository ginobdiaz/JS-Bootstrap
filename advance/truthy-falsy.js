const products =[{}];
const product = products[0];

// Truthy- Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
//Defining falsy values then everything else is truthy
// Falsy Values: false, 0, empty string, null, undefined, NaN

if (product){
    console.log('Product found')
}else{
    console.log('Product not found')
}