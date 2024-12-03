const addNewTaskButton = document.getElementById('new-task');
const taskDescription = document.querySelector('.task-description');
const tasksList = document.getElementById('task-list__list');
const removeTaskButton = document.querySelector('.task-list__item__btn-remove');
const doneTaskButton = document.querySelector('.task-list__item__btn-done');

let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
};

tasks.forEach(function (task) {
    const cssClass = task.done ? 'task-list__item task-list__item_done' : 'task-list__item'

    let taskHTML = document.createElement('li');
    taskHTML.className = cssClass;
    taskHTML.id = task.id;
    taskHTML.innerHTML = `<button type="button" data-action="remove" class="task-list__item__btn task-list__item__btn-remove">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="#363636"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#363636"/>
                            </svg>            
                        </button>
                        <button type="button" data-action="done" class="task-list__item__btn task-list__item__btn-done">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="#363636"/>
                            </svg>
                        </button>
                        <div>
                            <input value="${task.title}" type="text" class="task-title task-input" placeholder="Введите название задачи" onchange="changeTaskTitle(event)" />
                            <input value="${task.description}" type="text" class="task-description task-input" placeholder="Введите описание задачи" onchange="changeTaskDescription(event)" />
                        </div>`;

    let ul = document.getElementById('task-list__list');
    ul.append(taskHTML);
});

const saveToLS = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addNewTask = () => {
    // описываем задачу в виде объекта
    const newTaskObj = {
        id: Date.now(),
        done: false,
        title: "",
        description: "",
    };

    // добавляем задачу в массив задачами
    tasks.push(newTaskObj);

    saveToLS();

    const cssClass = newTaskObj.done ? 'task-list__item task-list__item_done' : 'task-list__item'

    let newTask = document.createElement('li');
    newTask.className = cssClass;
    newTask.id = newTaskObj.id;
    newTask.innerHTML = `<button type="button" data-action="remove" class="task-list__item__btn task-list__item__btn-remove">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="#363636"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#363636"/>
                            </svg>            
                        </button>
                        <button type="button" data-action="done" class="task-list__item__btn task-list__item__btn-done">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="#363636"/>
                            </svg>
                        </button>
                        <div>
                            <input type="text" class="task-title task-input" placeholder="Введите название задачи" onchange="changeTaskTitle(event)" />
                            <input type="text" class="task-description task-input" placeholder="Введите описание задачи" onchange="changeTaskDescription(event)" />
                        </div>`;

    let ul = document.getElementById('task-list__list');
    ul.append(newTask);
};

const changeTaskTitle = (event) => {
    const parentNode = event.target.closest('li');
    const taskTitle = parentNode.querySelector('.task-title');

    const id = Number(parentNode.id);

    const task = tasks.find((task) => task.id === id);

    task.title = taskTitle.value;

    saveToLS();
};

const changeTaskDescription = (event) => {
    const parentNode = event.target.closest('li');
    const taskDescription = parentNode.querySelector('.task-description');

    const id = Number(parentNode.id);    

    const task = tasks.find((task) => task.id === id);

    task.description = taskDescription.value;

    saveToLS();
};

const removeTask = (event) => {
    if (event.target.dataset.action === 'remove') {
        const parentNode = event.target.closest('li');
        const id = Number(parentNode.id);

        // удаляем через поиск индекса
        // const index = tasks.findIndex((task) => task.id === id);
        // tasks.splice(index, 1);

        // фильтруем массив
        tasks = tasks.filter((task) => task.id !== id);

        saveToLS();

        parentNode.remove();
    };
};

const doneTask = (event) => {
    if (event.target.dataset.action === 'done') {
        const parentNode = event.target.closest('li');

        const id = Number(parentNode.id);

        const task = tasks.find((task) => task.id === id);
        task.done = !task.done;

        parentNode.classList.toggle('task-list__item_done');

        saveToLS();
    };
};

addNewTaskButton.addEventListener('click', addNewTask);
tasksList.addEventListener('click', removeTask);
tasksList.addEventListener('click', doneTask);