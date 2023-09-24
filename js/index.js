document.addEventListener("DOMContentLoaded", function () {
  // Obtener la tabla y su cuerpo
  document.getElementById("tabla-preguntas");
  const tbody = document.getElementById("respuestas");

  // Cargar el archivo JSON de preguntas
  fetch("https://raw.githubusercontent.com/JeffHC0911/requerimientosjira.github.io/main/data/preguntas.json")
    .then((response) => response.json())
    .then((data) => {
      // Iterar a través de las preguntas y agregar filas a la tabla
      data.forEach(function (pregunta) {
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
    .catch((error) => {
      console.error("Error al cargar el archivo JSON:", error);
    });


    // Obtener la tabla de los requerimientos funciones y su cuerpo
    document.getElementById("tabla-requerimientos-f");
    const tRf = document.getElementById("requerimientos-f");
    fetch("../data/requisitos_funcionales.json")
    .then((response) => response.json())
    .then((data) => {
      // Iterar a través de las preguntas y agregar filas a la tabla
      data.forEach(function (requerimiento) {
        let fila = document.createElement("tr");
        fila.innerHTML = `
                    <td id="td-seccion">${requerimiento.Seccion}</td>
                    <td id="td-requerimiento">${requerimiento.Descripcion}</td>
                    <td>${requerimiento.Tipo}</td>
                `;
        tRf.appendChild(fila);
      });
    });
    
    //Obtenemos la tabla de los requerimientos no funcionales y su cuerpo
    document.getElementById("tabla-requerimientos-nf");
    const tRnf = document.getElementById("requerimientos-nf");
    fetch("../data/requisitos_no_funcionales.json")
    .then((response) => response.json())
    .then((data) => {
      // Iterar a través de las preguntas y agregar filas a la tabla
      data.forEach(function (requerimiento) {
        let fila = document.createElement("tr");
        fila.innerHTML = `
                    <td id="td-seccion">${requerimiento.Seccion}</td>
                    <td id="td-requerimiento">${requerimiento.Descripcion}</td>
                    <td>${requerimiento.Tipo}</td>
                `;
        tRnf.appendChild(fila);
      });
    });

});
