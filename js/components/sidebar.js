class VirasatSidebar {
  constructor(app) {
    this.app = app;
    this.connectionsSolvedText = document.getElementById('connectionsSolvedText');
    this.streakDaysText = document.getElementById('streakDaysText');
    this.userLevelText = document.getElementById('userLevelText');
    
    this.viewPassportBtn = document.getElementById('viewPassportBtn');
    this.passportModal = document.getElementById('passportModal');
    this.passportStampsGrid = document.getElementById('passportStampsGrid');

    this.openRoomBtn = document.getElementById('openRoomBtn');
    this.culturalRoomModal = document.getElementById('culturalRoomModal');
    this.roomChatThread = document.getElementById('roomChatThread');
    this.roomChatInput = document.getElementById('roomChatInput');
    this.roomChatSendBtn = document.getElementById('roomChatSendBtn');

    this.contributeBtn = document.getElementById('contributeNowBtn');
    this.contributeModal = document.getElementById('contributeModal');
    this.contributeForm = document.getElementById('contributeForm');

    this.init();
  }

  init() {
    this.updateStats();
    this.setupPassport();
    this.setupCulturalRoom();
    this.setupContribute();
  }

  updateStats() {
    const stats = VirasatPassportService.getStats();
    if (this.connectionsSolvedText) {
      this.connectionsSolvedText.textContent = `${stats.solved} / ${stats.total}`;
    }
    if (this.streakDaysText) {
      this.streakDaysText.textContent = `${stats.streakDays} days`;
    }
    if (this.userLevelText) {
      this.userLevelText.textContent = stats.level;
    }
  }

  addPassportStamp(connection) {
    if (!connection) return;

    const added = VirasatPassportService.addStamp(connection);
    if (added) {
      this.updateStats();
      this.renderPassportStamps();
      this.showToast('🎉 New Cultural Twin Stamped to Passport!', `<strong>${connection.title}</strong> — ${connection.cultureA.regionName} ↔ ${connection.cultureB.regionName}`);
    }
  }

  showToast(title, message) {
    let toast = document.getElementById('virasatToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'virasatToast';
      toast.className = 'virasat-toast';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <span class="virasat-toast-icon">🛂</span>
      <div style="display: flex; flex-direction: column; gap: 2px;">
        <span style="font-weight: 700; color: var(--gold-fixed); font-size: 0.84rem;">${title}</span>
        <span style="font-size: 0.78rem; color: #D5CCC0;">${message}</span>
      </div>
    `;

    toast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  setupPassport() {
    if (!this.viewPassportBtn) return;

    this.viewPassportBtn.addEventListener('click', () => {
      if (this.passportModal) {
        this.renderPassportStamps();
        this.passportModal.classList.add('open');
      } else {
        window.location.href = 'passport.html';
      }
    });
  }

  renderPassportStamps() {
    if (!this.passportStampsGrid) return;
    const stamps = VirasatPassportService.getStamps();

    this.passportStampsGrid.innerHTML = stamps.map(stamp => `
      <div class="passport-stamp-tile">
        <div class="passport-stamp-header">
          <div class="stamp-title-row">
            <span class="stamp-icon">${stamp.icon}</span>
            <span class="stamp-name">${stamp.title}</span>
          </div>
          <span class="stamp-seal-badge">✓ Verified Stamp</span>
        </div>
        <div class="stamp-meta-row">
          <span>📍 ${stamp.region}</span>
          <span>•</span>
          <span>🏷️ ${stamp.domain}</span>
          <span>•</span>
          <span style="color: var(--gold-deep); font-weight: 600;">${stamp.date}</span>
        </div>
        <div class="stamp-similarity-box">
          <strong>✨ Key Historical Similarity:</strong> ${stamp.similaritySummary}
        </div>
      </div>
    `).join('');
  }

  setupCulturalRoom() {
    if (!this.openRoomBtn || !this.culturalRoomModal) return;

    this.openRoomBtn.addEventListener('click', () => {
      this.culturalRoomModal.classList.add('open');
    });

    if (this.roomChatSendBtn && this.roomChatInput) {
      const handleSend = () => {
        const text = this.roomChatInput.value.trim();
        if (!text) return;

        const newBubble = document.createElement('div');
        newBubble.className = 'chat-bubble';
        newBubble.innerHTML = `
          <span class="chat-author">You (Explorer)</span>
          <span>${text}</span>
        `;
        this.roomChatThread.appendChild(newBubble);
        this.roomChatInput.value = '';
        this.roomChatThread.scrollTop = this.roomChatThread.scrollHeight;

        setTimeout(() => {
          const scholarBubble = document.createElement('div');
          scholarBubble.className = 'chat-bubble';
          scholarBubble.innerHTML = `
            <span class="chat-author" style="color: #775A19;">Dr. Al-Biruni Scholar Bot 📜</span>
            <span>Fascinating observation! Notice how both engineering and artistic traditions solved structural and decorative challenges while preserving regional identity.</span>
          `;
          this.roomChatThread.appendChild(scholarBubble);
          this.roomChatThread.scrollTop = this.roomChatThread.scrollHeight;
        }, 1200);
      };

      this.roomChatSendBtn.addEventListener('click', handleSend);
      this.roomChatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
      });
    }
  }

  setupContribute() {
    if (!this.contributeBtn || !this.contributeModal) return;

    this.contributeBtn.addEventListener('click', () => {
      this.contributeModal.classList.add('open');
    });

    if (this.contributeForm) {
      this.contributeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✨ Thank you for preserving world heritage! Your cross-cultural twin discovery has been submitted to the Virasat Curatorial Board.');
        this.contributeForm.reset();
        this.contributeModal.classList.remove('open');
      });
    }
  }
}
