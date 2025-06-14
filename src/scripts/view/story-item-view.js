import CONFIG from '../config.js';

const StoryItem = {
  render(story) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('story-detail-container');

    wrapper.innerHTML = `
      <h2 class="plant-type-title">Jenis Prediksi: ${story.model_type}</h2>
      <img src="${story.image_url || `${CONFIG.IMAGE_BASE_URL}/${story.image_filename}`}" alt="Hasil Deteksi" class="detail-story-image" />

      <div class="detail-predictions-list">
        <h3 class="prediction-list-title">Kemungkinan Hama / Penyakit:</h3>

        ${story.top3.map(prediction => `
          <div class="prediction-detail-item">
            <div class="prediction-header">
              <h4>${prediction.label}</h4>
              <span class="confidence-score">${(prediction.probability * 100).toFixed(0)}% Keyakinan</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: ${(prediction.probability * 100)}%;"></div>
            </div>
            <div class="disease-info">
              <p><strong>Gejala:</strong> ${prediction.gejala || '-'}</p>
              
              <div class="solution-block">
                <p><strong>Solusi Organik:</strong></p>
                <ul>${(prediction.solusi?.organik || []).map(s => `<li>${s}</li>`).join('')}</ul>
              </div>

              <div class="solution-block">
                <p><strong>Solusi Anorganik:</strong></p>
                <p>${prediction.solusi?.anorganik || '-'}</p>
              </div>

              ${prediction.produk?.length ? `
                <div class="solution-block">
                  <p><strong>Produk:</strong></p>
                  <ul class="product-list">
                    ${prediction.produk.map(p => `
                      <li>
                        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn-product">
                          ${p.platform} (${p.jenis || '-'}) <i class="fas fa-external-link-alt"></i>
                        </a>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="back-button-container" style="margin-top: 30px; text-align: center;">
        <a href="#/stories" class="btn-back">← Kembali ke Daftar Hasil</a>
      </div>
    `;

    return wrapper;
  }
};

export default StoryItem;