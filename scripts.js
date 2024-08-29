document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript cargado correctamente");

    const academicTaskList = document.getElementById("academicHistory");
    const skillTaskList = document.getElementById("skills");
    let selectedTask = null;

    function handleTaskClick(event) {
        console.log("Tarea clickeada:", event.currentTarget.textContent);
        if (selectedTask) {
            selectedTask.classList.remove("selected");
        }

        selectedTask = event.currentTarget;
        selectedTask.classList.add("selected");
    }

    // Funcionalidad para "Historial Académico"
    document.getElementById("addTask").addEventListener("click", () => {
        const textoTarea = prompt("Ingrese el contenido a guardar");
        if (textoTarea && textoTarea.trim() !== "") {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = textoTarea;
            nuevaTarea.addEventListener("click", handleTaskClick);
            academicTaskList.appendChild(nuevaTarea);
        } else {
            alert("El contenido no puede estar vacío.");
        }
    });

    document.getElementById("deleteTask").addEventListener("click", () => {
        if (selectedTask && selectedTask.parentNode === academicTaskList) {
            academicTaskList.removeChild(selectedTask);
            selectedTask = null;
        } else {
            alert("No ha seleccionado ningún contenido de 'Historial Académico' para eliminar");
        }
    });

    document.getElementById("editTask").addEventListener("click", () => {
        if (selectedTask && selectedTask.parentNode === academicTaskList) {
            const nuevoTexto = prompt("Modificar la tarea", selectedTask.textContent);
            if (nuevoTexto && nuevoTexto.trim() !== "") {
                selectedTask.textContent = nuevoTexto;
            } else {
                alert("El contenido no puede estar vacío.");
            }
        } else {
            alert("Seleccione algo de 'Historial Académico' para modificar");
        }
    });

    // Funcionalidad para "Habilidades (Skills)"
    document.getElementById("addTask1").addEventListener("click", () => {
        const textoTarea = prompt("Ingrese el contenido a guardar");
        if (textoTarea && textoTarea.trim() !== "") {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = textoTarea;
            nuevaTarea.addEventListener("click", handleTaskClick);
            skillTaskList.appendChild(nuevaTarea);
        } else {
            alert("El contenido no puede estar vacío.");
        }
    });

    document.getElementById("deleteTask1").addEventListener("click", () => {
        if (selectedTask && selectedTask.parentNode === skillTaskList) {
            skillTaskList.removeChild(selectedTask);
            selectedTask = null;
        } else {
            alert("No ha seleccionado ningún contenido de 'Habilidades' para eliminar");
        }
    });

    document.getElementById("editTask1").addEventListener("click", () => {
        if (selectedTask && selectedTask.parentNode === skillTaskList) {
            const nuevoTexto = prompt("Modificar la tarea", selectedTask.textContent);
            if (nuevoTexto && nuevoTexto.trim() !== "") {
                selectedTask.textContent = nuevoTexto;
            } else {
                alert("El contenido no puede estar vacío.");
            }
        } else {
            alert("Seleccione algo de 'Habilidades' para modificar");
        }
    });

});
