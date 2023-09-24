document.addEventListener("DOMContentLoaded", function() {
    // Obtener la tabla y su cuerpo
    document.getElementById("tabla-preguntas");
    const tbody = document.getElementById("respuestas");

    // Cargar el archivo JSON de preguntas
    fetch("../data/preguntas.json")
        .then(response => response.json())
        .then(data => {
            // Iterar a través de las preguntas y agregar filas a la tabla
            data.forEach(function(pregunta) {
                let fila = document.createElement("tr");
                fila.innerHTML = `
                    <td id="td-pregunta">${pregunta.pregunta}</td>
                    <td>${pregunta.respuesta_empresarial}</td>
                    <td>${pregunta.respuesta_academico}</td>
                    <td>${pregunta.respuesta_personal}</td>
                `;
                tbody.appendChild(fila);
            });
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
});
