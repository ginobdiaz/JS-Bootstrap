const account ={
    name: 'Gino D.',
    expense: [],
    income: [],
    addExpense: function (desc, amt) {
        this.expense.push({description: desc, amount: amt});
    },
    addIncome: function (desc, amt){
        this.income.push({description: desc, amount: amt});
    },
    getAccountSummary: function () {
        let totExpenses = 0;
        let totIncomes = 0;
        this.expense.forEach(function(item){
            return totExpenses = totExpenses + item.amount;
        });
        this.income.forEach(function(inc){
            return totIncomes = totIncomes + inc.amount;
        });
        return `${this.name} has a balance of $${totIncomes - totExpenses}. $${totIncomes} in income. $${totExpenses} in expenses.`
    }
}

// 1. add income array to account
// 2. addIncome method-> description, amount
// 3. Tweak getAccoutSummary
// output: acct.name has a balance of $10. $100 in income. $90 in expenses.

account.addIncome('Gino\'s salary', 900);
account.addIncome('Jen\'s salary', 400);
// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expense
//              output: acct.Name has $120 in expenses.

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addExpense('Auto loan', 162)
//console.log(account.expense)
console.log(account.getAccountSummary());
console.log(account.income[0].description);
console.log(account.expense);