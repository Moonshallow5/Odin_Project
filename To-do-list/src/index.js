import './styles.css'

const submitBtn = document.querySelector('.submit-btn');
const todoList=document.createElement('div')
todoList.classList.add('todoList')
document.body.appendChild(todoList)
let editingIndex=null

// Open dialog
document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.querySelector('dialog');

   
  const addButton = document.createElement('button');
  addButton.textContent = '+';

  addButton.addEventListener('click', () => {

    editingIndex = null; // Reset editing index when adding a new to-do
    clearDialogInputs(); // Clear inputs
    dialog.showModal();
  })

  document.body.prepend(addButton);


  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const todo = {
      title: document.getElementById('todo').value,
      description: document.getElementById('desc').value,
      priority: document.getElementById('priority').value,
      dueDate: document.getElementById('date').value,
    };
    if (editingIndex !== null) {
        updateTodoInLocalStorage(todo, editingIndex);
      } else {
        saveTodoToLocalStorage(todo);
      }
  
    displayTodos();
    dialog.close();
  });
});

function clearDialogInputs() {
    document.getElementById('todo').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('date').value = '';
  }



  function saveTodoToLocalStorage(todo) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function updateTodoInLocalStorage(todo, index) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos[index] = todo;
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function displayTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.innerHTML=''
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todoItem')
        todoItem.innerHTML = 
        `<h3>${todo.title}</h3>
          <p>${todo.description}</p>

          <p>Priority: ${todo.priority}</p>
        <p>Due: ${todo.dueDate}</p>
          
          `
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', () => deleteTodo(index));

          const editButton = document.createElement('button');
          editButton.textContent = 'Edit';
          editButton.addEventListener('click', () => editTodo(index));
      
          // Append the delete button to each to-do item
          todoItem.appendChild(deleteButton);

          todoItem.appendChild(editButton)
      
          // Append the item to the todoList container
          todoList.appendChild(todoItem);
      });
    
  }

  function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos(); // Refresh the displayed list after deletion
  }

  function editTodo(index) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    const todo = todos[index];
  
    // Populate the dialog with the to-do details
    document.getElementById('todo').value = todo.title;
    document.getElementById('desc').value = todo.description;
    document.getElementById('priority').value = todo.priority;
    document.getElementById('date').value = todo.dueDate;
  
    editingIndex = index; // Set the index of the item being edited
  
    // Open the dialog
    document.querySelector('dialog').showModal();
  }

