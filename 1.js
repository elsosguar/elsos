document.addEventListener('DOMContentLoaded', () => {
  const playOptions = document.querySelectorAll('.DagPlayOpt');
  playOptions.forEach(option => {
    option.addEventListener('click', () => {
      localStorage.setItem('selectedChapterURL', option.dataset.embed);
      localStorage.setItem('selectedChapterName', option.textContent.trim());
      localStorage.setItem('selectedServer', option.closest('.server_option').querySelector('.tablinks.active').textContent.trim());
      // Cambio: Guardar el URL completo del capítulo seleccionado para una coincidencia más precisa
      window.location.reload();
    });
  });

  const savedChapterURL = localStorage.getItem('selectedChapterURL');

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
  }

  // Retrasar la ejecución del código de recuperación para asegurar que todo está cargado
  setTimeout(() => {
    const selectedChapterNameElement = document.getElementById('selectedChapterName');
    const savedChapterName = localStorage.getItem('selectedChapterName');
    const savedServer = localStorage.getItem('selectedServer');

    if (savedChapterURL && savedChapterName && savedServer) {
      selectedChapterNameElement.textContent = `${savedChapterName} ${savedServer}`;
    } else {
      selectedChapterNameElement.textContent = 'Ninguno';
    }
  }, 100); // Un retraso de 100ms; ajusta según sea necesario
});

