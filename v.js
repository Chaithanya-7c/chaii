// Get elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // Create new task item
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete" onclick="deleteTask(this)">Delete</button>
  `;
  
  // Add click event for completing task
  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Append new task to the list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}

// Delete a task
function deleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}
