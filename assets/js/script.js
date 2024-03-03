const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask()
{
    const taskText = taskInput.value.trim();
    if (taskText !== '' )
    {
        const li = document.createElement('div');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';        
    }
}