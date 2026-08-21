/**
 * ==========================================================================
 * VIRASAT - WISDOM VAULT CORE LOGIC & AUDIO PLAYBACK ENGINE
 * ==========================================================================
 */

const WisdomVault = (() => {
  // Default Base Stories
  const defaultStories = [
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
      audioTone: 'raga-bhupali'
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
      audioTone: 'raga-desh'
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
      audioTone: 'raga-bhairavi'
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
      audioTone: 'raga-malkauns'
    }
  ];

  let stories = [];
  let currentPlayingStory = null;
  let isPlaying = false;
  let playbackInterval = null;
  let currentPlaybackSeconds = 0;
  let audioContext = null;
  let synthOscillators = [];
  let audioElement = null;

  // Impact stats state
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
    renderStoriesGrid();
    setupTabs();
    setupSearch();
    setupTopicCarousel();
    setupAudioPlayerUI();
  }

  function loadStoredData() {
    try {
      const storedStories = localStorage.getItem('virasat_custom_stories');
      if (storedStories) {
        const parsed = JSON.parse(storedStories);
        stories = [...parsed, ...defaultStories];
      } else {
        stories = [...defaultStories];
      }

      const storedStats = localStorage.getItem('virasat_stats');
      if (storedStats) {
        stats = { ...stats, ...JSON.parse(storedStats) };
      }
      updateStatsDisplay();
    } catch (e) {
      console.warn('LocalStorage error:', e);
      stories = [...defaultStories];
    }
  }

  function saveStoredData() {
    try {
      const customOnly = stories.filter(s => s.isUserCreated);
      localStorage.setItem('virasat_custom_stories', JSON.stringify(customOnly));
      localStorage.setItem('virasat_stats', JSON.stringify(stats));
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  }

  function updateStatsDisplay() {
    // Hero Stats
    const heroStories = document.getElementById('heroStatStories');
    const heroElders = document.getElementById('heroStatElders');
    const heroLangs = document.getElementById('heroStatLangs');
    const heroComms = document.getElementById('heroStatComms');

    if (heroStories) heroStories.textContent = stats.stories.toLocaleString();
    if (heroElders) heroElders.textContent = stats.elders.toLocaleString();
    if (heroLangs) heroLangs.textContent = stats.languages.toLocaleString();
    if (heroComms) heroComms.textContent = stats.communities.toLocaleString();

    // Sidebar Stats
    const sideStories = document.getElementById('sideStatStories');
    const sideMins = document.getElementById('sideStatMins');
    const sideContribs = document.getElementById('sideStatContribs');

    if (sideStories) sideStories.textContent = stats.stories.toLocaleString();
    if (sideMins) sideMins.textContent = stats.minutes.toLocaleString();
    if (sideContribs) sideContribs.textContent = stats.contributors.toLocaleString();
  }

  function renderStoriesGrid(filterType = 'all') {
    const grid = document.getElementById('featuredStoriesGrid');
    if (!grid) return;

    grid.innerHTML = '';

    stories.forEach((story, idx) => {
      const card = document.createElement('article');
      card.className = `story-card ${story.isUserCreated ? 'just-added-card' : ''}`;
      card.setAttribute('data-story-id', story.id);
      card.setAttribute('data-category', story.category.toLowerCase());

      card.innerHTML = `
        <div class="story-thumbnail-pane">
          <img src="${story.image}" alt="${escapeHtml(story.title)}" class="story-thumb-img">
          <span class="story-badge-tag">${escapeHtml(story.category)}</span>
          ${story.isUserCreated ? '<span class="new-archive-badge">New Archive</span>' : ''}
          <div class="story-duration-pill" title="Click to Play">
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <span>${story.duration}</span>
          </div>
        </div>
        <div class="story-info-pane">
          <div>
            <div class="story-header-row">
              <h3 class="story-headline">${escapeHtml(story.title)}</h3>
              <button class="bookmark-btn ${story.saved ? 'saved' : ''}" title="Save Story">
                <svg viewBox="0 0 24 24" fill="${story.saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              </button>
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

      // Event listener to open player
      card.addEventListener('click', (e) => {
        if (e.target.closest('.bookmark-btn')) return;
        openStoryPlayer(story);
      });

      // Bookmark button
      const bookmarkBtn = card.querySelector('.bookmark-btn');
      bookmarkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        story.saved = !story.saved;
        bookmarkBtn.classList.toggle('saved');
        const svg = bookmarkBtn.querySelector('svg');
        svg.setAttribute('fill', story.saved ? 'currentColor' : 'none');
        saveStoredData();
      });

      grid.appendChild(card);
    });
  }

  function addNewStory(storyObj) {
    const fullObj = {
      id: 'story-' + Date.now(),
      category: storyObj.category || 'Oral Wisdom',
      title: storyObj.title || 'Living Memory from our Elder',
      author: storyObj.author || 'Respected Elder',
      location: storyObj.location || 'India',
      duration: storyObj.duration || '02:30',
      durationSeconds: storyObj.durationSeconds || 150,
      excerpt: storyObj.excerpt || (storyObj.fullStory ? storyObj.fullStory.slice(0, 85) + '...' : 'A timeless memory documented for the living archive.'),
      image: storyObj.image || 'assets/images/hero-elder-child.jpg',
      fullStory: storyObj.fullStory || storyObj.excerpt || 'Oral memory preserved in the Virasat Elder Wisdom Vault.',
      audioUrl: storyObj.audioUrl || null,
      isUserCreated: true,
      timestamp: Date.now()
    };

    // Prepend to stories array
    stories.unshift(fullObj);

    // Update stats
    stats.stories += 1;
    stats.contributors += 1;
    stats.minutes += Math.max(1, Math.round(fullObj.durationSeconds / 60));
    stats.elders += 1;

    saveStoredData();
    updateStatsDisplay();
    renderStoriesGrid();

    // Show celebration toast
    showToast(`✨ "${fullObj.title}" has been preserved in the Elder Wisdom Vault!`);

    // Smooth scroll to the featured section
    const target = document.getElementById('featuredStoriesGrid');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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

    // Modal close stops audio
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
    document.getElementById('playerCategoryBadge').textContent = story.isUserCreated ? 'Newly Archived Voice' : 'Verified Oral Archive';

    const progressBar = document.getElementById('playerProgressBarFill');
    if (progressBar) progressBar.style.width = '0%';

    modal.classList.add('open');

    // Auto-start playback on open
    setTimeout(() => {
      startAudioPlayback();
    }, 200);
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
      // Real recorded or uploaded audio
      if (!audioElement) {
        audioElement = new Audio(currentPlayingStory.audioUrl);
        audioElement.onended = () => {
          stopAudioPlayback();
        };
      }
      audioElement.currentTime = currentPlaybackSeconds;
      audioElement.play().catch(e => console.warn('Audio play error:', e));
    } else {
      // Synthesize ambient cultural Indian melody (Tanpura + Bansuri flute drone)
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

  // Web Audio Melodic Drone (Tanpura + Bansuri harmonics)
  function playAmbientSynthNotes() {
    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      stopSynthOscillators();

      // Root Sa (C#3 / 138.59 Hz) + Pa (G#3 / 207.65 Hz) drone
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
        filterStories(filterType);
      });
    });
  }

  function filterStories(filterType) {
    const cards = document.querySelectorAll('.story-card');
    cards.forEach(card => {
      const cat = card.getAttribute('data-category');
      if (filterType === 'all' || filterType === 'featured') {
        card.style.display = 'flex';
      } else if (filterType === 'recent') {
        card.style.display = 'flex';
      } else if (filterType === 'topic') {
        card.style.display = 'flex';
      } else {
        card.style.display = 'flex';
      }
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
    addNewStory,
    openStoryPlayer,
    showToast
  };
})();

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', WisdomVault.init);
}
