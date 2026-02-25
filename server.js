// Get elements from the HTML
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item (li) element
    const li = document.createElement('li');

    // Create a span element to hold the task text
    const span = document.createElement('span');
    span.textContent = taskText;
    
    // Add a click event to the span to toggle the 'completed' class
    span.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    
    // Add a click event to remove the task
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    // Put the span and delete button inside the li element
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Put the li element into the unordered list (ul)
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Listen for a click on the "Add" button
addBtn.addEventListener('click', addTask);

// Listen for the "Enter" key in the input field
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});