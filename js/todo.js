document.addEventListener('DOMContentLoaded', function() {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = '';
  });

  function addTodo(task) {
    const li = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', function(){
      if(checkBox.checked) {
        span.classList.add('completed');
      }else {
        span.classList.remove('completed');
      }
    });

    const span = document.createElement('span');
    span.textContent = task;
    span.className = 'task-content';


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
      todoList.removeChild(li);
    });

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }
});
