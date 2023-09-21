
const apiKey = 'd6077a0f';

// Función para buscar información de una película por título
function buscarPelicula() {
    const tituloPelicula = document.getElementById('tituloPelicula').value;
    
    // Comprueba si se proporcionó un título de película
    if (tituloPelicula) {
    // Construye la URL de la solicitud a la API de OMDB
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(tituloPelicula)}`;
    
    // Realiza la solicitud a la API utilizando fetch
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    // Maneja la respuesta de la API aquí
    mostrarInformacionPelicula(data);
    })
    .catch(error => {
    console.error('Error al realizar la solicitud a la API:', error);
    });
    } else {
    alert('Por favor, ingresa el título de una película.');
    }
    }
    
    // Función para mostrar la información de la película en la página
    function mostrarInformacionPelicula(data) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    
    if (data.Response === 'True') {
    const titulo = data.Title;
    const año = data.Year;
    const director = data.Director;
    
    const peliculaInfo = document.createElement('div');
    peliculaInfo.innerHTML = `
    <h2>${titulo} (${año})</h2>
    <p>Director: ${director}</p>
    `;
    
    resultadoDiv.appendChild(peliculaInfo);
    } else {
    resultadoDiv.innerHTML = '<p>No se encontró información para esta película.</p>';
    }
    }
    
    // Agrega un evento de clic al botón de búsqueda
    const buscarBtn = document.getElementById('buscarBtn');
    buscarBtn.addEventListener('click', buscarPelicula);
    
    // Agrega un evento para buscar la película cuando se presiona la tecla "Enter" en el campo de entrada de texto
    const tituloPeliculaInput = document.getElementById('tituloPelicula');
    tituloPeliculaInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
    buscarPelicula();
    }
    });
    
    
    