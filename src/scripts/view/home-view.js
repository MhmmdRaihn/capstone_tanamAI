const HomeView = {
  async render(container) {
    container.innerHTML = `
      <h2 id="home-heading">Home</h2>
      <h3 id="welcome-message"> Selamat datang di Tanam AI, disini kami akan membantu anda dalam mendeteksi penyakit apa yang ada di tanaman anda</h3>
      <nav>
        <a id="btn-deteksi" href="#/upload">Deteksi!</a>
        <a id="btn-result" href="#/stories">Hasil</a>
      </nav>
    `;
  },

  isPushSupported() {
    return 'serviceWorker' in navigator && 'PushManager' in window;
  },

  bindLogout(handler) {
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', handler);
    }
  },

  navigateTo(hash) {
    window.location.hash = hash;
  },

  showAlert(message) {
    alert(message);
  }
};

export default HomeView;
