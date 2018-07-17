// product --> Object.prototype --> null
// from console
//   product.__proto__              <--get Object {}
//   product.__proto__.__proto__    <--get null
const product = {
    name: 'Influence'
}

// hasOwnProperty
console.log(product.hasOwnPropery())