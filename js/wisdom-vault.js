/**
 * VIRASAT - ELDER WISDOM VAULT ENGINE
 * Intergenerational Knowledge, Community Verification & Passport Integration
 */

const WISDOM_STORAGE_KEY = 'virasat_wisdom_stories_v2';
const BOOKMARKS_STORAGE_KEY = 'virasat_wisdom_bookmarks';

const DEFAULT_STORIES = [
  {
    id: "ajrakh-khatri-lore",
    title: "The 16-Step Indigo Resist Alchemy of Dhamadka",
    elderName: "Ismail Mohammad Khatri",
    elderAge: 79,
    category: "crafts",
    categoryLabel: "Traditional Crafts",
    region: "Kutch, Gujarat",
    regionKey: "gujarat",
    image: "images/craft-charkha.jpg",
    excerpt: "For four centuries, our clan has never used chemical indigo. The secret lies in sour lime, jaggery water, and the exact moon cycle when the indigo ferments.",
    fullStory: "Ajrakh is not merely cloth; it is astronomy, alchemy, and prayers printed on cotton. The indigo plant leaves are steeped in earthen pots with wild iron scrap, tamarind pulp, and jaggery water. My grandfather taught me that the river water temperature at 4 AM changes the depth of blue. We print with carved teak blocks, dipping into resist paste made from gum and river clay. When the cloth dries under the hot Kutch sun, it breathes the story of our desert.",
    moral: "Patience and natural time cannot be hurried by machines.",
    verifiedCount: 4,
    verifiedBy: ["Master Weaver Guild of Bhuj", "National Craft Heritage Trust", "Dr. A. Verma (Oral Historian)"],
    audioLength: "03:15",
    contributor: "Sufiyan Khatri (Grandson)",
    date: "Aug 20, 2026"
  },
  {
    id: "gond-laddu-kamla-devi",
    title: "Ancestral Winter Immunity Gond Ke Laddu",
    elderName: "Dadi Kamla Devi",
    elderAge: 84,
    category: "recipes",
    categoryLabel: "Ancestral Recipes",
    region: "Shekhawati, Rajasthan",
    regionKey: "rajasthan",
    image: "images/recipe-laddoos.jpg",
    excerpt: "Every winter solstice, grandmother would heat pure A2 cow ghee in a heavy iron kadai to puff the hand-harvested acacia tree gum (Babool gond).",
    fullStory: "Our Thar winters are sharp, but our elders never suffered joint pains or cold. The secret was our winter gond laddus. We gather natural gum from the babool tree, puff it carefully in slow-heated cow ghee until it crackles like popcorn. We grind whole wheat on hand stone-mills (Chakki), blend crushed almonds, fox-nuts (makhana), dry ginger (sonth), and wild green cardamom with organic desi jaggery. A single laddu with warm milk at sunrise kept farmworkers energized till dusk.",
    moral: "Food prepared according to seasonal rhythms heals without medicine.",
    verifiedCount: 5,
    verifiedBy: ["Shekhawati Women's Heritage Collective", "Ayurvedic Heritage Circle", "Traditional Kitchens of Rajasthan"],
    audioLength: "02:45",
    contributor: "Aarav Sharma (Grandson)",
    date: "Aug 21, 2026"
  },
  {
    id: "champaran-charkha-songs",
    title: "Charkha Spinning Hymns of the 1917 Awakening",
    elderName: "Babuji Ramkishan Prasad",
    elderAge: 91,
    category: "folklore",
    categoryLabel: "Oral Histories",
    region: "Champaran, Bihar",
    regionKey: "bihar",
    image: "images/elder-storyteller.jpg",
    excerpt: "My mother sang the rhythmic verses while spinning coarse desi cotton. Every turn of the wooden wheel was accompanied by an unrecorded oral ballad.",
    fullStory: "During the indigo farmers' Satyagraha, printed pamphlets were seized by authorities, so the freedom message traveled in spinning songs called 'Charkha Geet'. My mother spun fine yarn by the oil lantern light and sang of the sacred river Gandak and our fertile soil. The cadence of the wheel dictated the metre of the poetry. To this day, when I hear the low hum of a charkha, I can hear the voices of fifty village women singing together.",
    moral: "Oral song preserves what ink and paper could not conceal.",
    verifiedCount: 3,
    verifiedBy: ["Bihar Folk Research Foundation", "Oral History Archive of Patna"],
    audioLength: "04:10",
    contributor: "Pooja Prasad (Great-Granddaughter)",
    date: "Aug 22, 2026"
  },
  {
    id: "kathakali-facial-pigments",
    title: "Natural Stone Grinding for Kathakali Face Pigments",
    elderName: "Asan Madhavan Nair",
    elderAge: 82,
    category: "legends",
    categoryLabel: "Living Legends",
    region: "Palakkad, Kerala",
    regionKey: "kerala",
    image: "images/tradition-folk-art.jpg",
    excerpt: "The sacred green (Paccha) and red (Kathi) pigments are hand-ground from natural stone minerals with cold-pressed coconut oil for 12 continuous hours.",
    fullStory: "A Kathakali actor does not apply paint; he invokes the deities and demons through mineral offerings. For the pure green face of noble heroes (Paccha), we grind crushed Manayola stones and blue indigo on a flat granite stone with pure coconut oil. The paste must be velvety smooth so it never cracks during four hours of intense facial abhinaya under the glare of the brass oil lamp (Aattavilakku). The process itself is a meditative prayer before stepping onto the stage.",
    moral: "Devotion in preparation is the true soul of classical performance.",
    verifiedCount: 4,
    verifiedBy: ["Kerala Kalamandalam Custodians", "Temple Arts Guild of Malabar"],
    audioLength: "03:40",
    contributor: "Unnikrishnan Nair (Disciple)",
    date: "Aug 19, 2026"
  },
  {
    id: "bundi-stepwell-rituals",
    title: "Sacred Water Chants of the Raniji Ki Baori Stepwell",
    elderName: "Pandit Gangadhar Vyas",
    elderAge: 86,
    category: "folklore",
    categoryLabel: "Oral Histories",
    region: "Bundi, Rajasthan",
    regionKey: "rajasthan",
    image: "images/tree-watermark.jpg",
    excerpt: "At each descending tier of the stepwell, our village women sang specific ragas dedicated to Varuna to invite underground aquifers during drought.",
    fullStory: "Our stepwells were never just cisterns; they were subterranean water temples. During the dry month of Jyeshtha, families would gather at the subterranean pavilion 50 steps deep where the air was 10 degrees cooler. The elders would lead the Varuna Suktam and regional folk ballads thanking the Mother Earth for storing monsoon rainfall. Children learned the sacred geography of underground aquifers through these songs.",
    moral: "Water is life's most sacred heritage to be guarded collectively.",
    verifiedCount: 3,
    verifiedBy: ["Rajasthan Stepwell Conservation Society"],
    audioLength: "03:00",
    contributor: "Neha Vyas (Granddaughter)",
    date: "Aug 18, 2026"
  },
  {
    id: "bengal-dokra-lost-wax",
    title: "The Lost-Wax Clay & Bee-Wax Casting Lore of Bikna",
    elderName: "Gokul Karmakar",
    elderAge: 76,
    category: "crafts",
    categoryLabel: "Traditional Crafts",
    region: "Bankura, West Bengal",
    regionKey: "west-bengal",
    image: "images/craft-charkha.jpg",
    excerpt: "4,000 years of Dhokra metal craft passed down without written blueprints. We mix ant-hill clay, rice husk, and pure bee-wax strings by hand.",
    fullStory: "Our Dhokra craft is the exact same process used to cast the Dancing Girl of Mohenjo-Daro four millennia ago. We shape an inner core of ant-hill clay, wind fine threads of natural bee-wax over it to carve delicate motifs, then envelop it in another thick layer of river silt clay. When fired in our pit kilns with dry sal wood, the molten brass fills the exact space left behind as the wax melts away. No two pieces are ever identical.",
    moral: "Imperfection in handmade craft is the watermark of human touch.",
    verifiedCount: 4,
    verifiedBy: ["Bengal Folk Crafts Guild", "Eastern Zonal Cultural Center"],
    audioLength: "03:20",
    contributor: "Subir Karmakar (Son)",
    date: "Aug 17, 2026"
  }
];

class VirasatWisdomVaultApp {
  constructor() {
    this.stories = this.loadStories();
    this.bookmarks = this.loadBookmarks();
    this.activeCategory = 'all';
    this.activeRegion = 'all';
    this.searchQuery = '';
    this.currentlyPlayingId = null;
    this.audioInterval = null;

    this.initElements();
    this.bindEvents();
    this.renderStories();
    this.updateCategoryCounts();
    this.updateHeaderPassportXP();
  }

  loadStories() {
    try {
      const stored = localStorage.getItem(WISDOM_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Storage read error:', e);
    }
    return [...DEFAULT_STORIES];
  }

  saveStories() {
    try {
      localStorage.setItem(WISDOM_STORAGE_KEY, JSON.stringify(this.stories));
    } catch (e) {
      console.warn('Storage write error:', e);
    }
  }

  loadBookmarks() {
    try {
      const stored = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Bookmarks read error:', e);
    }
    return [];
  }

  saveBookmarks() {
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(this.bookmarks));
    } catch (e) {
      console.warn('Bookmarks write error:', e);
    }
  }

  initElements() {
    this.grid = document.getElementById('vaultStoriesGrid');
    this.searchInput = document.getElementById('vaultSearchInput');
    this.regionSelect = document.getElementById('vaultRegionSelect');
    this.categoryPills = document.querySelectorAll('.category-pill');

    this.submitModal = document.getElementById('submitStoryModal');
    this.openSubmitModalBtn = document.getElementById('openSubmitModalBtn');
    this.heroAddStoryBtn = document.getElementById('heroAddStoryBtn');
    this.closeSubmitModalBtn = document.getElementById('closeSubmitModalBtn');
    this.cancelSubmitModalBtn = document.getElementById('cancelSubmitModalBtn');
    this.storyForm = document.getElementById('storyContributionForm');

    this.detailModal = document.getElementById('storyDetailModal');
    this.closeDetailModalBtn = document.getElementById('closeDetailModalBtn');
    this.detailContent = document.getElementById('storyDetailContent');

    this.heroPlayBtn = document.getElementById('heroPlayStoryBtn');
  }

  bindEvents() {
    this.categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeCategory = pill.getAttribute('data-category') || 'all';
        this.renderStories();
      });
    });

    if (this.regionSelect) {
      this.regionSelect.addEventListener('change', (e) => {
        this.activeRegion = e.target.value;
        this.renderStories();
      });
    }

    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderStories();
      });
    }

    if (this.openSubmitModalBtn) {
      this.openSubmitModalBtn.addEventListener('click', () => this.openModal(this.submitModal));
    }
    if (this.heroAddStoryBtn) {
      this.heroAddStoryBtn.addEventListener('click', () => this.openModal(this.submitModal));
    }
    if (this.closeSubmitModalBtn) {
      this.closeSubmitModalBtn.addEventListener('click', () => this.closeModal(this.submitModal));
    }
    if (this.cancelSubmitModalBtn) {
      this.cancelSubmitModalBtn.addEventListener('click', () => this.closeModal(this.submitModal));
    }

    if (this.closeDetailModalBtn) {
      this.closeDetailModalBtn.addEventListener('click', () => this.closeModal(this.detailModal));
    }

    [this.submitModal, this.detailModal].forEach(modal => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.closeModal(modal);
        });
      }
    });

    if (this.storyForm) {
      this.storyForm.addEventListener('submit', (e) => this.handleStorySubmit(e));
    }

    if (this.heroPlayBtn) {
      this.heroPlayBtn.addEventListener('click', () => {
        const featured = this.stories.find(s => s.id === 'gond-laddu-kamla-devi') || this.stories[0];
        this.openStoryDetail(featured.id, true);
      });
    }

    window.addEventListener('virasat:passport-updated', () => {
      this.updateHeaderPassportXP();
    });
  }

  updateHeaderPassportXP() {
    const xpEl = document.getElementById('headerPassportXP');
    if (xpEl && window.VirasatPassportService) {
      const stats = window.VirasatPassportService.getStats();
      xpEl.textContent = `Passport: ${stats.solved} Stamps · ${stats.totalXP} XP`;
    }
  }

  openModal(modal) {
    if (!modal) return;
    modal.classList.remove('pointer-events-none', 'opacity-0');
    modal.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';
  }

  closeModal(modal) {
    if (!modal) return;
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100');
    document.body.style.overflow = '';
  }

  handleStorySubmit(e) {
    e.preventDefault();

    const elderName = document.getElementById('elderNameInput').value.trim();
    const elderAge = document.getElementById('elderAgeInput').value.trim();
    const category = document.getElementById('storyCategoryInput').value;
    const region = document.getElementById('storyRegionInput').value.trim();
    const title = document.getElementById('storyTitleInput').value.trim();
    const content = document.getElementById('storyContentInput').value.trim();
    const moral = document.getElementById('storyMoralInput').value.trim();
    const contributor = document.getElementById('contributorNameInput').value.trim() || 'Heritage Volunteer';

    const categoryLabels = {
      crafts: 'Traditional Crafts',
      recipes: 'Ancestral Recipes',
      folklore: 'Oral Histories',
      legends: 'Living Legends'
    };

    const newStory = {
      id: 'story-' + Date.now(),
      title: title,
      elderName: elderName,
      elderAge: elderAge ? parseInt(elderAge) : 75,
      category: category,
      categoryLabel: categoryLabels[category] || 'Folklore & Lore',
      region: region,
      regionKey: region.toLowerCase().replace(/[^a-z]/g, ''),
      image: category === 'recipes' ? 'images/recipe-laddoos.jpg' : 'images/elder-storyteller.jpg',
      excerpt: content.length > 140 ? content.substring(0, 140) + '...' : content,
      fullStory: content,
      moral: moral || 'Preserving ancestral wisdom builds cultural resilience.',
      verifiedCount: 1,
      verifiedBy: [`Community Elder: ${elderName}`],
      audioLength: '02:30',
      contributor: contributor,
      date: 'Today',
      isUserContributed: true
    };

    this.stories.unshift(newStory);
    this.saveStories();
    this.updateCategoryCounts();
    this.renderStories();
    this.closeModal(this.submitModal);
    this.storyForm.reset();

    if (window.VirasatPassportService) {
      window.VirasatPassportService.recordWisdomContribution(newStory);
    }
  }

  updateCategoryCounts() {
    const total = this.stories.length;
    const crafts = this.stories.filter(s => s.category === 'crafts').length;
    const recipes = this.stories.filter(s => s.category === 'recipes').length;
    const folklore = this.stories.filter(s => s.category === 'folklore').length;
    const legends = this.stories.filter(s => s.category === 'legends').length;

    const set = (id, count) => {
      const el = document.getElementById(id);
      if (el) el.textContent = `(${count})`;
    };

    set('count-all', total);
    set('count-crafts', crafts);
    set('count-recipes', recipes);
    set('count-folklore', folklore);
    set('count-legends', legends);
  }

  renderStories() {
    if (!this.grid) return;

    let filtered = this.stories.filter(story => {
      if (this.activeCategory !== 'all' && story.category !== this.activeCategory) {
        return false;
      }
      if (this.activeRegion !== 'all') {
        const reg = (story.regionKey || story.region).toLowerCase();
        if (!reg.includes(this.activeRegion.toLowerCase())) {
          return false;
        }
      }
      if (this.searchQuery) {
        const hay = `${story.title} ${story.elderName} ${story.region} ${story.excerpt} ${story.fullStory} ${story.categoryLabel}`.toLowerCase();
        if (!hay.includes(this.searchQuery)) {
          return false;
        }
      }
      return true;
    });

    if (filtered.length === 0) {
      this.grid.innerHTML = `
        <div class="col-span-full py-16 text-center bento-card rounded-2xl p-8">
          <span class="material-symbols-outlined text-[#A97A32] text-5xl mb-3">manage_search</span>
          <h3 class="font-heading text-xl font-bold text-[#211B14] mb-2">No Elder Stories Found</h3>
          <p class="font-sans text-sm text-[#6B6255] max-w-md mx-auto mb-6">
            We couldn't find matching oral records for this filter. Be the first to preserve an elder story from this region!
          </p>
          <button onclick="document.getElementById('openSubmitModalBtn').click()" class="btn-gold px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase cursor-pointer">
            + Contribute a Story
          </button>
        </div>
      `;
      return;
    }

    this.grid.innerHTML = filtered.map(story => {
      const isBookmarked = this.bookmarks.includes(story.id);
      const isPlaying = this.currentlyPlayingId === story.id;

      return `
        <div class="bento-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#D4A359] transition-all duration-300 shadow-sm" data-id="${story.id}">
          <div>
            <!-- Image & Header Badges -->
            <div class="w-full h-52 relative overflow-hidden bg-black/10">
              <img src="${story.image}" alt="${story.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <!-- Category Pill -->
              <div class="absolute top-3 left-3 flex items-center gap-2">
                <span class="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#D4A359] text-[10.5px] font-caps font-bold tracking-wider uppercase border border-[#D4A359]/30">
                  ${story.categoryLabel}
                </span>
              </div>

              <!-- Bookmark Button -->
              <button onclick="window.wisdomApp.toggleBookmark('${story.id}')" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:text-[#D4A359] transition-colors" title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark Story'}">
                <span class="material-symbols-outlined text-[18px]">${isBookmarked ? 'bookmark' : 'bookmark_border'}</span>
              </button>

              <!-- Elder Info Banner -->
              <div class="absolute bottom-3 left-3 right-3 text-white">
                <div class="flex items-center gap-1.5 text-xs text-[#ECC484]">
                  <span class="material-symbols-outlined text-[14px]">location_on</span>
                  <span>${story.region}</span>
                </div>
                <h4 class="font-heading text-lg font-bold leading-tight mt-0.5">${story.elderName} ${story.elderAge ? `(${story.elderAge} yrs)` : ''}</h4>
              </div>
            </div>

            <!-- Card Content Body -->
            <div class="p-5">
              <!-- Verification Green Badge -->
              <div class="flex items-center justify-between mb-3">
                <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1C4436]/15 text-[#1C4436] text-[10.5px] font-bold tracking-wide border border-[#1C4436]/30">
                  <span class="material-symbols-outlined text-[13px] text-[#1C4436]">verified</span>
                  Verified by ${story.verifiedCount} Elders
                </span>
                <span class="text-[11px] text-[#8F8474] font-caps">${story.date}</span>
              </div>

              <h3 class="font-heading text-base font-bold text-[#211B14] leading-snug mb-2 group-hover:text-[#A97A32] transition-colors">
                ${story.title}
              </h3>

              <p class="font-sans text-[13px] text-[#6B6255] leading-relaxed line-clamp-3 mb-4">
                "${story.excerpt}"
              </p>

              <!-- Audio Player Simulation Bar -->
              <div class="p-3 rounded-xl bg-[#FAF5EE] border border-[#E4D8C7] flex items-center justify-between gap-3 mb-2">
                <button onclick="window.wisdomApp.togglePlay('${story.id}')" class="w-8 h-8 rounded-full ${isPlaying ? 'bg-[#1C4436] text-white animate-pulse' : 'bg-[#D4A359] text-[#120F0B]'} flex items-center justify-center font-bold hover:scale-105 transition-transform cursor-pointer shrink-0" title="${isPlaying ? 'Pause Oral Recording' : 'Play Oral Recording'}">
                  <span class="material-symbols-outlined text-[18px]">${isPlaying ? 'pause' : 'play_arrow'}</span>
                </button>
                <div class="flex-1">
                  <div class="text-[11px] font-bold text-[#211B14] leading-tight">Oral Audio Recording</div>
                  <div class="text-[10px] text-[#8F8474] flex items-center gap-1">
                    <span>${isPlaying ? 'Playing archive audio...' : `${story.audioLength} min`}</span>
                    ${isPlaying ? '<span class="text-[#1C4436] font-bold">● LIVE</span>' : ''}
                  </div>
                </div>
                <button onclick="window.wisdomApp.openStoryDetail('${story.id}', true)" class="text-[10.5px] font-bold text-[#A97A32] hover:underline font-caps">
                  Listen Full →
                </button>
              </div>
            </div>
          </div>

          <!-- Card Footer Actions -->
          <div class="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#E4D8C7]/50 mt-2">
            <button onclick="window.wisdomApp.verifyStory('${story.id}')" class="flex items-center gap-1 text-xs font-semibold text-[#1C4436] hover:text-[#0f2e24] transition-colors cursor-pointer" title="Verify authenticity and earn +40 Passport XP">
              <span class="material-symbols-outlined text-[16px]">thumb_up</span>
              <span>Endorse (${story.verifiedCount})</span>
            </button>

            <button onclick="window.wisdomApp.openStoryDetail('${story.id}')" class="btn-dark px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase cursor-pointer">
              Read Story →
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  togglePlay(storyId) {
    const story = this.stories.find(s => s.id === storyId);
    if (!story) return;

    if (this.currentlyPlayingId === storyId) {
      this.stopAudio();
      this.currentlyPlayingId = null;
    } else {
      this.stopAudio();
      this.currentlyPlayingId = storyId;
      this.startOralAudioPlayback(story);

      if (window.VirasatPassportService) {
        window.VirasatPassportService.recordWisdomListen(story);
      }
    }
    this.renderStories();
  }

  stopAudio() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (this.audioDroneNodes) {
      try {
        this.audioDroneNodes.forEach(node => {
          if (node.stop) node.stop();
          if (node.disconnect) node.disconnect();
        });
      } catch (e) {}
      this.audioDroneNodes = null;
    }
  }

  startOralAudioPlayback(story) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        if (!this.audioCtx) this.audioCtx = new AudioContext();
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

        // Create warm Indian ambient Tanpura drone chords (D - A - D harmonic)
        const freqs = [146.83, 220.00, 293.66]; // D3, A3, D4
        this.audioDroneNodes = [];

        const masterGain = this.audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
        masterGain.connect(this.audioCtx.destination);

        freqs.forEach((f, i) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = i === 1 ? 'triangle' : 'sine';
          osc.frequency.setValueAtTime(f, this.audioCtx.currentTime);

          // Subtle harmonic detuning for acoustic warmth
          osc.detune.setValueAtTime((i - 1) * 3, this.audioCtx.currentTime);
          gain.gain.setValueAtTime(0.3 / (i + 1), this.audioCtx.currentTime);

          osc.connect(gain);
          gain.connect(masterGain);
          osc.start();

          this.audioDroneNodes.push(osc, gain);
        });
      }
    } catch (e) {
      console.warn('Web Audio drone initialized in fallback mode', e);
    }

    // Elder Oral Narration via SpeechSynthesis
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const narrative = `${story.title}. Oral record by Elder ${story.elderName}, from ${story.region}. ${story.fullStory || story.excerpt} Lesson: ${story.moral}`;
      const utterance = new SpeechSynthesisUtterance(narrative);
      utterance.rate = 0.90;
      utterance.pitch = 0.95;

      utterance.onend = () => {
        this.stopAudio();
        this.currentlyPlayingId = null;
        this.renderStories();
      };
      utterance.onerror = () => {
        this.stopAudio();
        this.currentlyPlayingId = null;
        this.renderStories();
      };

      window.speechSynthesis.speak(utterance);
    }
  }

  toggleBookmark(storyId) {
    if (this.bookmarks.includes(storyId)) {
      this.bookmarks = this.bookmarks.filter(id => id !== storyId);
    } else {
      this.bookmarks.push(storyId);
      if (window.VirasatPassportService) {
        window.VirasatPassportService.showToast('Story Bookmarked', 'Saved to your personal collection');
      }
    }
    this.saveBookmarks();
    this.renderStories();
  }

  verifyStory(storyId) {
    const story = this.stories.find(s => s.id === storyId);
    if (!story) return;

    story.verifiedCount = (story.verifiedCount || 1) + 1;
    this.saveStories();
    this.renderStories();

    if (window.VirasatPassportService) {
      window.VirasatPassportService.recordWisdomVerification(story);
    }
  }

  openStoryDetail(storyId, autoPlay = false) {
    const story = this.stories.find(s => s.id === storyId);
    if (!story || !this.detailContent) return;

    if (autoPlay) {
      this.currentlyPlayingId = storyId;
      if (window.VirasatPassportService) {
        window.VirasatPassportService.recordWisdomListen(story);
      }
    }

    this.detailContent.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-full bg-[#D4A359]/20 text-[#A97A32] text-xs font-caps font-bold uppercase">
            ${story.categoryLabel}
          </span>
          <span class="px-3 py-1 rounded-full bg-[#1C4436]/15 text-[#1C4436] text-xs font-bold">
            ✦ Community Verified by ${story.verifiedCount} Elders
          </span>
        </div>

        <div class="w-full h-64 sm:h-72 rounded-2xl overflow-hidden relative shadow-lg">
          <img src="${story.image}" alt="${story.title}" class="w-full h-full object-cover"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4 text-white">
            <span class="text-xs text-[#ECC484] font-caps">${story.region} · Recorded on ${story.date}</span>
            <h1 class="font-heading text-2xl sm:text-3xl font-bold leading-tight mt-1">${story.title}</h1>
          </div>
        </div>

        <!-- Elder Information Box -->
        <div class="p-4 rounded-xl bg-white border border-[#E4D8C7] flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-[#D4A359]/20 border border-[#D4A359] flex items-center justify-center font-heading text-lg font-bold text-[#A97A32]">
              ${story.elderName.charAt(0)}
            </div>
            <div>
              <div class="font-heading text-base font-bold text-[#211B14]">${story.elderName} ${story.elderAge ? `(${story.elderAge} years)` : ''}</div>
              <div class="text-xs text-[#6B6255]">Oral Custodian · ${story.region}</div>
            </div>
          </div>

          <button onclick="window.wisdomApp.verifyStory('${story.id}'); document.getElementById('detailVerifyBadge').textContent = 'Verified (${story.verifiedCount})';" id="detailVerifyBadge" class="btn-outline-gold px-4 py-1.5 rounded-full text-xs font-bold font-caps">
            Endorse Story
          </button>
        </div>

        <!-- Audio Player -->
        <div class="p-4 rounded-xl bg-[#120F0B] text-white border border-[#D4A359]/40 flex items-center justify-between gap-4 shadow-md">
          <button onclick="window.wisdomApp.togglePlay('${story.id}')" class="w-11 h-11 rounded-full bg-[#D4A359] text-[#120F0B] flex items-center justify-center font-bold hover:scale-105 transition-transform shrink-0">
            <span class="material-symbols-outlined text-[24px]">${this.currentlyPlayingId === story.id ? 'pause' : 'play_arrow'}</span>
          </button>
          <div class="flex-1">
            <div class="text-xs font-bold text-[#ECC484] uppercase tracking-wider">Oral History Audio Archive</div>
            <div class="text-sm font-semibold">${story.elderName} Narration · ${story.audioLength} min</div>
            <div class="w-full bg-white/20 h-1.5 rounded-full mt-2 overflow-hidden">
              <div class="bg-[#D4A359] h-full rounded-full transition-all duration-300" style="width: ${this.currentlyPlayingId === story.id ? '70%' : '15%'}"></div>
            </div>
          </div>
          <a href="passport.html" class="text-xs text-[#D4A359] hover:underline font-caps font-bold">
            +30 XP
          </a>
        </div>

        <!-- Full Story Text -->
        <div class="prose prose-stone max-w-none text-[#211B14] leading-relaxed text-sm sm:text-base space-y-4">
          <p class="font-normal font-sans">${story.fullStory}</p>
        </div>

        <!-- Moral & Wisdom Quote -->
        <div class="p-5 rounded-xl bg-[#FAF6EF] border-l-4 border-[#D4A359] italic text-sm text-[#211B14]">
          <span class="font-bold text-[#A97A32] not-italic block mb-1">Ancestral Moral & Insight:</span>
          "${story.moral}"
        </div>

        <!-- Verification Citations -->
        <div class="pt-4 border-t border-[#E4D8C7]">
          <span class="text-xs font-caps font-bold text-[#8F8474] uppercase block mb-2">Authenticity & Community Verification:</span>
          <div class="flex flex-wrap gap-2">
            ${story.verifiedBy.map(v => `
              <span class="px-3 py-1 rounded-lg bg-white border border-[#E4D8C7] text-xs text-[#6B6255] flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[14px] text-[#1C4436]">verified</span>
                ${v}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    this.openModal(this.detailModal);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.wisdomApp = new VirasatWisdomVaultApp();
});
