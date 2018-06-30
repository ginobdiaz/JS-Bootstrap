let myAcct = {

    name: 'Gino Diaz',

    expenses: 0,

    income:0

}
let otherAcct = myAcct; //creates a binding between these objs
otherAcct.income = 1000;


let addIncome = function (account, amount) {
    account.income = account.income + amount;
}
let addExpense = function (account, amount) {

    account.expenses = account.expenses + amount;
    
    /*
    account = {};  //does not change the obj ref 'myAcct'
                   // however when u update a property it will update 'myAcct'

    console.log(account);
    */
}
let resetAccount = function(account){
    account.income = 0;
    account.expenses = 0;
}
let getAccountSummary = function(account){
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
}
 

//addExpense(myAcct, 2.5);
//console.log(myAcct);


//output 'Account for name has $balance. $inc in income. $exp in expenses.
//addIncome
//addExpense
//addExpense
//getAccountSummary
//resetAccount
//getAccountSummary

addIncome(myAcct, 1200);
addExpense(myAcct, 200);
addExpense(myAcct, 200);
console.log(getAccountSummary(myAcct));
resetAccount(myAcct);
console.log(getAccountSummary(myAcct));
addIncome(myAcct, 120);
addExpense(myAcct, 200);
console.log(getAccountSummary(myAcct));

