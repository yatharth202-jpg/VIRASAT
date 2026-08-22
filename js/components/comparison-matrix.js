class VirasatComparisonMatrix {
  constructor(app) {
    this.app = app;
    this.connectionSummaryText = document.getElementById('connectionSummaryText');
    this.photoBridgeA = document.getElementById('photoBridgeA');
    this.photoBridgeB = document.getElementById('photoBridgeB');
    this.evidenceSourcesList = document.getElementById('evidenceSourcesList');
    this.relatedConnectionsStack = document.getElementById('relatedConnectionsStack');
    this.similaritiesTabPane = document.getElementById('similaritiesTabPane');
    this.dissimilaritiesTabPane = document.getElementById('dissimilaritiesTabPane');
    this.wikipediaHubGrid = document.getElementById('wikipediaHubGrid');
    
    this.tabSimilarBtn = document.getElementById('tabSimilarBtn');
    this.tabDissimilarBtn = document.getElementById('tabDissimilarBtn');

    this.activeTab = 'similar';
    this.currentConnection = null;
    this.initTabs();
  }

  initTabs() {
    if (this.tabSimilarBtn && this.tabDissimilarBtn) {
      this.tabSimilarBtn.addEventListener('click', () => {
        this.activeTab = 'similar';
        this.tabSimilarBtn.classList.add('active');
        this.tabDissimilarBtn.classList.remove('active');
        if (this.similaritiesTabPane) this.similaritiesTabPane.classList.add('active');
        if (this.dissimilaritiesTabPane) this.dissimilaritiesTabPane.classList.remove('active');
      });

      this.tabDissimilarBtn.addEventListener('click', () => {
        this.activeTab = 'dissimilar';
        this.tabDissimilarBtn.classList.add('active');
        this.tabSimilarBtn.classList.remove('active');
        if (this.dissimilaritiesTabPane) this.dissimilaritiesTabPane.classList.add('active');
        if (this.similaritiesTabPane) this.similaritiesTabPane.classList.remove('active');
      });
    }
  }

  render(connection) {
    if (!connection) return;
    this.currentConnection = connection;

    if (this.connectionSummaryText) {
      this.connectionSummaryText.innerHTML = `
        <p style="margin-bottom: 10px;">${connection.connectionOverview}</p>
        <p>${connection.connectionDetails}</p>
      `;
    }

    if (this.photoBridgeA) this.photoBridgeA.src = connection.bridgeImage || connection.cultureA.image;
    if (this.photoBridgeB) this.photoBridgeB.src = connection.bridgeImageB || connection.cultureB.image;

    if (this.evidenceSourcesList) {
      this.evidenceSourcesList.innerHTML = connection.evidenceSources.map(src => `
        <a href="${src.url}" target="_blank" rel="noopener noreferrer" class="evidence-link-item">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>${src.icon}</span>
            <span>${src.title}</span>
          </div>
          <span class="ext-arrow">↗</span>
        </a>
      `).join('');

      this.evidenceSourcesList.querySelectorAll('.evidence-link-item').forEach(link => {
        link.addEventListener('click', () => {
          this.app.sidebar.addPassportStamp(this.currentConnection);
        });
      });
    }

    if (this.similaritiesTabPane) {
      this.similaritiesTabPane.innerHTML = connection.similarities.map(sim => `
        <div class="matrix-point-tile similar">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="color: var(--accent-correct);">✓</span>
            <h4 class="tile-headline">${sim.title}</h4>
          </div>
          <p class="tile-desc">${sim.desc}</p>
        </div>
      `).join('');
    }

    if (this.dissimilaritiesTabPane) {
      this.dissimilaritiesTabPane.innerHTML = connection.dissimilarities.map(dis => `
        <div class="matrix-point-tile dissimilar">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="color: #C0392B;">⚡</span>
            <h4 class="tile-headline">${dis.title}</h4>
          </div>
          <p class="tile-desc">${dis.desc}</p>
        </div>
      `).join('');
    }

    if (this.wikipediaHubGrid) {
      this.wikipediaHubGrid.innerHTML = connection.wikipediaCards.map(wiki => `
        <div class="wiki-entry-card">
          <img src="${wiki.image}" alt="${wiki.title}" class="wiki-thumb-frame" />
          <div class="wiki-body">
            <span class="wiki-culture-tag">Encyclopedia · ${wiki.culture}</span>
            <h4 class="wiki-title">${wiki.title}</h4>
            <p class="wiki-snippet">${wiki.extract}</p>
            <a href="${wiki.url}" target="_blank" rel="noopener noreferrer" class="wiki-action-btn">
              <span>Read Full Article on Wikipedia</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      `).join('');

      this.wikipediaHubGrid.querySelectorAll('.wiki-action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          this.app.sidebar.addPassportStamp(this.currentConnection);
        });
      });
    }

    if (this.relatedConnectionsStack) {
      const otherConnections = VIRASAT_CONNECTIONS.filter(c => c.id !== connection.id);
      this.relatedConnectionsStack.innerHTML = otherConnections.slice(0, 4).map(rel => `
        <div class="related-mini-card" data-rel-id="${rel.id}">
          <img src="${rel.cultureA.image}" alt="${rel.title}" class="related-mini-thumb" />
          <div class="related-mini-text">
            <span class="related-mini-title">${rel.title}</span>
            <span class="related-mini-countries">${rel.cultureA.regionName} ↔ ${rel.cultureB.regionName}</span>
          </div>
          <span class="related-arrow-icon">→</span>
        </div>
      `).join('');

      this.relatedConnectionsStack.querySelectorAll('.related-mini-card').forEach(card => {
        card.addEventListener('click', () => {
          const relId = card.getAttribute('data-rel-id');
          this.app.loadConnectionById(relId);
          window.scrollTo({ top: 180, behavior: 'smooth' });
        });
      });
    }
  }
}
