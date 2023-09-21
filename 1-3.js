
const apiKey = 'd6077a0f';
// Función para buscar información de una película por título
function buscarPelicula() {
    const tituloPelicula = document.getElementById('tituloPelicula').value;

    // Comprueba si se proporcionó un título de película
    if (tituloPelicula) {
    // Construye la URL de la solicitud a la API de OMDB
    const apiUrl = `https://www.omdbapi.com/?apiKey=${apiKey}&t=${encodeURIComponent(tituloPelicula)}`;

    // Realiza la solicitud a la API utilizando fetch
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    // Verifica si la respuesta de la API indica éxito
    if (data.Response === 'True') {
    const director = data.Director;
    const año = data.Year;

    // Muestra la información en la página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
    <h2>Información de la Película</h2>
    <p>Director: ${director}</p>
    <p>Año: ${año}</p>
    `;
    } else {
    // Si la película no se encuentra, muestra un mensaje de error
    alert('No se encontró información para esta película.');
    }
    })
    .catch(error => {
    console.error('Error al realizar la solicitud a la API:', error);
    });
    } else {
    alert('Por favor, ingresa el título de una película.');
    }
}

// Agrega un evento de clic al botón de búsqueda
const buscarBtn = document.getElementById('buscarBtn');
buscarBtn.addEventListener('click', buscarPelicula);