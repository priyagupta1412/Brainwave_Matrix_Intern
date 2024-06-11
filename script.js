document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(task) {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.textContent = task;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(removeBtn);
        todoList.appendChild(todoItem);
    }
});
