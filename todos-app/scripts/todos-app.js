'use strict'

// DOM - Document Object Model

/* const todos = [{
    todo: 'Order cat food',
    isDone: false
},
{
    todo: 'Clean kitchen',
    isDone: true
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
 */
// 1. Delete dummy data
// 2. Read and parse the data when the app starts up
// 3. Stringify and write the data when new data is added
let todos = loadTodos();


/*
const h2 = document.querySelector('h2');
let cnt = 0;
todos.forEach(function (todo){
    let newPar = document.createElement('p')
    if (!todo.isDone){
        newPar.textContent = todo.todo;
        cnt++;
        document.querySelector('body').appendChild(newPar);
    }
})

h2.textContent = `You have ${cnt} todos left`;
*/

/* document.querySelector('#add-todo').addEventListener('click', function(e){
    console.log('Adding a new TODO')
}); */

/*document.querySelector('#new-todo').addEventListener('input', function(e){
    console.log(e.target.value)
});*/

// 1. Setup a div contain for todos
// 2. Setup filters (searchText) and wire up a new filter input to change it
// 3. Create a renderTodos function to render and rerender the latest filtered data
const filters = {
    searchText: '',
    hideCompleted: false
}
const replaceTodo = {
    wasText: '',
    replaceText: '',
    isDone: false
}


//const focusOnTodo = function 
document.querySelector('#replace-todo').value = '';
renderTodos(todos, filters);

document.querySelector('#search-todo').addEventListener('input', (e)=>{
        filters.searchText = e.target.value.trim();
        document.querySelector('#replace-todo').value = '';
        renderTodos(todos, filters);
});

document.querySelector('#replace-todo').addEventListener('input', (e)=> {
    replaceTodo.replaceText = e.target.value;
});

document.querySelector('#focus-todo').addEventListener('input', (e)=> {
    if (e.target.value.length === 0) resetTodoInput();
});
/* document.querySelector('#submit-todo').addEventListener('click', function (e) {
    editReplaceTodo(todos, replaceTodo);
}) */

document.querySelector('#todo-form').addEventListener('submit', (e)=>{
    //prevents query type calls.
    e.preventDefault();
   
    //checks which button was run
    const isAdd = (document.querySelector('#submit-todo').innerHTML.toLowerCase().includes('update')) ? false : true;
    replaceTodo.replaceText = document.querySelector('#focus-todo').value.trim();
    replaceTodo.isDone = document.querySelector('#edit-done').checked;
    if (isAdd){
        if (replaceTodo.replaceText === undefined || replaceTodo.replaceText.length === 0){
            alert('You must input a To-Do item!')
            return;
        }
        addReplaceTodo(todos, replaceTodo);
    }else{
        editReplaceTodo(todos, replaceTodo)
    }
});

document.querySelector('#still-todo').addEventListener('change', (e)=>{
    filters.hideCompleted =  e.target.checked;   //document.querySelector('#still-todo').checked;
    renderTodos(todos, filters);
});
/* 
const ps = document.querySelectorAll('p')
ps.forEach(function (p){
    //p.remove();
    //console.log(p.textContent)
    if (p.textContent.includes(' the '))
        p.remove();
}) */

// 1. Create a form with a single input for todo text
// 2. Setup an submit handler and cancel the default action
// 3. Add a new item to the todos array with that text data (completed value of false)
// 4. Rerender the application
// 5. Clear the input field value
//-------------------------------------------------------------
// 1. Create a checkbox and setup event listener ->"Hide completed"
// 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted an rerender list on checkbox change
// 4.  Setup renderTodos to remove completed items