const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

window.addEventListener('load', loadTask);

addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value.trim());
        taskInput.value = '';
    } else {
        alert('Task cannot be empty.');
    }
});

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    taskList.innerHTML = '';
});

function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('#taskList li')).map(li => li.firstChild.textContent.trim());
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(task) {
    const li = document.createElement('li');
    const removeBtn = document.createElement('button');

    li.textContent = task;
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        li.remove();
        saveTasks();
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    saveTasks();
}

function loadTask() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task));
}