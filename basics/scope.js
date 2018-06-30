// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined within a code block

// In a scope you can access variables defined in that scope or in any parent/ancestor


let var1 = 'varOne'  //global scope

if (true){
    console.log(var1)
    let var2 = 'varTwo' // local scope
}
console.log(var2)