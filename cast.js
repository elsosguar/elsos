   async function sendToWebVideoCast() {
        try {
            // Obtener la URL del capítulo guardada en localStorage
            const currentPage = window.location.pathname;
            let videoUrl = localStorage.getItem(`selectedChapterURL_${currentPage}`);

            // Verificar si existe la URL del video
            if (!videoUrl) {
                alert('No se ha seleccionado un capítulo.');
                return;
            }

            // Añadir el sufijo /url a la URL del capítulo
            const requestUrl = `${videoUrl}/url`;

            // Muestra la URL a la que se hará la solicitud
            console.log("Solicitando a:", requestUrl);

            // Hacer una solicitud para obtener la URL final
            const response = await fetch(requestUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain'
                }
            });

            // Verificar el estado de la respuesta
            console.log("Estado de la respuesta:", response.status);

            if (!response.ok) {
                throw new Error('Error al obtener la URL final del video.');
            }

            // Obtener la URL final de la respuesta
            let finalUrl = await response.text();

            // Verificar si la respuesta fue recibida
            console.log("Respuesta recibida:", finalUrl);

            // Eliminar el prefijo "https://" de la URL
            finalUrl = finalUrl.replace(/^https?:\/\//, '');

            // Construir el intent URL sin "https://"
            const intentUrl = `intent://${finalUrl}#Intent;package=com.instantbits.cast.webvideo;scheme=https;end`;

            // Mostrar el intent URL en la consola
            console.log("Intent URL generado:", intentUrl);

            // Redireccionar a la URL del intento
            window.location.href = intentUrl;

            // Mostrar estado en la página
            document.getElementById('status').innerText = "URL enviada a la app correctamente.";

        } catch (error) {
            console.error('Ocurrió un error:', error);
            document.getElementById('status').innerText = 'Hubo un problema al obtener la URL del video.';
        }
    }