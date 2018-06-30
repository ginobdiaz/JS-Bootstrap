let add = function(a, b){
    return a + b;
}

let result = add(10,1);
console.log(result);


// default arguments
let getScoreTest = function(name='Anonymous', score = 0){
   // console.log(name);
   // console.log(score);
   //return 'Name: ' + name + ' - Score: ' + score;

   return `Name: ${name} - Score: ${score}`
}

console.log(getScoreTest());
console.log(getScoreTest(undefined, 99));

//Challenge area
// total, tipPct = .2
// A 25% tip on $40 would be $10
let getTipAmount = function(tot = 0, tipPct = .2){
   // return tot * tipPct;
   let amtTip = tot * tipPct;
   let totTip = tipPct * 100;
   return `A ${totTip}% on $${tot} would be $${amtTip}`;
   //return `A ${tipPct * 100}% on $${tot} would be $${tot * tipPct}`;
}

let tot = 40;
let pct = .25
console.log(getTipAmount(tot, pct));

//console.log('Tip for: ' + tot + ' is ' + myTip);

console.log("Gino")  //can use double quotes but stick with it.

//template string
let name = 'Sam';
let age = 19;
console.log(`Hey my name is ${name}! I am ${age} years old.`)