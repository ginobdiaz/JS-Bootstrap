'use strict'

const loadTodos = ()=>{
    // Check for existing saved data
    const todosJSON = localStorage.getItem('todos');
    try 
    {
        return (todosJSON !== null) ? JSON.parse(todosJSON) : [];
    } catch (e){
        return [];
    }
}

const resetTodoInput = ()=> {
    document.querySelector('#focus-todo').value = '';
    document.querySelector('#edit-done').checked = false;
    document.querySelector('#submit-todo').innerHTML = 'Add Todo';
}

const renderTodos = (todos, filters) => {
    let filterTodos = todos.filter(function (todo) {
        /*         if (filters.searchText === ''){
                    return todos;
                }else{ */
        return todo.todo.toLowerCase().includes(filters.searchText.toLowerCase());
        //}
    });

//debugger  //pauses pgm

    filterTodos = filterTodos.filter( 
        (todo) => !filters.hideCompleted || !todo.isDone
    );

    document.querySelector('#todo-list').innerHTML = '';
    const statusMsgEL = document.querySelector('#count-todos')
    statusMsgEL.classList.add('list-title')
    statusMsgEL.innerHTML = `There ${(filterTodos.length > 1) ? 'are' : 'is'} ${filterTodos.length} ${(filterTodos.length > 1) ? 'todos' : 'todo'}.`

    if (filterTodos.length === 1) {
        replaceTodo.wasText = filterTodos[0].todo  //todo.todo;        
        document.querySelector('#focus-todo').value = filterTodos[0].todo  //todo.todo;        
        document.querySelector('#edit-done').checked = filterTodos[0].isDone;
        document.querySelector('#submit-todo').innerHTML = 'Update Todo';
    } else if (filterTodos.length === 0 ) {
        const emptyEL = document.createElement('p')
        emptyEL.textContent = 'There are no TO-DO\'s. Click on add button to create one.'
        document.querySelector('#todo-list').appendChild(emptyEL);
        resetTodoInput();
        return;
    }

    filterTodos.forEach( (todo) => {
        const todoEl = document.createElement('label');
        const containerEl = document.createElement('div');

        //check box 
        const chkbxEl = document.createElement('input');
        chkbxEl.setAttribute('type', 'checkbox');
        chkbxEl.checked = todo.isDone;
        containerEl.appendChild(chkbxEl);
        chkbxEl.addEventListener('change', () =>{
            checkDoneTodo(todo.id);
            saveTodos(todos);
            renderTodos(todos, filters);
        });

        //todo text box 
        const textEl = document.createElement('span');
        textEl.textContent = todo.todo.concat((todo.isDone) ? ' *' : '');
        containerEl.appendChild(textEl);

        //setup container
        todoEl.classList.add('list-item')
        containerEl.classList.add('list-item__container')
        todoEl.appendChild(containerEl)

        //remove button
        const btnDelEl = document.createElement('button');
        btnDelEl.textContent = 'remove';
        btnDelEl.classList.add('button','button--text')
        todoEl.appendChild(btnDelEl);
        btnDelEl.addEventListener('click', ()=>{
            removeTodo(todo.id);
            saveTodos(todos);
            renderTodos(todos, filters);
        })

        /*if (filters.hideCompleted){
              if (!todo.isDone)
                todoEl.textContent = todo.todo
          } else {
              todoEl.textContent = todo.todo.concat((todo.isDone) ? ' *' : '');
          } */
        document.querySelector('#todo-list').appendChild(todoEl);
    })
} 

const editReplaceTodo =  (todos, replaceTodo)=> {

    const toReplaceIdx = todos.findIndex( 
        (todo) => todo.todo.toLowerCase() === replaceTodo.wasText.toLowerCase()
    );
    todos[toReplaceIdx].todo = replaceTodo.replaceText;
    todos[toReplaceIdx].isDone = replaceTodo.isDone;
    document.querySelector('#todo-list').innerHTML = '';
    document.querySelector('#search-todo').value = '';
    filters.searchText = '';

    renderTodos(todos, filters);

    saveTodos(todos);
}

const addReplaceTodo = (todos, replaceTodo) =>{
    const newTodo = { id: uuidv4(), todo: replaceTodo.replaceText.trim(), isDone: replaceTodo.isDone }
    todos.push(newTodo);
    filters.searchText = '';
    document.querySelector('#focus-todo').value = '';
    renderTodos(todos, filters);

    //localStorage.setItem('todos', JSON.stringify(todos));
    saveTodos(todos);

}

// Remove a todo
const removeTodo = (id)=>{
    const byeIndex = todos.findIndex((todo)=> todo.id === id)

    if (byeIndex > -1){
        todos.splice(byeIndex,1);
    }
}
// Check and uncheck a todo
const checkDoneTodo = (id)=>{
    const byeIndex = todos.findIndex((todo)=> todo.id === id)

    if (byeIndex > -1){
        todos[byeIndex].isDone = !todos[byeIndex].isDone;
    }
}
// Saving todos one to do at a time
const saveTodos =  (todos)=> localStorage.setItem('todos',JSON.stringify(todos))

