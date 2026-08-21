/**
 * ==========================================================================
 * VIRASAT - MODALS & CONTRIBUTION FLOWS
 * ==========================================================================
 */

const Modals = (() => {
  let isRecording = false;
  let recordTimer = null;
  let recordSeconds = 0;

  function init() {
    setupModalTriggers();
    setupCloseHandlers();
    setupRecordingLogic();
  }

  function setupModalTriggers() {
    // Record Action
    document.querySelectorAll('[data-action="record"]').forEach(btn => {
      btn.addEventListener('click', () => openModal('recordModal'));
    });

    // Upload Action
    document.querySelectorAll('[data-action="upload"]').forEach(btn => {
      btn.addEventListener('click', () => openModal('uploadModal'));
    });

    // Nominate Action
    document.querySelectorAll('[data-action="nominate"]').forEach(btn => {
      btn.addEventListener('click', () => openModal('nominateModal'));
    });

    // Main Contribute Button
    document.querySelectorAll('[data-action="contribute-now"]').forEach(btn => {
      btn.addEventListener('click', () => openModal('contributeModal'));
    });

    // Filter Button
    const filterBtn = document.getElementById('vaultFilterBtn');
    if (filterBtn) {
      filterBtn.addEventListener('click', () => openModal('filterModal'));
    }
  }

  function setupCloseHandlers() {
    document.querySelectorAll('.modal-close-btn, .btn-modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        const backdrop = btn.closest('.modal-backdrop');
        if (backdrop) backdrop.classList.remove('open');
      });
    });

    // Close on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          backdrop.classList.remove('open');
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
          modal.classList.remove('open');
        });
      }
    });
  }

  function openModal(modalId) {
    const target = document.getElementById(modalId);
    if (target) {
      target.classList.add('open');
    }
  }

  function setupRecordingLogic() {
    const micBtn = document.getElementById('micRecordBtn');
    const timerDisplay = document.getElementById('recordTimerDisplay');
    const statusText = document.getElementById('recordStatusText');

    if (!micBtn || !timerDisplay) return;

    micBtn.addEventListener('click', () => {
      isRecording = !isRecording;
      if (isRecording) {
        micBtn.classList.add('recording');
        statusText.textContent = 'Recording in progress... Speak clearly';
        recordSeconds = 0;
        recordTimer = setInterval(() => {
          recordSeconds++;
          const mins = String(Math.floor(recordSeconds / 60)).padStart(2, '0');
          const secs = String(recordSeconds % 60).padStart(2, '0');
          timerDisplay.textContent = `${mins}:${secs}`;
        }, 1000);
      } else {
        micBtn.classList.remove('recording');
        statusText.textContent = 'Recording paused. Ready to submit!';
        clearInterval(recordTimer);
      }
    });
  }

  return {
    init,
    openModal
  };
})();

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', Modals.init);
}
