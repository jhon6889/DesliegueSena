document.addEventListener("DOMContentLoaded", function () {
    fetch("datos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {

            document.getElementById("name").textContent = data.nombre || "Nombre no disponible";
            document.getElementById("biografia").textContent = data.biografia || "Biografía no disponible";

            document.getElementById("facebookLink").href = data.enlaces.facebook || "https://www.facebook.com/jhongrandag";
            document.getElementById("instagramUser").href = data.enlaces.instagram || "https://www.instagram.com/jhonj6889/";
            document.getElementById("xUser").href = data.enlaces.x || "https://x.com/";
            document.getElementById("githubUser").href = data.enlaces.github || "https://github.com/jhon6889";
            document.getElementById("linkedinUser").href = data.enlaces.linkedin || "https://es.linkedin.com/";
            document.getElementById("website").href = data.enlaces.website || "https://jamesportafolio.pages.dev/#";

            
            document.getElementById("author").textContent = `2025 - ${data.autor || "Autor desconocido"}`;
        })
        .catch(error => {
            console.error("Error al cargar los datos:", error);
            document.getElementById("name").textContent = "Error al cargar";
            document.getElementById("biografia").textContent = "No se pudo cargar la biografía.";
            document.getElementById("author").textContent = "2025 - Error";
        });
});


