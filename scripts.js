document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    todoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            deleteTodoItem(event.target.parentElement);
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

    function deleteTodoItem(todoItem) {
        todoList.removeChild(todoItem);
    }
});
