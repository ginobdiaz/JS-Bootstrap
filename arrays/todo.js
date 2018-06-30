/*
const todos = ['Order cat food','Clean kitchen','Buy food', 'Do work', 'Exercise body'];

console.log(`You have ${todos.length} todos!`)



console.log(todos);
//remove 3rd item
todos.splice(2,1);
console.log(todos);
//add new item @ end
todos.push('Wack it');
console.log(todos);
//remove 1st item
todos.shift();
console.log(todos);



todos.forEach( function(item, index){
    console.log(`${index + 1}. ${item}`)

});


console.log(' ')
for (let idx = 0; idx < todos.length; idx++){
    const num = idx + 1;
    const todo = todos[idx]
    console.log(`${num}. ${todo}`);
}
*/

//1. array of objects -> text, completed
//2. create function to remove a todo by text value

const todos = [{
    todo: 'Order cat food',
    isDone: false
},
{
    todo: 'Clean kitchen',
    isDone: false
},
{
    todo: 'Buy food',
    isDone: false
},
{
    todo: 'Do work',
    isDone: false
},
{
    todo: 'Exercise body',
    isDone: false
}]

console.log('Before updates:');
console.log(todos);
const deleteTodo = function(todos, item){
    let delIndex = todos.findIndex(function(todo,index) {
        return todo.todo.toLowerCase() === item.toLowerCase();
    });
    if (delIndex != -1)
        todos.splice(delIndex, 1);
}

const changeStatus = function(todos, chgItem){
    let chgIndex = todos.findIndex(function(todo, index){
        return todo.todo.toLowerCase() === chgItem.toLowerCase();
    });
    console.log(chgIndex);
    if (chgIndex >= 0){
        todos[chgIndex].isDone = !todos[chgIndex].isDone;
    }
}

changeStatus(todos,'Exercise body')
changeStatus(todos,'buy food')

//deleteTodo(todos, 'do work');



console.log('After updates:');
console.log(todos);

const getThingsTodo = function(todos){
    return todos.filter(function(todo, index){
      return !todo.isDone
    })
}

console.log('');
console.log(getThingsTodo(todos));

const getCompletedThings = function(todos){
    return todos.filter(function(todo, index){
      return todo.isDone
    })
}

console.log('');
console.log(getCompletedThings(todos));

//sort by isDone attribute
const sortTodos = function (todos) {
    todos.sort(function(a, b){
        return (a.isDone === b.isDone) ? 0 : a.isDone ? 1 : -1;
        /* or
         if (!a.isDone && b.isDone){
            return -1
         }else if (!b.isDone && a.isDone){
             return 1
         }else{ return 0}
        */
    })
}
console.log('')
console.log('')
sortTodos(todos);
console.log(todos);
