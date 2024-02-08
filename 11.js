document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname; // Obtiene la ruta de la página actual
  const playOptions = document.querySelectorAll('.DagPlayOpt');

  playOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Claves únicas para cada página
      localStorage.setItem(`selectedChapterURL_${currentPage}`, option.dataset.embed);
      localStorage.setItem(`selectedChapterName_${currentPage}`, option.textContent.trim());
      localStorage.setItem(`selectedServer_${currentPage}`, option.closest('.server_option').querySelector('.tablinks.active').textContent.trim());

      window.location.reload();
    });
  });

  // Obtener los datos guardados usando la clave única
  const savedChapterURL = localStorage.getItem(`selectedChapterURL_${currentPage}`);

  if (savedChapterURL) {
   const iframe = document.getElementById('pembed').querySelector('iframe');
    iframe.src = savedChapterURL;
    document.getElementById('pembed').style.display = 'block';
    document.getElementById('initialMessage').style.display = 'none';

    // Cambio: Marcar el capítulo seleccionado basado en el URL completo
    const selectedOption = Array.from(playOptions).find(option => option.dataset.embed === savedChapterURL);
    if (selectedOption) {
      selectedOption.classList.add('on'); // Asegurarse de que la clase 'on' resalte visualmente la opción seleccionada
  }

  setTimeout(() => {
    const selectedChapterNameElement = document.getElementById('selectedChapterName');
    // Obtener los datos guardados usando la clave única
    const savedChapterName = localStorage.getItem(`selectedChapterName_${currentPage}`);
    const savedServer = localStorage.getItem(`selectedServer_${currentPage}`);

    if (savedChapterURL && savedChapterName && savedServer) {
      selectedChapterNameElement.textContent = `${savedChapterName} ${savedServer}`;
    } else {
      selectedChapterNameElement.textContent = 'Ninguno';
    }
  }, 100);
});
