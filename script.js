// 1. Selección de elementos del DOM
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 2. Estado de la aplicación (Arreglo de tareas)
let todos = [];

// 3. Función para agregar una tarea
function addTodo() {
    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    todos.push(newTodo);
    todoInput.value = "";
    todoInput.focus();

    // Actualizar la vista
    renderTodos();
}

// 4. Función para renderizar la lista de tareas
function renderTodos() {
    // Limpiar la lista actual
    todoList.innerHTML = "";

    // Recorrer el arreglo y crear los elementos
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        
        // Estructura interna del item
        li.innerHTML = `
            <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <div class="actions">
                <button class="complete-btn" onclick="toggleTodo(${todo.id})">✔️</button>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})">🗑️</button>
            </div>
        `;

        todoList.appendChild(li);
    });
}

// 5. Función para alternar el estado de completado
function toggleTodo(id) {
    // Buscamos la tarea por su ID y cambiamos el valor de 'completed'
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });

    // Actualizamos la vista para reflejar el cambio
    renderTodos();
}

// 4. Event Listeners
addBtn.addEventListener('click', addTodo);

// También permitir agregar con la tecla Enter
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
