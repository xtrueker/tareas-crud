# Documentación Final del Proyecto
## Sistema de Gestión de Tareas (To-Do List)

**Repositorio:** https://github.com/xtrueker/tareas-crud  
**Fecha de desarrollo:** 17 de abril de 2026  
**Tecnologías utilizadas:** HTML5, CSS3, JavaScript (Vanilla)

---

## 1. Descripción General

Este proyecto consiste en una aplicación web que permite al usuario gestionar sus tareas diarias mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Fue desarrollado de forma colaborativa por un equipo de tres integrantes, utilizando Git y GitHub como herramientas centrales del flujo de trabajo.

El objetivo principal no fue construir un producto complejo, sino practicar y demostrar el dominio del proceso de desarrollo colaborativo: manejo de ramas, commits descriptivos, sincronización remota, revisión de código y fusión de cambios.

---

## 2. Integrantes del Equipo y Contribuciones

| Integrante | Commits | Rol dentro del proyecto |
|---|---|---|
| **Andres Guillen** | 3 | Líder del repositorio. Creó la estructura inicial del proyecto, implementó la lógica base para crear tareas y gestionó la integración del primer Pull Request. |
| **manolof1589** | 4 | Desarrollador de funcionalidades de interfaz. Implementó el sistema de hora en las tareas, rediseñó el formulario con categorías y chips visuales, optimizó el modo oscuro y agregó el panel de estadísticas. |
| **rojasdeiver23-glitch** | 2 | Desarrollador de funcionalidades avanzadas. Integró la persistencia con localStorage, el sistema de edición mediante modales, la confirmación de eliminación y el selector de colores personalizables. |

---

## 3. Estructura del Proyecto

El proyecto mantiene una estructura sencilla y organizada, apropiada para una aplicación de clase:

```
tareas-crud/
├── index.html      → Estructura y maquetación de la interfaz
├── style.css       → Diseño visual, responsividad y modo oscuro
├── script.js       → Lógica de la aplicación y manejo del DOM
└── .git/           → Historial de versiones del proyecto
```

- **index.html:** Contiene el formulario de entrada, la lista de tareas, el panel de estadísticas y tres ventanas modales (edición, eliminación y selección de colores).
- **style.css:** Define el sistema de diseño completo, incluyendo variables CSS, estilos por categoría, animaciones, diseño responsivo y modo oscuro.
- **script.js:** Gestiona todo el comportamiento dinámico: operaciones CRUD sobre un arreglo de objetos, persistencia en localStorage, cambio de tema y personalización de colores.

---

## 4. Funcionalidades Implementadas

### 4.1 Crear Tarea
El usuario escribe el nombre de la tarea, selecciona una categoría (Trabajo, Estudio o Hobbie) y opcionalmente marca si es importante o si puede esperar. Al presionar "Agregar" o la tecla Enter, la tarea se almacena en un arreglo de objetos y se guarda en el navegador mediante localStorage.

### 4.2 Listar Tareas
Cada vez que el arreglo de tareas cambia, la función `renderTodos()` reconstruye la lista completa en el DOM. Cada tarea muestra su categoría con un indicador visual de color, el texto descriptivo y las etiquetas de prioridad correspondientes.

### 4.3 Marcar como Completada
Al presionar el botón de completar en cualquier tarea, la función `toggleTodo()` utiliza el método `.map()` para generar una nueva versión del arreglo donde la propiedad `completed` de esa tarea se invierte. La interfaz refleja el cambio aplicando un estilo de texto tachado y reduciendo la opacidad del elemento.

### 4.4 Editar Tarea
Al presionar el botón de edición, se abre una ventana modal precargada con los datos actuales de la tarea. El usuario puede modificar el texto, la categoría y las etiquetas de prioridad. Al guardar, los cambios se aplican al arreglo y se persisten en localStorage.

### 4.5 Eliminar Tarea
Al presionar el botón de eliminar, se muestra una ventana de confirmación para evitar borrados accidentales. Si el usuario confirma, la tarea se remueve del arreglo mediante el método `.filter()` y la vista se actualiza.

### 4.6 Funcionalidades Adicionales
- **Persistencia de datos:** Las tareas se guardan automáticamente en el almacenamiento local del navegador (localStorage), lo que permite recuperarlas al recargar la página.
- **Modo oscuro:** El usuario puede alternar entre tema claro y oscuro. La preferencia se guarda en localStorage.
- **Selector de colores:** Permite cambiar el color principal de la interfaz entre seis opciones predefinidas. La selección también se persiste en el navegador.
- **Panel de estadísticas:** Muestra en tiempo real la cantidad total de tareas, las completadas y el porcentaje de progreso.
- **Diseño responsivo:** La interfaz se adapta correctamente a pantallas de escritorio y dispositivos móviles.

---

## 5. Flujo de Trabajo con Git

### 5.1 Estrategia de Ramas

El equipo utilizó una estrategia de ramas por funcionalidad (Feature Branch Workflow), donde cada nueva característica se desarrolló en una rama independiente antes de integrarse a la rama principal.

```
main ─────────────────────────────────────────────────────►
  │                            ▲              ▲
  │                            │ (merge PR)   │
  └── feature-crear-tarea ─────┘              │
  │                                           │
  └── feature-listar-tareas ──────────────────┘
```

**Ramas utilizadas:**
- `main` — Rama principal con el código estable y funcional.
- `feature-crear-tarea` — Desarrollo de la lógica inicial para agregar tareas al arreglo.
- `feature-listar-tareas` — Rediseño de la interfaz, sistema de categorías y funcionalidad de hora.

### 5.2 Historial Completo de Commits

A continuación se presenta la línea de tiempo completa del proyecto, ordenada cronológicamente:

| # | Hash | Autor | Hora | Descripción |
|---|---|---|---|---|
| 1 | `da97bb9` | Andres Guillen | 20:05 | chore: estructura inicial del proyecto |
| 2 | `06fc650` | Andres Guillen | 20:25 | feat: agregar función para crear tareas |
| 3 | `9f8b760` | manolof1589 | 20:39 | Agregar funcionalidad de hora a las tareas con botón 'Ahora' |
| 4 | `8e1f292` | Andres Guillen | 20:42 | Merge pull request #1 from xtrueker/feature-crear-tarea |
| 5 | `97c2760` | manolof1589 | 21:10 | Optimizar código, arreglar dark mode y agregar estadísticas |
| 6 | `ce35f61` | manolof1589 | 21:13 | Restaurar categorización y agregar funcionalidad de hora |
| 7 | `0d6e544` | manolof1589 | 21:17 | Rediseñar UI: formulario limpio e intuitivo con chips de categoría |
| 8 | `283b5a9` | rojasdeiver23-glitch | 20:59 | Agregar mejoras premium: localStorage, editar tareas, modo oscuro y estadísticas |
| 9 | `4f8e2bc` | rojasdeiver23-glitch | 21:25 | Agregar confirmación de eliminación y selector de colores personalizables |

### 5.3 Comandos Git Utilizados Durante el Proyecto

| Comando | Propósito |
|---|---|
| `git init` | Inicializar el repositorio local |
| `git remote add origin <url>` | Vincular el repositorio local con GitHub |
| `git checkout -b <rama>` | Crear y cambiar a una nueva rama de trabajo |
| `git add .` | Preparar los archivos modificados para el commit |
| `git commit -m "mensaje"` | Registrar los cambios con un mensaje descriptivo |
| `git push origin <rama>` | Subir los cambios al repositorio remoto |
| `git fetch --all` | Descargar la información de cambios remotos sin modificar archivos locales |
| `git pull origin main` | Descargar y fusionar los cambios de la rama principal |
| `git checkout <rama>` | Cambiar entre ramas existentes |
| `git log --graph --oneline --all` | Visualizar el historial de commits en forma de árbol |

---

## 6. Proceso de Integración (Pull Requests y Merge)

El proyecto utilizó la funcionalidad de Pull Requests de GitHub para integrar los cambios de forma controlada:

1. **Creación del PR:** El desarrollador que terminaba su funcionalidad creaba un Pull Request desde su rama hacia `main`, describiendo los cambios realizados.
2. **Revisión:** Un compañero del equipo revisaba el código propuesto, verificando que no hubiera errores y que el estilo fuera consistente.
3. **Aprobación y Merge:** Una vez aprobado, el líder del repositorio realizaba la fusión (merge) hacia la rama principal.
4. **Verificación:** Después de cada merge, el equipo verificaba que la aplicación siguiera funcionando correctamente.

Se puede confirmar este proceso mediante el commit `8e1f292`, que corresponde al Merge del Pull Request #1.

---

## 7. Explicación Técnica del Código

### 7.1 Modelo de Datos

Cada tarea se representa como un objeto dentro de un arreglo llamado `todos`:

```javascript
{
    id: 1713398400000,       // Identificador único generado con Date.now()
    text: "Estudiar para el examen",
    completed: false,
    category: "estudio",     // Valores posibles: "trabajo", "estudio", "hobbie"
    important: true,
    canWait: false
}
```

### 7.2 Ciclo de Vida de una Tarea

```
[Usuario escribe tarea] → addTodo() → todos.push(newTodo) → saveToLocalStorage()
                                                           → renderTodos()
                                                           → updateStats()
```

Todas las operaciones (crear, editar, completar, eliminar) siguen el mismo patrón: modifican el arreglo `todos`, guardan en localStorage, reconstruyen la vista y actualizan las estadísticas.

### 7.3 Persistencia

La aplicación utiliza la API `localStorage` del navegador para almacenar las tareas, el tema visual y el color seleccionado. Esto permite que los datos sobrevivan al cierre del navegador sin necesidad de un servidor o base de datos externa.

```javascript
// Guardar
localStorage.setItem('todos', JSON.stringify(todos));

// Cargar
const saved = localStorage.getItem('todos');
todos = JSON.parse(saved);
```

---

## 8. Verificación de Objetivos

| Objetivo | Estado | Evidencia |
|---|---|---|
| Crear repositorio en GitHub | ✅ | Repositorio activo en github.com/xtrueker/tareas-crud |
| Agregar colaboradores | ✅ | 3 autores distintos en el historial de commits |
| Clonar repositorio en cada equipo | ✅ | Conexión remota verificada con `git remote -v` |
| Definir estructura de carpetas | ✅ | Commit `da97bb9` con archivos base |
| Crear ramas por funcionalidad | ✅ | Ramas `feature-crear-tarea` y `feature-listar-tareas` |
| Realizar múltiples commits | ✅ | 9 commits totales con mensajes descriptivos |
| Subir cambios (push) | ✅ | Todos los commits están sincronizados en GitHub |
| Traer cambios (pull) | ✅ | Se realizó `git pull origin main` para descargar aportes |
| Crear Pull Request | ✅ | PR #1 registrado y fusionado |
| Revisión de código | ✅ | PR fue revisado antes de ser aprobado |
| Merge de cambios | ✅ | Commit de merge `8e1f292` en la rama principal |
| Proyecto funcional | ✅ | CRUD completo con funcionalidades adicionales |

---

## 9. Conclusiones

Este proyecto cumplió con su objetivo principal: demostrar el proceso de desarrollo colaborativo utilizando Git y GitHub. El equipo logró:

- Trabajar de forma simultánea sin generar conflictos gracias al uso de ramas independientes.
- Mantener un historial de cambios limpio y rastreable mediante commits con mensajes descriptivos.
- Integrar código de forma controlada utilizando Pull Requests con revisión previa.
- Construir una aplicación funcional que supera los requisitos básicos del CRUD, incorporando persistencia de datos, personalización visual y diseño responsivo.

El resultado demuestra que un flujo de trabajo organizado no solo facilita la colaboración, sino que también permite escalar un proyecto de forma ordenada sin comprometer la estabilidad del código existente.
