// Global (name)
  // Local (name)
    // Local
  // Local


let name = 'Dude'

if (true){
    let name = 'Sweet'  // the name is variable shadowing using global var @ local level

    if (true){
        name = 'Jen'
        console.log(name)
    }
}

if (true){
    console.log(name)
}

//======================================================
// Global 
  // Local 
    // Local
  // Local


 // let name = 'Dude'

  if (true){
 //     let name = 'Sweet'
  
      if (true){
          name2 = 'Jen'
          console.log(name2)
      }
  }
  
  if (true){
      console.log(name2)
  }

// the local variable name2 was never defined
// when it trys to resolve the name and can't find it 
// it will declare name2 as a global variable.
// Known as a 'leak variable'