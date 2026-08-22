class VirasatConnectionGame {
  constructor(app) {
    this.app = app;
    this.currentConnection = null;
    this.selectedGuessId = null;
    this.isRevealed = false;
    this.unlockedHintsCount = 1;

    this.cultureACard = document.getElementById('cultureACard');
    this.cultureBCard = document.getElementById('cultureBCard');
    this.centerConnector = document.getElementById('centerConnectorBadge');
    this.guessOptionsContainer = document.getElementById('guessOptionsContainer');
    this.revealBtn = document.getElementById('revealConnectionBtn');
    this.hintsListWrap = document.getElementById('hintsListWrap');
    this.showHintBtn = document.getElementById('showAnotherHintBtn');
    this.difficultyBadge = document.getElementById('difficultyLevelBadge');

    this.initEvents();
  }

  initEvents() {
    if (this.revealBtn) {
      this.revealBtn.addEventListener('click', () => this.handleReveal());
    }

    if (this.showHintBtn) {
      this.showHintBtn.addEventListener('click', () => this.unlockNextHint());
    }
  }

  loadConnection(connection) {
    this.currentConnection = connection;
    this.selectedGuessId = null;
    this.isRevealed = false;
    this.unlockedHintsCount = 1;

    this.renderCultureCards();
    this.renderConnector();
    this.renderGuessOptions();
    this.renderHints();
    this.renderDifficulty();
    this.updateRevealButtonState();
  }

  renderCultureCards() {
    const { cultureA, cultureB } = this.currentConnection;

    if (this.cultureACard) {
      this.cultureACard.innerHTML = `
        <div class="culture-card-img-wrap">
          <img src="${cultureA.image}" alt="${cultureA.siteName}" class="culture-card-img" onerror="this.src='${cultureA.fallbackImage}'" />
          <span class="culture-origin-badge">${cultureA.badge}</span>
          <button class="culture-bookmark-btn" title="Bookmark Artifact">♡</button>
        </div>
        <div class="culture-card-body">
          <h3 class="culture-site-title">${cultureA.siteName}</h3>
          <span class="culture-site-location">📍 ${cultureA.location}</span>
          <p class="culture-site-desc">${cultureA.shortDesc}</p>
        </div>
      `;
    }

    if (this.cultureBCard) {
      this.cultureBCard.innerHTML = `
        <div class="culture-card-img-wrap">
          <img src="${cultureB.image}" alt="${cultureB.siteName}" class="culture-card-img" onerror="this.src='${cultureB.fallbackImage}'" />
          <span class="culture-origin-badge">${cultureB.badge}</span>
          <button class="culture-bookmark-btn" title="Bookmark Artifact">♡</button>
        </div>
        <div class="culture-card-body">
          <h3 class="culture-site-title">${cultureB.siteName}</h3>
          <span class="culture-site-location">📍 ${cultureB.location}</span>
          <p class="culture-site-desc">${cultureB.shortDesc}</p>
        </div>
      `;
    }

    document.querySelectorAll('.culture-bookmark-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
        btn.style.color = btn.textContent === '♥' ? '#C5A059' : '#FFFFFF';
      });
    });
  }

  renderConnector() {
    if (!this.centerConnector) return;
    if (this.isRevealed) {
      this.centerConnector.classList.add('revealed');
      this.centerConnector.innerHTML = '🔗';
      this.centerConnector.title = 'Connection Discovered!';
    } else {
      this.centerConnector.classList.remove('revealed');
      this.centerConnector.innerHTML = '?';
      this.centerConnector.title = 'Discover the link between these two cultures';
    }
  }

  renderGuessOptions() {
    if (!this.guessOptionsContainer) return;
    const { guessOptions, correctGuess } = this.currentConnection;

    this.guessOptionsContainer.innerHTML = guessOptions.map(opt => {
      let extraClass = '';
      if (this.selectedGuessId === opt.id) {
        extraClass = 'selected';
      }
      if (this.isRevealed && opt.id === correctGuess) {
        extraClass = 'selected';
      }
      return `
        <button class="guess-option-pill ${extraClass}" data-opt-id="${opt.id}">
          <span style="font-size: 1.1rem;">${opt.icon}</span>
          <span>${opt.label}</span>
        </button>
      `;
    }).join('');

    this.guessOptionsContainer.querySelectorAll('.guess-option-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.isRevealed) return;
        this.selectedGuessId = btn.getAttribute('data-opt-id');
        this.renderGuessOptions();
        this.updateRevealButtonState();
      });
    });
  }

  renderHints() {
    if (!this.hintsListWrap) return;
    const { hints } = this.currentConnection;

    this.hintsListWrap.innerHTML = hints.slice(0, this.unlockedHintsCount).map(hint => `
      <div class="hint-item-bullet">
        <span class="hint-icon">💡</span>
        <span>${hint.text}</span>
      </div>
    `).join('');

    if (this.showHintBtn) {
      if (this.unlockedHintsCount >= hints.length) {
        this.showHintBtn.style.display = 'none';
      } else {
        this.showHintBtn.style.display = 'flex';
        this.showHintBtn.innerHTML = `Show Another Hint (-1 🔥)`;
      }
    }
  }

  unlockNextHint() {
    if (this.unlockedHintsCount < this.currentConnection.hints.length) {
      this.unlockedHintsCount++;
      this.renderHints();
    }
  }

  renderDifficulty() {
    if (this.difficultyBadge) {
      this.difficultyBadge.textContent = this.currentConnection.difficulty || 'Medium';
    }
  }

  updateRevealButtonState() {
    if (!this.revealBtn) return;
    if (this.isRevealed) {
      this.revealBtn.textContent = '✓ Connection Revealed';
      this.revealBtn.classList.add('revealed-state');
    } else {
      this.revealBtn.textContent = 'Reveal Connection →';
      this.revealBtn.classList.remove('revealed-state');
    }
  }s.revealBtn.classList.remove('revealed-state');
    }
  }

  handleReveal() {
    if (this.isRevealed) {
      const deepDive = document.getElementById('connectionDeepdiveSection');
      if (deepDive) deepDive.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    this.isRevealed = true;
    this.renderConnector();
    this.renderGuessOptions();
    this.updateRevealButtonState();
    this.triggerCelebration();

    if (window.VirasatPassportService) { window.VirasatPassportService.addStamp(this.currentConnection); } if (this.app && typeof this.app.onConnectionRevealed === "function") { this.app.onConnectionRevealed(this.currentConnection); }
  }

  triggerCelebration() {
    const badge = this.centerConnector;
    if (badge) {
      badge.style.animation = 'pulseGlow 1s ease-in-out infinite alternate';
      setTimeout(() => {
        badge.style.animation = '';
      }, 3000);
    }
  }
}

