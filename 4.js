function cargarCapitulos(identificador, elementoDestino) {
    fetch(`https://elsosguar.online/P/prueba.php?id=${identificador}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementoDestino).innerHTML = data;
        })
        .catch(error => {
            console.error('Error durante la carga de capítulos:', error);
        });
}