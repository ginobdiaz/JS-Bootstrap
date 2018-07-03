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
