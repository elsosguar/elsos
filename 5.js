document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname; // Obtiene la ruta de la página actual
  const playOptions = document.querySelectorAll('.DagPlayOpt');

  playOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Guardar con claves únicas para cada página
      localStorage.setItem(`selectedChapterURL_${currentPage}`, option.dataset.embed);
      localStorage.setItem(`selectedChapterName_${currentPage}`, option.textContent.trim());
      localStorage.setItem(`selectedServer_${currentPage}`, option.closest('.server_option').querySelector('.tablinks.active').textContent.trim());

      window.location.reload(); // Mantener la recarga de la página
    });
  });

  // Obtener los datos guardados usando las claves únicas
  const savedChapterURL = localStorage.getItem(`selectedChapterURL_${currentPage}`);

  if (savedChapterURL) {
    const iframe = document.getElementById('pembed').querySelector('iframe');
    iframe.src = savedChapterURL;
    document.getElementById('pembed').style.display = 'block';
    document.getElementById('initialMessage').style.display = 'none';

    // Marcar la opción seleccionada basada en el URL completo
    const selectedOption = Array.from(playOptions).find(option => option.dataset.embed === savedChapterURL);
    if (selectedOption) {
      selectedOption.classList.add('on');
    }
  }

  setTimeout(() => {
    const selectedChapterNameElement = document.getElementById('selectedChapterName');
    // Obtener los datos guardados usando las claves únicas
    const savedChapterName = localStorage.getItem(`selectedChapterName_${currentPage}`);
    const savedServer = localStorage.getItem(`selectedServer_${currentPage}`);

    if (savedChapterURL && savedChapterName && savedServer) {
      selectedChapterNameElement.textContent = `${savedChapterName} ${savedServer}`;
    } else {
      selectedChapterNameElement.textContent = 'Ninguno';
    }
  }, 100);
});
