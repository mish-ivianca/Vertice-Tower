const svg = document.getElementById("svg");

fetch("departamento.json")
    .then(response => response.json())
    .then(departamentos => {

        departamentos.forEach(dep => {

            // Crear el polígono
            const p = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

            // Convertir los puntos del JSON al formato del SVG
            const puntos = dep.points.map(punto => punto.join(",")).join(" ");

            p.setAttribute("points", puntos);

            // Cursor de mano
            p.style.cursor = "pointer";

            // Hover
            p.addEventListener("mouseenter", () => {

                p.classList.add("hover");

            });



            // Salir del hover
            p.addEventListener("mouseleave", () => {

                p.classList.remove("hover");

            });

            // Click
            p.addEventListener("click", () => {

                alert("Seleccionaste: " + dep.nombre);

            });

            // Agregar al SVG
            svg.appendChild(p);

        });

    })
    .catch(error => {

        console.error("Error al cargar el JSON:", error);

    });