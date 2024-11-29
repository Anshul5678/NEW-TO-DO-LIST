document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');


    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
  
    function addTask() {                                         
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            span>${taskText}</span>
            <button class="completeButton">Complete</button>
            <button class="deleteButton">Delete</button>
        `;
      

        taskList.appendChild(taskItem);
        taskInput.value = '';

        const completeButton = taskItem.querySelector('.completeButton');
        const deleteButton = taskItem.querySelector('.deleteButton');

        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});
