// product --> Object.prototype --> null
// from console
//   product.__proto__              <--get Object {}
//   product.__proto__.__proto__    <--get null
/*const product = {
    name: 'Influence'
}
// hasOwnProperty
console.log(product.hasOwnPropery())
*/

// Primitive values: string*, number*, boolean*, null & undefined
//  these values are not objects.
//  * - have an object wrapper: when a property or method are used 
//      then the primitive types are converted to an object.
//     const otherProp = new String('Phone')
// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// const team = new Array(['Luke','Maddison'])
//const team = ['Luke','Maddison']
//console.log(team);
//console.log(team.hasOwnProperty('filter'))

// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoo --> Boolean.prototype --> Object.prototype --> null
