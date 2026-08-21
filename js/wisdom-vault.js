/**
 * ==========================================================================
 * VIRASAT - WISDOM VAULT VERIFICATION & AUDIO PLAYBACK ENGINE
 * ==========================================================================
 */

const WisdomVault = (() => {
  // Default Base Verified Stories
  const defaultVerifiedStories = [
    {
      id: 'story-1',
      category: 'Recipe',
      title: 'The secret behind our festive laddoos',
      author: 'Dadi Shanta Devi',
      location: 'Punjab',
      duration: '05:23',
      durationSeconds: 323,
      excerpt: 'Dadi Shanta shares the traditional method down in our family for over 100 years.',
      image: 'assets/images/recipe-laddoos.jpg',
      fullStory: 'Besan laddoos made during Diwali hold the fragrance of roasted gram flour, pure desi ghee, and ground cardamom. Passed down through four generations in Amritsar, this recipe requires patience—roasting on a slow flame until the aroma fills every corner of the house.',
      status: 'verified',
      isDefault: true
    },
    {
      id: 'story-2',
      category: 'Craft',
      title: 'Spinning stories with the charkha',
      author: 'Babu Harbans Singh',
      location: 'Gujarat',
      duration: '04:11',
      durationSeconds: 251,
      excerpt: 'Babuji explains how the charkha was a symbol of freedom, self-reliance, and pride.',
      image: 'assets/images/craft-charkha.jpg',
      fullStory: 'In the quiet mornings of Sabarmati, the rhythmic hum of the wooden charkha was not merely about spinning thread—it was about spinning unity and self-reliance. Babuji reflects on how patience and precision can weave a nation together.',
      status: 'verified',
      isDefault: true
    },
    {
      id: 'story-3',
      category: 'Tradition',
      title: 'Why we paint before we pray',
      author: 'Dadi Parvati Bai',
      location: 'Madhya Pradesh',
      duration: '06:07',
      durationSeconds: 367,
      excerpt: 'The meaning behind our village art the first look of all on the art of the divine.',
      image: 'assets/images/tradition-folk-art.jpg',
      fullStory: 'Before every harvest festival, the women of our village mix rice paste, lime, and natural ochre to paint sacred murals on our mud walls. Each peacock, tree, and deity is an invitation to prosperity and ancestral protection.',
      status: 'verified',
      isDefault: true
    },
    {
      id: 'story-4',
      category: 'Folk Tale',
      title: 'The brave princess of our village',
      author: 'Nana Jora Rana',
      location: 'Rajasthan',
      duration: '13:42',
      durationSeconds: 822,
      excerpt: 'A forgotten folk tale of courage, known photos, recipe, wisdom and a promise kept.',
      image: 'assets/images/elder-storyteller.jpg',
      fullStory: 'Under the starry desert sky of Jaisalmer, Nana Jora recounts the oral ballad of Princess Rupali, who defended the oasis wells during a severe drought and united warring clans with her wisdom and compassion.',
      status: 'verified',
      isDefault: true
    }
  ];

  let verifiedStories = [];
  let pendingStories = [];

  let currentPlayingStory = null;
  let isPlaying = false;
  let playbackInterval = null;
  let currentPlaybackSeconds = 0;
  let audioContext = null;
  let synthOscillators = [];
  let audioElement = null;

  // Impact stats
  let stats = {
    stories: 1248,
    elders: 356,
    languages: 28,
    communities: 195,
    minutes: 9532,
    contributors: 102
  };

  function init() {
    loadStoredData();
    renderAllSections();
    setupTabs();
    setupSearch();
    setupTopicCarousel();
    setupAudioPlayerUI();
  }

  function loadStoredData() {
    try {
      const storedVerified = localStorage.getItem('virasat_verified_stories');
      if (storedVerified) {
        const parsed = JSON.parse(storedVerified);
        verifiedStories = [...parsed, ...defaultVerifiedStories];
      } else {
        verifiedStories = [...defaultVerifiedStories];
      }

      const storedPending = localStorage.getItem('virasat_pending_stories');
      if (storedPending) {
        pendingStories = JSON.parse(storedPending);
      } else {
        pendingStories = [];
      }

      const storedStats = localStorage.getItem('virasat_stats');
      if (storedStats) {
        stats = { ...stats, ...JSON.parse(storedStats) };
      }
      updateStatsDisplay();
    } catch (e) {
      console.warn('LocalStorage error:', e);
      verifiedStories = [...defaultVerifiedStories];
      pendingStories = [];
    }
  }

  function saveStoredData() {
    try {
      const customVerified = verifiedStories.filter(s => !s.isDefault);
      localStorage.setItem('virasat_verified_stories', JSON.stringify(customVerified));
      localStorage.setItem('virasat_pending_stories', JSON.stringify(pendingStories));
      localStorage.setItem('virasat_stats', JSON.stringify(stats));
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  }

  function updateStatsDisplay() {
    // Total verified stories count
    const totalCount = stats.stories;

    // Hero Stats
    const heroStories = document.getElementById('heroStatStories');
    const heroElders = document.getElementById('heroStatElders');
    const heroLangs = document.getElementById('heroStatLangs');
    const heroComms = document.getElementById('heroStatComms');

    if (heroStories) heroStories.textContent = totalCount.toLocaleString();
    if (heroElders) heroElders.textContent = stats.elders.toLocaleString();
    if (heroLangs) heroLangs.textContent = stats.languages.toLocaleString();
    if (heroComms) heroComms.textContent = stats.communities.toLocaleString();

    // Sidebar Stats
    const sideStories = document.getElementById('sideStatStories');
    const sideMins = document.getElementById('sideStatMins');
    const sideContribs = document.getElementById('sideStatContribs');

    if (sideStories) sideStories.textContent = totalCount.toLocaleString();
    if (sideMins) sideMins.textContent = stats.minutes.toLocaleString();
    if (sideContribs) sideContribs.textContent = stats.contributors.toLocaleString();

    // Pending Tab Badge
    const pendingTabBadge = document.getElementById('pendingTabBadge');
    if (pendingTabBadge) {
      pendingTabBadge.textContent = pendingStories.length;
      pendingTabBadge.style.display = pendingStories.length > 0 ? 'inline-block' : 'none';
    }
  }

  function renderAllSections() {
    renderVerifiedStories();
    renderPendingQueue();
    updateStatsDisplay();
  }

  // ==========================================================================
  // 1. RENDER VERIFIED STORIES (MAIN ARCHIVE - GREEN TICK BADGES)
  // ==========================================================================

  function renderVerifiedStories(filterType = 'all') {
    const grid = document.getElementById('featuredStoriesGrid');
    if (!grid) return;

    grid.innerHTML = '';

    verifiedStories.forEach((story) => {
      const card = document.createElement('article');
      card.className = `story-card ${story.justPromoted ? 'just-promoted' : ''}`;
      card.setAttribute('data-story-id', story.id);
      card.setAttribute('data-category', story.category.toLowerCase());

      card.innerHTML = `
        <div class="story-thumbnail-pane">
          <img src="${story.image}" alt="${escapeHtml(story.title)}" class="story-thumb-img">
          <span class="story-badge-tag">${escapeHtml(story.category)}</span>
          
          <!-- GREEN TICK BADGE (Verified Archive) -->
          <div class="green-tick-badge" title="✓ Verified Oral Archive (Passed Authenticity & Cultural Review)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>

          <div class="story-duration-pill" title="Click to Play Audio">
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <span>${story.duration}</span>
          </div>
        </div>

        <div class="story-info-pane">
          <div>
            <div class="story-header-row">
              <h3 class="story-headline">${escapeHtml(story.title)}</h3>
              <div class="card-actions-top">
                <button class="bookmark-btn ${story.saved ? 'saved' : ''}" title="Save Story">
                  <svg viewBox="0 0 24 24" fill="${story.saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                </button>
                <button class="delete-archive-btn" title="Delete Archive Entry" data-delete-id="${story.id}">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
            <p class="story-excerpt">${escapeHtml(story.excerpt)}</p>
          </div>
          <div class="story-meta-footer">
            <div class="story-teller-wrap">
              <span class="teller-avatar-dot">${story.category === 'Recipe' || story.author.toLowerCase().includes('dadi') ? '👵' : '👴'}</span>
              <span>${escapeHtml(story.author)}</span>
            </div>
            <span class="story-location-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              ${escapeHtml(story.location)}
            </span>
          </div>
        </div>
      `;

      // Click card to open audio player
      card.addEventListener('click', (e) => {
        if (e.target.closest('.bookmark-btn') || e.target.closest('.delete-archive-btn')) return;
        openStoryPlayer(story);
      });

      // Bookmark
      const bookmarkBtn = card.querySelector('.bookmark-btn');
      bookmarkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        story.saved = !story.saved;
        bookmarkBtn.classList.toggle('saved');
        const svg = bookmarkBtn.querySelector('svg');
        svg.setAttribute('fill', story.saved ? 'currentColor' : 'none');
        saveStoredData();
      });

      // Delete action
      const delBtn = card.querySelector('.delete-archive-btn');
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        confirmAndDeleteStory(story.id, 'verified');
      });

      grid.appendChild(card);
    });
  }

  // ==========================================================================
  // 2. RENDER UNDER VERIFICATION QUEUE SECTION (SEPARATE SECTION)
  // ==========================================================================

  function renderPendingQueue() {
    const queueGrid = document.getElementById('pendingStoriesGrid');
    const emptyMsg = document.getElementById('emptyQueueMessage');
    const pendingCountBadge = document.getElementById('pendingQueueCount');

    if (!queueGrid) return;

    if (pendingCountBadge) {
      pendingCountBadge.textContent = `${pendingStories.length} Submissions`;
    }

    if (pendingStories.length === 0) {
      queueGrid.innerHTML = '';
      if (emptyMsg) emptyMsg.style.display = 'block';
      return;
    }

    if (emptyMsg) emptyMsg.style.display = 'none';
    queueGrid.innerHTML = '';

    pendingStories.forEach((story) => {
      const card = document.createElement('div');
      card.className = 'pending-card';
      card.setAttribute('data-pending-id', story.id);

      card.innerHTML = `
        <div class="pending-card-top">
          <div class="pending-thumb">
            <img src="${story.image}" alt="${escapeHtml(story.title)}">
            <span class="pending-tick-badge">⏳ Testing</span>
          </div>
          <div class="pending-card-details">
            <h4 class="pending-card-title">${escapeHtml(story.title)}</h4>
            <div class="pending-meta">
              <span>👤 ${escapeHtml(story.author)}</span> • <span>📍 ${escapeHtml(story.location)}</span>
            </div>
            <div class="pending-status-chip">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>Under Verification • Audio Clarity & Dialect Check</span>
            </div>
          </div>
        </div>

        <div class="pending-actions-bar">
          <button class="btn-test-audio" data-test-id="${story.id}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Test Audio (${story.duration})
          </button>
          
          <div style="display: flex; gap: 6px;">
            <button class="btn-approve-verify" data-approve-id="${story.id}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Approve & Verify
            </button>
            <button class="btn-reject-delete" data-reject-id="${story.id}" title="Reject & Delete">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>
      `;

      // Test Audio
      card.querySelector('.btn-test-audio').addEventListener('click', () => {
        openStoryPlayer(story);
      });

      // Approve & Verify
      card.querySelector('.btn-approve-verify').addEventListener('click', () => {
        verifyAndPromoteStory(story.id);
      });

      // Reject / Delete
      card.querySelector('.btn-reject-delete').addEventListener('click', () => {
        confirmAndDeleteStory(story.id, 'pending');
      });

      queueGrid.appendChild(card);
    });
  }

  // ==========================================================================
  // ADD STORY UNDER VERIFICATION (INITIAL INGESTION)
  // ==========================================================================

  function addStoryForVerification(storyObj) {
    const fullObj = {
      id: 'story-pending-' + Date.now(),
      category: storyObj.category || 'Oral Wisdom',
      title: storyObj.title || 'Living Memory from our Elder',
      author: storyObj.author || 'Respected Elder',
      location: storyObj.location || 'India',
      duration: storyObj.duration || '02:30',
      durationSeconds: storyObj.durationSeconds || 150,
      excerpt: storyObj.excerpt || (storyObj.fullStory ? storyObj.fullStory.slice(0, 85) + '...' : 'A timeless memory submitted for verification and archive.'),
      image: storyObj.image || 'assets/images/hero-elder-child.jpg',
      fullStory: storyObj.fullStory || storyObj.excerpt || 'Oral memory submitted for authenticity verification.',
      audioUrl: storyObj.audioUrl || null,
      status: 'pending',
      timestamp: Date.now()
    };

    pendingStories.unshift(fullObj);
    saveStoredData();
    renderAllSections();

    showToast(`⏳ "${fullObj.title}" submitted to Verification Lab for testing & review!`);

    // Smooth scroll to the verification queue
    const queueSec = document.getElementById('verificationQueueSection');
    if (queueSec) {
      queueSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // ==========================================================================
  // APPROVE & PROMOTE STORY TO VERIFIED MAIN ARCHIVE (GETS GREEN TICK)
  // ==========================================================================

  function verifyAndPromoteStory(storyId) {
    const index = pendingStories.findIndex(s => s.id === storyId);
    if (index === -1) return;

    const [story] = pendingStories.splice(index, 1);
    story.status = 'verified';
    story.justPromoted = true;

    // Add to verified stories at the top
    verifiedStories.unshift(story);

    // Update stats
    stats.stories += 1;
    stats.contributors += 1;
    stats.minutes += Math.max(1, Math.round(story.durationSeconds / 60));
    stats.elders += 1;

    saveStoredData();
    renderAllSections();

    showToast(`✅ Verified! "${story.title}" now has the Official Green Badge in the Wisdom Vault!`);

    // Scroll to the verified grid
    const mainGrid = document.getElementById('featuredStoriesGrid');
    if (mainGrid) {
      mainGrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // ==========================================================================
  // DELETE ARCHIVE / REJECT ACTION
  // ==========================================================================

  function confirmAndDeleteStory(storyId, sectionType) {
    const confirmDelete = window.confirm('Are you sure you want to delete this wisdom archive from the platform?');
    if (!confirmDelete) return;

    if (sectionType === 'pending') {
      pendingStories = pendingStories.filter(s => s.id !== storyId);
      showToast('🗑️ Submission deleted from verification queue.');
    } else {
      const storyToDelete = verifiedStories.find(s => s.id === storyId);
      if (storyToDelete) {
        stats.stories = Math.max(1248, stats.stories - 1);
      }
      verifiedStories = verifiedStories.filter(s => s.id !== storyId);
      showToast('🗑️ Archive entry deleted successfully.');
    }

    saveStoredData();
    renderAllSections();
  }

  // ==========================================================================
  // REAL AUDIO & SYNTHESIZER PLAYBACK ENGINE
  // ==========================================================================

  function setupAudioPlayerUI() {
    const playBtn = document.getElementById('playerPlayToggleBtn');
    const rail = document.getElementById('playerProgressRail');

    if (playBtn) {
      playBtn.addEventListener('click', togglePlayState);
    }

    if (rail) {
      rail.addEventListener('click', (e) => {
        if (!currentPlayingStory) return;
        const rect = rail.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = Math.max(0, Math.min(1, clickX / rect.width));
        currentPlaybackSeconds = Math.floor(pct * currentPlayingStory.durationSeconds);
        updatePlaybackUI();
      });
    }

    const playerModal = document.getElementById('storyPlayerModal');
    if (playerModal) {
      playerModal.querySelectorAll('.modal-close-btn, .btn-modal-close').forEach(b => {
        b.addEventListener('click', stopAudioPlayback);
      });
    }
  }

  function openStoryPlayer(story) {
    const modal = document.getElementById('storyPlayerModal');
    if (!modal) return;

    currentPlayingStory = story;
    stopAudioPlayback();

    document.getElementById('playerHeroImg').src = story.image;
    document.getElementById('playerTitle').textContent = story.title;
    document.getElementById('playerAuthor').textContent = `${story.author} • ${story.location}`;
    document.getElementById('playerDuration').textContent = story.duration;
    document.getElementById('playerCurrentTime').textContent = '00:00';
    document.getElementById('playerExcerpt').textContent = story.fullStory;

    const badge = document.getElementById('playerCategoryBadge');
    if (badge) {
      if (story.status === 'verified') {
        badge.innerHTML = `<span style="color: #2e7d32; font-weight: 700;">✓ Verified Oral Archive</span>`;
        badge.style.background = '#e8f5e9';
      } else {
        badge.innerHTML = `<span style="color: #e65100; font-weight: 700;">⏳ In Verification Testing</span>`;
        badge.style.background = '#fff3e0';
      }
    }

    const progressBar = document.getElementById('playerProgressBarFill');
    if (progressBar) progressBar.style.width = '0%';

    modal.classList.add('open');

    setTimeout(() => {
      startAudioPlayback();
    }, 250);
  }

  function togglePlayState() {
    if (isPlaying) {
      pauseAudioPlayback();
    } else {
      startAudioPlayback();
    }
  }

  function startAudioPlayback() {
    if (!currentPlayingStory) return;
    isPlaying = true;
    updatePlayButtonIcon(true);

    if (currentPlayingStory.audioUrl) {
      if (!audioElement) {
        audioElement = new Audio(currentPlayingStory.audioUrl);
        audioElement.onended = () => {
          stopAudioPlayback();
        };
      }
      audioElement.currentTime = currentPlaybackSeconds;
      audioElement.play().catch(e => console.warn('Audio play error:', e));
    } else {
      playAmbientSynthNotes();
    }

    if (playbackInterval) clearInterval(playbackInterval);
    playbackInterval = setInterval(() => {
      currentPlaybackSeconds++;
      if (currentPlaybackSeconds >= currentPlayingStory.durationSeconds) {
        stopAudioPlayback();
        return;
      }
      updatePlaybackUI();
    }, 1000);
  }

  function pauseAudioPlayback() {
    isPlaying = false;
    updatePlayButtonIcon(false);
    if (playbackInterval) clearInterval(playbackInterval);
    if (audioElement) audioElement.pause();
    stopSynthOscillators();
  }

  function stopAudioPlayback() {
    isPlaying = false;
    currentPlaybackSeconds = 0;
    updatePlayButtonIcon(false);
    if (playbackInterval) clearInterval(playbackInterval);
    if (audioElement) {
      audioElement.pause();
      audioElement = null;
    }
    stopSynthOscillators();
    updatePlaybackUI();
  }

  function updatePlayButtonIcon(playing) {
    const btn = document.getElementById('playerPlayToggleBtn');
    if (!btn) return;
    if (playing) {
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
      btn.setAttribute('title', 'Pause Audio');
    } else {
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
      btn.setAttribute('title', 'Play Audio');
    }
  }

  function updatePlaybackUI() {
    const timeEl = document.getElementById('playerCurrentTime');
    const fillEl = document.getElementById('playerProgressBarFill');
    if (!currentPlayingStory) return;

    const mins = String(Math.floor(currentPlaybackSeconds / 60)).padStart(2, '0');
    const secs = String(currentPlaybackSeconds % 60).padStart(2, '0');
    if (timeEl) timeEl.textContent = `${mins}:${secs}`;

    if (fillEl && currentPlayingStory.durationSeconds > 0) {
      const pct = (currentPlaybackSeconds / currentPlayingStory.durationSeconds) * 100;
      fillEl.style.width = `${Math.min(100, pct)}%`;
    }
  }

  function playAmbientSynthNotes() {
    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      stopSynthOscillators();

      const freqs = [138.59, 207.65, 277.18, 415.30];
      const masterGain = audioContext.createGain();
      masterGain.gain.setValueAtTime(0.08, audioContext.currentTime);
      masterGain.connect(audioContext.destination);

      freqs.forEach(freq => {
        const osc = audioContext.createOscillator();
        const g = audioContext.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioContext.currentTime);
        g.gain.setValueAtTime(0.05, audioContext.currentTime);

        osc.connect(g);
        g.connect(masterGain);
        osc.start();
        synthOscillators.push(osc);
      });
    } catch (e) {
      console.warn('Web Audio error:', e);
    }
  }

  function stopSynthOscillators() {
    synthOscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    synthOscillators = [];
  }

  // ==========================================================================
  // TABS & SEARCH
  // ==========================================================================

  function setupTabs() {
    const tabs = document.querySelectorAll('.vault-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filterType = tab.getAttribute('data-tab');
        
        if (filterType === 'pending') {
          const queueSec = document.getElementById('verificationQueueSection');
          if (queueSec) queueSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          renderVerifiedStories(filterType);
        }
      });
    });
  }

  function setupSearch() {
    const searchInput = document.getElementById('vaultSearchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.story-card');

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  function setupTopicCarousel() {
    const carousel = document.getElementById('topicsCarousel');
    const nextBtn = document.getElementById('topicNextBtn');
    if (!carousel || !nextBtn) return;

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 240, behavior: 'smooth' });
    });
  }

  function showToast(message) {
    let toast = document.getElementById('virasatToastNotification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'virasatToastNotification';
      toast.className = 'virasat-toast';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-sparkle">🏛️</span>
        <span>${escapeHtml(message)}</span>
      </div>
    `;

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  return {
    init,
    addStoryForVerification,
    verifyAndPromoteStory,
    confirmAndDeleteStory,
    openStoryPlayer,
    showToast
  };
})();

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', WisdomVault.init);
}
