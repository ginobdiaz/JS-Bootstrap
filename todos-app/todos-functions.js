const loadTodos = function(){
    // Check for existing saved data
    const todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    }else{
        return [];
    }

}

const resetTodoInput = function () {
    document.querySelector('#focus-todo').value = '';
    document.querySelector('#edit-done').checked = false;
    document.querySelector('#submit-todo').innerHTML = 'Add Todo';
}

const renderTodos = function (todos, filters) {
    let filterTodos = todos.filter(function (todo) {
        /*         if (filters.searchText === ''){
                    return todos;
                }else{ */
        return todo.todo.toLowerCase().includes(filters.searchText.toLowerCase());
        //}
    });

//debugger  //pauses pgm

    filterTodos = filterTodos.filter(function (todo) {
        return !filters.hideCompleted || !todo.isDone;
    });

    document.querySelector('#todo-list').innerHTML = '';
    if (filterTodos.length === 1) {
        replaceTodo.wasText = filterTodos[0].todo  //todo.todo;        
        document.querySelector('#focus-todo').value = filterTodos[0].todo  //todo.todo;        
        document.querySelector('#edit-done').checked = filterTodos[0].isDone;
        document.querySelector('#submit-todo').innerHTML = 'Update Todo';
    } else {
        resetTodoInput();
    }
    filterTodos.forEach(function (todo) {
        const todoEl = document.createElement('div');

        //remove button
        const btnDelEl = document.createElement('button');
        btnDelEl.textContent = 'X';
        todoEl.appendChild(btnDelEl);

        //todo box 
        const textEl = document.createElement('span');
        textEl.textContent = todo.todo.concat((todo.isDone) ? ' *' : '');
        todoEl.appendChild(textEl);

        //check box 
        const chkbxEl = document.createElement('input');
        chkbxEl.setAttribute('type', 'checkbox');
        chkbxEl.checked = todo.isDone;
        todoEl.appendChild(chkbxEl);


        /*if (filters.hideCompleted){
              if (!todo.isDone)
                todoEl.textContent = todo.todo
          } else {
              todoEl.textContent = todo.todo.concat((todo.isDone) ? ' *' : '');
          } */
        document.querySelector('#todo-list').appendChild(todoEl);
    })
    document.querySelector('#count-todos').innerHTML = `There ${(filterTodos.length > 1) ? 'are' : 'is'} ${filterTodos.length} ${(filterTodos.length > 1) ? 'todos' : 'todo'}.`
} 

const editReplaceTodo = function (todos, replaceTodo) {

    const toReplaceIdx = todos.findIndex(function (todo) {
        return todo.todo.toLowerCase() === replaceTodo.wasText.toLowerCase()
    });
    todos[toReplaceIdx].todo = replaceTodo.replaceText;
    todos[toReplaceIdx].isDone = replaceTodo.isDone;
    document.querySelector('#todo-list').innerHTML = '';
    document.querySelector('#search-todo').value = '';
    filters.searchText = '';

    renderTodos(todos, filters);

    localStorage.setItem('todos', JSON.stringify(todos));
}

const addReplaceTodo = function (todos, replaceTodo) {
    const newTodo = { id: uuidv4(), todo: replaceTodo.replaceText, isDone: replaceTodo.isDone }
    todos.push(newTodo);
    filters.searchText = '';
    document.querySelector('#focus-todo').value = '';
    renderTodos(todos, filters);

    localStorage.setItem('todos', JSON.stringify(todos));

}
