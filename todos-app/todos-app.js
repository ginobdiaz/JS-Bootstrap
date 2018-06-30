// DOM - Document Object Model

const todos = [{
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
const renderTodos =  function (todos, filters){
    let filterTodos = todos.filter( function (todo){
/*         if (filters.searchText === ''){
            return todos;
        }else{ */
            return todo.todo.toLowerCase().includes(filters.searchText.toLowerCase());
        //}
    });
    
    filterTodos = filterTodos.filter(function(todo){
        return !filters.hideCompleted || !todo.isDone;
    });

    document.querySelector('#todo-list').innerHTML = '';
    if (filterTodos.length === 1) {
        replaceTodo.wasText = filterTodos[0].todo  //todo.todo;        
        document.querySelector('#focus-todo').value = filterTodos[0].todo  //todo.todo;        
        document.querySelector('#edit-done').checked = filterTodos[0].isDone;
        document.querySelector('#submit-todo').innerHTML = 'Update Todo';
    } else {
        document.querySelector('#focus-todo').value='';
        document.querySelector('#edit-done').checked=false;
        document.querySelector('#submit-todo').innerHTML = 'Add Todo';
    }
    filterTodos.forEach( function(todo){    
        const todoEl = document.createElement('p');
        todoEl.textContent = todo.todo.concat((todo.isDone) ? ' *' : '');
/*         if (filters.hideCompleted){
            if (!todo.isDone)
              todoEl.textContent = todo.todo
        } else {
            todoEl.textContent = todo.todo.concat((todo.isDone) ? ' *' : '');
        } */
        document.querySelector('#todo-list').appendChild(todoEl);
    })
} 
const editReplaceTodo = function (todos, replaceTodo) {

    const toReplaceIdx = todos.findIndex( function (todo){
        return todo.todo.toLowerCase() === replaceTodo.wasText.toLowerCase()
    });
    todos[toReplaceIdx].todo = replaceTodo.replaceText;
    todos[toReplaceIdx].isDone = replaceTodo.isDone;
    document.querySelector('#todo-list').innerHTML = '';
    document.querySelector('#search-todo').value = '';
    filters.searchText = '';
    renderTodos(todos, filters);
}

const addReplaceTodo = function (todos, replaceTodo){
    const newTodo = {todo: replaceTodo.replaceText, isDone: replaceTodo.isDone}
    todos.push(newTodo);
    filters.searchText = '';
    renderTodos(todos, filters);
}

//const focusOnTodo = function 
document.querySelector('#replace-todo').value = '';
renderTodos(todos, filters);

document.querySelector('#search-todo').addEventListener('input', function(e){
        filters.searchText = e.target.value;
        document.querySelector('#replace-todo').value = '';
        renderTodos(todos, filters);
});

document.querySelector('#replace-todo').addEventListener('input', function (e) {
        replaceTodo.replaceText = e.target.value;
});

/* document.querySelector('#submit-todo').addEventListener('click', function (e) {
    editReplaceTodo(todos, replaceTodo);
}) */

document.querySelector('#todo-form').addEventListener('submit', function(e){
    //prevents query type calls.
    e.preventDefault();
    //checks which button was run
    const isAdd = (document.querySelector('#submit-todo').innerHTML.toLowerCase().includes('update')) ? false : true;
    replaceTodo.replaceText = document.querySelector('#focus-todo').value;
    replaceTodo.isDone = document.querySelector('#edit-done').checked;
    if (isAdd){
        addReplaceTodo(todos, replaceTodo);
    }else{
        editReplaceTodo(todos, replaceTodo)
    }
});

document.querySelector('#still-todo').addEventListener('change', function(e){
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