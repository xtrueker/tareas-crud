// Selección de elementos del DOM
const todoInput = document.getElementById('todo-input');
const todoTime = document.getElementById('todo-time');
const nowBtn = document.getElementById('now-btn');
const addBtn = document.getElementById('add-btn');
const themeBtn = document.getElementById('theme-btn');
const todoList = document.getElementById('todo-list');
const totalTasksEl = document.getElementById('total-tasks');
const completedTasksEl = document.getElementById('completed-tasks');
const pendingTasksEl = document.getElementById('pending-tasks');

// Estado de la aplicación
let todos = [];

// Inicialización
window.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    loadTheme();
    renderTodos();
    addEventListeners();
});

// Eventos
function addEventListeners() {
    addBtn.addEventListener('click', addTodo);
    nowBtn.addEventListener('click', setCurrentTime);
    themeBtn.addEventListener('click', toggleTheme);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });
}

// Funciones CRUD
function addTodo() {
    const taskText = todoInput.value.trim();
    const taskTime = todoTime.value;

    if (!taskText) {
        alert("Por favor, escribe una tarea.");
        return;
    }

    todos.push({
        id: Date.now(),
        text: taskText,
        time: taskTime,
        completed: false
    });

    todoInput.value = "";
    todoTime.value = "";
    todoInput.focus();
    saveToLocalStorage();
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveToLocalStorage();
    renderTodos();
}

function toggleTodo(id) {
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveToLocalStorage();
    renderTodos();
}

// Renderizado
function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div class="task-content">
                <span>${todo.text}</span>
                ${todo.time ? `<small class="task-time">a las ${todo.time}</small>` : ''}
            </div>
            <div class="actions">
                <button class="complete-btn" onclick="toggleTodo(${todo.id})" title="Completar">✔️</button>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})" title="Eliminar">🗑️</button>
            </div>
        `;
        todoList.appendChild(li);
    });
    updateStats();
}

function updateStats() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    totalTasksEl.textContent = total;
    completedTasksEl.textContent = completed;
    pendingTasksEl.textContent = total - completed;
}

// Utilidades
function setCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    todoTime.value = `${hours}:${minutes}`;
}

// Persistencia (localStorage)
function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('todos');
    todos = saved ? JSON.parse(saved) : [];
}

// Tema oscuro/claro
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeBtn();
}

function updateThemeBtn() {
    const isDark = document.body.classList.contains('dark-mode');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
    }
    updateThemeBtn();
}
