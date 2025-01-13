const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');


addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {

        const taskItem = document.createElement('li');


        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskItem.appendChild(taskContent);


        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');

        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        taskButtons.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        taskButtons.appendChild(deleteButton);

        taskItem.appendChild(taskButtons);


        taskList.appendChild(taskItem);


        taskInput.value = "";


        editButton.addEventListener('click', () => {
            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.value = taskContent.textContent;


            taskItem.replaceChild(newInput, taskContent);

            const saveButton = document.createElement('button');
            saveButton.textContent = "Save";
            taskButtons.appendChild(saveButton);


            saveButton.addEventListener('click', () => {
                taskContent.textContent = newInput.value;
                taskItem.replaceChild(taskContent, newInput);
                taskButtons.removeChild(saveButton);
            });
        });


        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});


clearButton.addEventListener('click', () => {
    taskList.innerHTML = "";
});
