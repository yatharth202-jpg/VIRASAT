/**
 * VIRASAT - SURPRISE ME
 * Interactive JavaScript Controller & Passport Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Element Selectors ---
  // Modals
  const learningModal = document.getElementById('learning-modal');
  const factModal = document.getElementById('fact-result-modal');
  const howModal = document.getElementById('how-modal');
  
  // Triggers
  const btnStartLearning = document.getElementById('btn-start-learning');
  const stepwellTrigger = document.getElementById('stepwell-video-trigger');
  const btnChallengeMe = document.getElementById('btn-challenge-me');
  const btnChooseFact = document.getElementById('btn-choose-fact');
  const btnChooseMyth = document.getElementById('btn-choose-myth');
  const btnHowItWorks = document.getElementById('btn-how-it-works');
  
  // Close buttons
  const closeLearningModal = document.getElementById('close-learning-modal');
  const closeFactModal = document.getElementById('close-fact-modal');
  const closeHowModal = document.getElementById('close-how-modal');
  const btnFinishStory = document.getElementById('btn-finish-story');
  const btnNextFact = document.getElementById('btn-next-fact');

  // Search & Notifications
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const closeSearch = document.getElementById('close-search');
  const notificationBtn = document.getElementById('notification-btn');
  const notificationPopover = document.getElementById('notification-popover');
  const userProfileBtn = document.getElementById('user-profile-btn');

  // Helper Functions
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // --- Dynamic Facts Bank for Interactive Replay ---
  const SURPRISE_FACTS = [
    {
      title: "The Rustless Iron Pillar of Delhi",
      location: "Qutub Complex, New Delhi • 4th Century CE",
      statement: "The Iron Pillar of Delhi has never rusted because it is made of a special metal that does not react with water.",
      isFact: true,
      badgeText: "CORRECT!",
      statusText: "You discovered the archaeological truth!",
      explanation: "The 6-ton, 7.2-meter tall pillar has resisted monsoon rains and sun for over 1,600 years without rusting. Ancient Indian metallurgists achieved this by forge-welding wrought iron with a high phosphorus content and low sulfur/manganese, forming a protective <strong>misawite</strong> (crystalline iron hydrogen phosphate) passive layer on the surface!"
    },
    {
      title: "Acoustic Whispering Gallery of Gol Gumbaz",
      location: "Bijapur, Karnataka • 17th Century CE",
      statement: "A soft whisper at one side of Gol Gumbaz dome can be heard clearly 38 meters away on the opposite side.",
      isFact: true,
      badgeText: "TRUTH DISCOVERED!",
      statusText: "Acoustic wonder verified!",
      explanation: "Gol Gumbaz houses one of the world's largest unsupported domes. Its circular whispering gallery reflects sound waves repeatedly across the dome curvature, causing even the faintest whisper to echo up to 7 to 10 times clearly across 38 meters!"
    },
    {
      title: "Chand Baori: 3,500 Step Inverted Pyramid",
      location: "Abhaneri, Rajasthan • 9th Century CE",
      statement: "Chand Baori was constructed entirely without mortar or binding cement, relying on precision gravity interlocking.",
      isFact: true,
      badgeText: "ENGINEERING MARVEL!",
      statusText: "Architectural secret revealed!",
      explanation: "Built in the 9th century by King Chanda, Chand Baori descends 13 stories (30 meters) into the earth with 3,500 perfectly symmetrical steps. The dry interlocking stone masonry has withstood earthquakes and extreme desert thermal expansion for over 1,100 years."
    }
  ];

  let currentFactIndex = 0;

  // --- 5-Minute Learning Interactions ---
  if (closeLearningModal) {
    closeLearningModal.addEventListener('click', () => closeModal(learningModal));
  }
  if (btnFinishStory) {
    btnFinishStory.addEventListener('click', () => {
      // Increment discovery points
      const pointsEl = document.querySelector('[data-target="340"]');
      if (pointsEl) {
        let curr = parseInt(pointsEl.textContent, 10) || 340;
        pointsEl.textContent = curr + 25;
      }
      if (window.VirasatPassportService) {
        window.VirasatPassportService.showToast('5-Minute Story Completed!', '+25 Discovery XP');
      }
      closeModal(learningModal);
    });
  }

  // --- Fact or Myth Interactions ---
  function triggerFactQuizResult(isFactChosen) {
    const fact = SURPRISE_FACTS[currentFactIndex];
    const factResultBadge = document.getElementById('fact-result-badge');
    const factStatusMsg = document.getElementById('fact-status-msg');
    const factTitle = document.getElementById('fact-result-title');
    const factSubtitle = document.querySelector('#fact-result-modal .modal-subtitle');
    const factExplanation = document.querySelector('#fact-result-modal .fact-explanation');
    
    if (factTitle) factTitle.textContent = fact.title;
    if (factSubtitle) factSubtitle.textContent = fact.location;
    if (factExplanation) factExplanation.innerHTML = fact.explanation;

    if (isFactChosen === fact.isFact) {
      if (factResultBadge) {
        factResultBadge.textContent = fact.badgeText;
        factResultBadge.className = 'modal-badge tag-green';
      }
      if (factStatusMsg) {
        factStatusMsg.className = 'fact-status-banner success';
        factStatusMsg.innerHTML = `<span class="status-icon">✔</span><span>${fact.statusText}</span>`;
      }
      if (window.VirasatPassportService) {
        window.VirasatPassportService.showToast(`Fact Mastered: ${fact.title}`, '+15 Discovery XP');
      }
    } else {
      if (factResultBadge) {
        factResultBadge.textContent = 'MYTH BUSTED!';
        factResultBadge.className = 'modal-badge tag-green';
      }
      if (factStatusMsg) {
        factStatusMsg.className = 'fact-status-banner success';
        factStatusMsg.innerHTML = `<span class="status-icon">💡</span><span>Here is the historical truth:</span>`;
      }
    }
    openModal(factModal);
  }

  if (btnChooseFact) {
    btnChooseFact.addEventListener('click', () => triggerFactQuizResult(true));
  }
  if (btnChooseMyth) {
    btnChooseMyth.addEventListener('click', () => triggerFactQuizResult(false));
  }
  if (btnChallengeMe) {
    btnChallengeMe.addEventListener('click', () => openModal(factModal));
  }
  if (closeFactModal) {
    closeFactModal.addEventListener('click', () => closeModal(factModal));
  }
  if (btnNextFact) {
    btnNextFact.addEventListener('click', () => {
      // Advance to next fact
      currentFactIndex = (currentFactIndex + 1) % SURPRISE_FACTS.length;
      const nextFact = SURPRISE_FACTS[currentFactIndex];
      const statementEl = document.querySelector('.parchment-statement');
      if (statementEl) {
        statementEl.textContent = nextFact.statement;
      }

      // Increment points & surprises
      const pointsEl = document.querySelector('[data-target="340"]');
      if (pointsEl) {
        let curr = parseInt(pointsEl.textContent, 10) || 340;
        pointsEl.textContent = curr + 15;
      }
      const unwrappedEl = document.querySelector('[data-target="12"]');
      if (unwrappedEl) {
        let count = parseInt(unwrappedEl.textContent, 10) || 12;
        unwrappedEl.textContent = count + 1;
      }

      closeModal(factModal);
    });
  }

  // --- How It Works Modal ---
  if (btnHowItWorks) {
    btnHowItWorks.addEventListener('click', () => openModal(howModal));
  }
  if (closeHowModal) {
    closeHowModal.addEventListener('click', () => closeModal(howModal));
  }

  // Close modals on clicking backdrop
  [learningModal, factModal, howModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  // --- Search Overlay ---
  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      const input = document.getElementById('search-input');
      if (input) setTimeout(() => input.focus(), 50);
    });
  }
  if (closeSearch && searchOverlay) {
    closeSearch.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });
  }

  // Search input filter tags
  document.querySelectorAll('.quick-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const input = document.getElementById('search-input');
      if (input) {
        input.value = tag.textContent;
      }
    });
  });

  // --- Notifications Popover Toggle ---
  if (notificationBtn && notificationPopover) {
    notificationBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notificationPopover.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!notificationPopover.contains(e.target) && e.target !== notificationBtn) {
        notificationPopover.classList.remove('active');
      }
    });
  }

  // --- Profile Dropdown ---
  if (userProfileBtn) {
    userProfileBtn.addEventListener('click', () => {
      if (window.VirasatPassportService) {
        window.location.href = 'passport.html';
      } else {
        alert('Explorer Profile: Level 4 Heritage Guardian\nRank: Scribe of Antiquity');
      }
    });
  }

  // --- Keyboard Shortcuts (ESC to close) ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [learningModal, factModal, howModal].forEach(closeModal);
      if (searchOverlay) searchOverlay.classList.remove('active');
      if (notificationPopover) notificationPopover.classList.remove('active');
    }
  });

  // --- Animated Numbers Counter ---
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const duration = 1200; // ms
    const increment = Math.ceil(target / (duration / 25));

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = count;
        setTimeout(updateCount, 25);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});
