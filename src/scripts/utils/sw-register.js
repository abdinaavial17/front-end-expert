const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker tidak di dukung browser ini');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service Worker terdaftar');
  } catch (error) {
    console.log('Gagal untuk mendaftarkan service worker', error);
  }
};

export default swRegister;
