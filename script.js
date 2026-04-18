// 1. Selección de elementos del DOM
const todoInput = document.getElementById('todo-input');
const categorySelect = document.getElementById('category-select');
const importantCheck = document.getElementById('important-check');
const canWaitCheck = document.getElementById('can-wait-check');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const themeBtn = document.getElementById('theme-btn');
const totalTasksSpan = document.getElementById('total-tasks');
const completedTasksSpan = document.getElementById('completed-tasks');
const progressPercentSpan = document.getElementById('progress-percent');

// Modal elements
const editModal = document.getElementById('edit-modal');
const closeModalBtn = document.getElementById('close-modal');
const cancelEditBtn = document.getElementById('cancel-edit');
const saveEditBtn = document.getElementById('save-edit');
const editInput = document.getElementById('edit-input');
const editCategory = document.getElementById('edit-category');
const editImportant = document.getElementById('edit-important');
const editCanWait = document.getElementById('edit-can-wait');

// 2. Estado de la aplicación
let todos = [];
let editingId = null;

// 3. Cargar datos del localStorage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('todos');
    if (saved) {
        todos = JSON.parse(saved);
        renderTodos();
        updateStats();
    }
}

// 4. Guardar datos en localStorage
function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 5. Actualizar estadísticas
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

    totalTasksSpan.textContent = total;
    completedTasksSpan.textContent = completed;
    progressPercentSpan.textContent = progress + '%';
}

// 6. Función para agregar una tarea
function addTodo() {
    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: taskText,
        completed: false,
        category: categorySelect.value,
        important: importantCheck.checked,
        canWait: canWaitCheck.checked
    };

    todos.push(newTodo);
    todoInput.value = "";
    categorySelect.value = "trabajo";
    importantCheck.checked = false;
    canWaitCheck.checked = false;
    todoInput.focus();

    saveToLocalStorage();
    renderTodos();
    updateStats();
}

// 7. Función para renderizar la lista de tareas
function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.classList.add(`category-${todo.category}`);
        
        if (todo.important) li.classList.add('important');
        if (todo.canWait) li.classList.add('can-wait');
        if (todo.completed) li.classList.add('completed');
        
        li.innerHTML = `
            <div class="task-content">
                <div class="task-info">
                    <span class="category-badge">${getCategoryEmoji(todo.category)} ${getCategoryLabel(todo.category)}</span>
                    <span class="task-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
                </div>
                <div class="task-flags">
                    ${todo.important ? '<span class="flag important-flag">⭐ Importante</span>' : ''}
                    ${todo.canWait ? '<span class="flag can-wait-flag">⏳ Puede esperar</span>' : ''}
                </div>
            </div>
            <div class="actions">
                <button class="complete-btn" onclick="toggleTodo(${todo.id})" title="Completar">✔️</button>
                <button class="edit-btn" onclick="openEditModal(${todo.id})" title="Editar">✏️</button>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})" title="Eliminar">🗑️</button>
            </div>
        `;

        todoList.appendChild(li);
    });
}

// 8. Funciones de utilidad para categorías
function getCategoryEmoji(category) {
    const emojis = { trabajo: '💼', estudio: '📚', hobbie: '🎮' };
    return emojis[category] || '📋';
}

function getCategoryLabel(category) {
    const labels = { trabajo: 'Trabajo', estudio: 'Estudio', hobbie: 'Hobbie' };
    return labels[category] || 'Categoría';
}

// 9. Funciones de edición
function openEditModal(id) {
    editingId = id;
    const todo = todos.find(t => t.id === id);
    
    editInput.value = todo.text;
    editCategory.value = todo.category;
    editImportant.checked = todo.important;
    editCanWait.checked = todo.canWait;
    
    editModal.classList.add('active');
}

function closeEditModal() {
    editModal.classList.remove('active');
    editingId = null;
}

function saveEdit() {
    const todo = todos.find(t => t.id === editingId);
    if (todo) {
        todo.text = editInput.value.trim();
        todo.category = editCategory.value;
        todo.important = editImportant.checked;
        todo.canWait = editCanWait.checked;
        
        saveToLocalStorage();
        renderTodos();
        updateStats();
        closeEditModal();
    }
}

// 10. Función para alternar estado de completado
function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });

    saveToLocalStorage();
    renderTodos();
    updateStats();
}

// 11. Función para eliminar una tarea
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveToLocalStorage();
    renderTodos();
    updateStats();
}

// 12. Función para cambiar tema
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
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeBtn();
    }
}

// 13. Event Listeners
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

themeBtn.addEventListener('click', toggleTheme);

closeModalBtn.addEventListener('click', closeEditModal);
cancelEditBtn.addEventListener('click', closeEditModal);
saveEditBtn.addEventListener('click', saveEdit);

editModal.addEventListener('click', (e) => {
    if (e.target === editModal) closeEditModal();
});

// 14. Inicialización
loadTheme();
loadFromLocalStorage();
