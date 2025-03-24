  // Variable para guardar la referencia del WakeLock
  let wakeLock = null;
  
  // Función para activar el WakeLock
  async function activateWakeLock() {
    try {
      if ('wakeLock' in navigator) {
        wakeLock = await navigator.wakeLock.request('screen');
        console.log('WakeLock activado');
        
        // Reactivar el WakeLock cuando el usuario vuelva a la página
        document.addEventListener('visibilitychange', async () => {
          if (document.visibilityState === 'visible' && wakeLock === null) {
            wakeLock = await navigator.wakeLock.request('screen');
            console.log('WakeLock reactivado');
          }
        });
      }
    } catch (err) {
      console.error(`Error al activar WakeLock: ${err.message}`);
    }
  }