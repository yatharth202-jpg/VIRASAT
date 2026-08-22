/**
 * VIRASAT PASSPORT — Master Interactive Application Engine
 * Features:
 * - Twinkling Ambient Starlight Particle System
 * - One-Click Passport ID Copying with Toast Notification
 * - Interactive India Map with State Exploration Highlighting & Tooltips
 * - Dynamic Cultural Twin Connections Carousel
 * - Discovery Inspection Modal with Heritage Lore
 * - 3D Badge Inspection Dialog
 * - Web Audio API Generative Heritage Soundscape & UI Chimes
 */

document.addEventListener('DOMContentLoaded', () => {
  initAmbientStars();
  initPassportCopy();
  initIndiaMap();
  initCulturalTwins();
  initDiscoveryModals();
  initBadgeModals();
  initProfileDropdown();
  initJourneyPath();
  initWebAudio();
  initCertificateGenerator();
  syncPassportStats();

  window.addEventListener('virasat:stamps-updated', syncPassportStats);
  window.addEventListener('virasat:discoveries-updated', syncPassportStats);
  window.addEventListener('virasat:badges-updated', syncPassportStats);
});

function syncPassportStats() {
  if (!window.VirasatPassportService) return;
  const stats = VirasatPassportService.getStats();

  const elXP = document.getElementById('passportXPText');
  const elLvl = document.getElementById('passportLevelNum');
  const elRank = document.getElementById('passportRankName');
  const elStreak = document.getElementById('passportStreakText');
  const elDial = document.getElementById('passportDialFill');
  const elWisdom = document.getElementById('statWisdomValue');
  const elTwins = document.getElementById('statTwinsValue');
  const elGames = document.getElementById('statGamesValue');
  const elDisc = document.getElementById('statDiscoveriesValue');

  if (elXP) elXP.textContent = `${stats.totalXP} / 10,000 XP`;
  if (elLvl) elLvl.textContent = stats.level.includes('Master') ? '8' : '6';
  if (elRank) elRank.textContent = stats.level;
  if (elStreak) elStreak.textContent = `${stats.streakDays} days 🔥`;
  if (elWisdom) elWisdom.textContent = stats.wisdomCount || 4;
  if (elTwins) elTwins.textContent = stats.solved || 6;
  if (elGames) elGames.textContent = (stats.solved || 6) * 2;
  if (elDisc) elDisc.textContent = (stats.total || 12) + (stats.solved || 6);

  if (elDial) {
    const pct = Math.min(100, Math.max(10, (stats.totalXP / 1000) * 100));
    const offset = 320 - (320 * (pct / 100));
    elDial.style.strokeDashoffset = offset;
  }
}

/* --------------------------------------------------------------------------
   1. Ambient Stars & Golden Embers Background Particle Canvas
   -------------------------------------------------------------------------- */
function initAmbientStars() {
  const canvas = document.getElementById('ambientStarsCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height, stars = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    stars = [];
    const count = Math.floor((width * height) / 10000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.7 + 0.1,
        speed: Math.random() * 0.02 + 0.005,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        isGold: Math.random() > 0.65
      });
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.alpha += Math.sin(Date.now() * s.twinkleSpeed) * 0.01;
      const currentAlpha = Math.max(0.1, Math.min(0.9, s.alpha));
      
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.isGold 
        ? `rgba(242, 202, 80, ${currentAlpha})`
        : `rgba(255, 255, 255, ${currentAlpha * 0.8})`;
      ctx.fill();
    }
    requestAnimationFrame(render);
  }

  window.addEventListener('resize', resize);
  resize();
  render();
}

/* --------------------------------------------------------------------------
   2. Passport ID Copying & Feedback Toast
   -------------------------------------------------------------------------- */
function initPassportCopy() {
  const btnCopy = document.getElementById('btnCopyId');
  const passportBox = document.getElementById('passportIdBox');
  const toast = document.getElementById('copyToast');
  const idValue = "VIR - 2024 - 8X71 - CE";

  function copyAction(e) {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(idValue.replace(/\s+/g, '')).catch(() => {
      const tempInput = document.createElement('input');
      tempInput.value = "VIR-2024-8X71-CE";
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    });

    playAudioChime(660);
    showToast();
  }

  function showToast() {
    if (!toast) return;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  if (btnCopy) btnCopy.addEventListener('click', copyAction);
  if (passportBox) passportBox.addEventListener('click', copyAction);
}

/* --------------------------------------------------------------------------
   3. Interactive India Map Hotspots & List
   -------------------------------------------------------------------------- */
function initIndiaMap() {
  const mapContainer = document.getElementById('indiaMapContainer');
  const mapTooltip = document.getElementById('mapTooltip');
  const hotspots = document.querySelectorAll('.map-hotspot');
  const stateListItems = document.querySelectorAll('.state-item');

  if (!mapContainer || !mapTooltip) return;

  hotspots.forEach(spot => {
    spot.addEventListener('mouseenter', (e) => {
      const stateName = spot.getAttribute('data-state') || 'Region';
      const progress = spot.getAttribute('data-progress') || 'Explored';

      mapTooltip.querySelector('.tooltip-state-name').textContent = stateName;
      mapTooltip.querySelector('.tooltip-progress-val').textContent = progress;
      mapTooltip.style.display = 'flex';

      stateListItems.forEach(item => {
        if (item.getAttribute('data-state-name') === stateName) {
          item.style.background = 'rgba(0,0,0,0.12)';
        }
      });
    });

    spot.addEventListener('mousemove', (e) => {
      const rect = mapContainer.getBoundingClientRect();
      const x = e.clientX - rect.left + 10;
      const y = e.clientY - rect.top - 30;
      mapTooltip.style.left = `${Math.min(rect.width - 120, Math.max(5, x))}px`;
      mapTooltip.style.top = `${Math.max(5, y)}px`;
    });

    spot.addEventListener('mouseleave', () => {
      mapTooltip.style.display = 'none';
      stateListItems.forEach(item => item.style.background = '');
    });

    spot.addEventListener('click', () => {
      playAudioChime(520);
    });
  });

  stateListItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const stateName = item.getAttribute('data-state-name');
      hotspots.forEach(spot => {
        if (spot.getAttribute('data-state') === stateName) {
          spot.style.background = 'rgba(212, 175, 55, 0.4)';
          spot.style.boxShadow = '0 0 12px rgba(212, 175, 55, 0.8)';
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      hotspots.forEach(spot => {
        spot.style.background = '';
        spot.style.boxShadow = '';
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. Dynamic Cultural Twin Connections Carousel
   -------------------------------------------------------------------------- */
function initCulturalTwins() {
  const twinsData = [
    {
      india: { title: 'Warli Art', region: 'Maharashtra', img: 'assets/twin_warli.png' },
      world: { title: 'Aboriginal Dot Painting', region: 'Australia', img: 'assets/twin_aboriginal.png' },
      status: 'Historically Connected',
      desc: 'Both traditions use simple motifs to depict stories of nature, community & life.'
    },
    {
      india: { title: 'Kathakali Drama', region: 'Kerala', img: 'assets/discovery_onam_crop.png' },
      world: { title: 'Noh Classical Theater', region: 'Japan', img: 'assets/discovery_onam_crop.png' },
      status: 'Spiritual Masked Narratives',
      desc: 'Both dance dramas blend elaborate painted face makeup with micro-gestures to convey divine and mythical epics.'
    },
    {
      india: { title: 'Madhubani Art', region: 'Bihar', img: 'assets/discovery_madhubani_crop.png' },
      world: { title: 'Huichol Yarn Art', region: 'Mexico', img: 'assets/discovery_madhubani_crop.png' },
      status: 'Sacred Folk Symbolism',
      desc: 'Both indigenous lineages transform spiritual cosmovision into vibrant lines honoring the cycle of nature and ancestors.'
    },
    {
      india: { title: 'Baul Mysticism', region: 'West Bengal', img: 'assets/discovery_baul.png' },
      world: { title: 'Troubadour Lyricism', region: 'France', img: 'assets/discovery_baul.png' },
      status: 'Wandering Soul Poetry',
      desc: 'Unfettered wandering minstrels carrying acoustic lutes, singing philosophical verses of divine love beyond dogma.'
    },
    {
      india: { title: 'Stepwells (Vavs)', region: 'Gujarat', img: 'assets/temple_odisha.png' },
      world: { title: 'Roman Cisterns', region: 'Rome / Istanbul', img: 'assets/temple_odisha.png' },
      status: 'Subterranean Sanctuaries',
      desc: 'Monumental architectural subterranean feats combining essential water conservation with sacred temple geometry.'
    }
  ];

  let currentIndex = 0;
  const twinTitleIndia = document.getElementById('twinTitleIndia');
  const twinRegionIndia = document.getElementById('twinRegionIndia');
  const twinImgIndia = document.getElementById('twinImgIndia');
  const twinTitleWorld = document.getElementById('twinTitleWorld');
  const twinRegionWorld = document.getElementById('twinRegionWorld');
  const twinImgWorld = document.getElementById('twinImgWorld');
  const twinStatusText = document.getElementById('twinStatusText');
  const twinDescText = document.getElementById('twinDescText');
  const dots = document.querySelectorAll('.twin-dot');
  const twinCard = document.getElementById('culturalTwinContainer');

  function updateTwin(index) {
    currentIndex = index;
    const data = twinsData[currentIndex];
    if (!data) return;

    if (twinCard) {
      twinCard.style.opacity = '0.5';
      twinCard.style.transition = 'opacity 0.2s ease';
    }

    setTimeout(() => {
      twinTitleIndia.textContent = data.india.title;
      twinRegionIndia.textContent = data.india.region;
      twinImgIndia.src = data.india.img;

      twinTitleWorld.textContent = data.world.title;
      twinRegionWorld.textContent = data.world.region;
      twinImgWorld.src = data.world.img;

      twinStatusText.textContent = data.status;
      twinDescText.textContent = data.desc;

      dots.forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
      });

      if (twinCard) {
        twinCard.style.opacity = '1';
      }
    }, 200);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      playAudioChime(440);
      updateTwin(idx);
    });
  });

  setInterval(() => {
    const nextIdx = (currentIndex + 1) % twinsData.length;
    updateTwin(nextIdx);
  }, 9000);
}

/* --------------------------------------------------------------------------
   5. Recent Discoveries Detail Modal
   -------------------------------------------------------------------------- */
function initDiscoveryModals() {
  const cards = document.querySelectorAll('.discovery-card');
  const modal = document.getElementById('discoveryModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalTag = document.getElementById('modalTag');
  const modalState = document.getElementById('modalState');
  const modalImg = document.getElementById('modalImg');
  const modalDesc = document.getElementById('modalDesc');
  const modalAudioBtn = document.getElementById('modalAudioBtn');

  if (!modal) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title') || 'Cultural Discovery';
      const category = card.getAttribute('data-category') || 'HERITAGE';
      const state = card.getAttribute('data-state') || 'India';
      const desc = card.getAttribute('data-desc') || 'Deep dive into cultural folklore and traditions.';
      const img = card.querySelector('.discovery-thumb')?.src || '';

      modalTitle.textContent = title;
      modalTag.textContent = category;
      modalState.textContent = state;
      modalDesc.textContent = desc;
      modalImg.src = img;

      playAudioChime(587);
      modal.classList.add('active');
    });
  });

  function closeModal() {
    modal.classList.remove('active');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (modalAudioBtn) {
    modalAudioBtn.addEventListener('click', () => {
      playAudioChime(784);
      modalAudioBtn.textContent = '🔊 Playing Lore Narration...';
      setTimeout(() => {
        modalAudioBtn.textContent = '🎧 Play Lore Narration';
      }, 4000);
    });
  }
}

/* --------------------------------------------------------------------------
   6. 3D Badge Medallion Modal Dialog
   -------------------------------------------------------------------------- */
function initBadgeModals() {
  const badges = document.querySelectorAll('.badge-item');
  const modal = document.getElementById('badgeModal');
  const closeBtn = document.getElementById('badgeModalCloseBtn');
  const modalImg = document.getElementById('badgeModalImg');
  const titleElem = document.getElementById('badgeModalTitle');
  const statusElem = document.getElementById('badgeModalStatus');
  const descElem = document.getElementById('badgeModalDesc');

  if (!modal) return;

  const badgeLore = {
    curious: {
      title: 'Curious Mind',
      status: 'Unlocked • Aug 14, 2024',
      desc: 'Awarded for completing your first 10 heritage quizzes with distinction.'
    },
    first: {
      title: 'First Discovery',
      status: 'Unlocked • Aug 16, 2024',
      desc: 'Commemorating the inaugural cultural milestone logged in your Virasat Passport.'
    },
    story: {
      title: 'Story Seeker',
      status: 'Unlocked • Aug 19, 2024',
      desc: 'Unlocked after listening to and verifying 5 oral folklore recordings from regional elders.'
    },
    game: {
      title: 'Game Explorer',
      status: 'Unlocked • Aug 20, 2024',
      desc: 'Mastered the ancient strategy rules of Chaupar, Pachisi, and Moksha Patam.'
    },
    culture: {
      title: 'Culture Connector',
      status: 'Unlocked • Aug 21, 2024',
      desc: 'Bridged five profound shared philosophical motifs between Indian and global traditions.'
    },
    keeper: {
      title: 'Heritage Keeper',
      status: 'Locked • Requires Level 7 & 50 Discoveries',
      desc: 'The ultimate order of cultural guardianship.'
    }
  };

  badges.forEach(badge => {
    badge.addEventListener('click', () => {
      const type = badge.getAttribute('data-badge');
      const lore = badgeLore[type] || {
        title: 'Heritage Medallion',
        status: 'Active Milestone',
        desc: 'A testament to continuous exploration and cultural preservation.'
      };

      titleElem.textContent = lore.title;
      statusElem.textContent = lore.status;
      descElem.textContent = lore.desc;

      const img = badge.querySelector('.badge-exact-img');
      if (img && modalImg) {
        modalImg.src = img.src;
      }

      playAudioChime(659);
      modal.classList.add('active');
    });
  });

  function closeModal() {
    modal.classList.remove('active');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

/* --------------------------------------------------------------------------
   7. Profile Dropdown & Interactive Controls
   -------------------------------------------------------------------------- */
function initProfileDropdown() {
  const widget = document.getElementById('userProfileWidget');
  const dropdown = document.getElementById('profileDropdown');

  if (!widget || !dropdown) return;

  widget.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('show');
  });
}

/* --------------------------------------------------------------------------
   8. Next Journey Expedition Preview
   -------------------------------------------------------------------------- */
function initJourneyPath() {
  const btn = document.getElementById('btnContinueJourney');
  if (!btn) return;

  btn.addEventListener('click', () => {
    playAudioChime(880);
    btn.innerHTML = `
      <span>Launching Odisha Expedition...</span>
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 14 14"></polyline>
      </svg>
    `;
    setTimeout(() => {
      alert("✨ Starting Odyssey: Temples of Odisha! Traveling to Konark Sun Temple & Jagannath Temple heritage archives...");
      btn.innerHTML = `
        <span>Continue Journey</span>
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      `;
    }, 800);
  });
}

/* --------------------------------------------------------------------------
   9. Web Audio API Generative Heritage Soundscape
   -------------------------------------------------------------------------- */
let audioCtx = null;
let isAudioActive = false;

function initWebAudio() {
  const audioToggle = document.getElementById('ambientAudioToggle');
  const audioStatusText = document.getElementById('audioStatusText');

  if (!audioToggle) return;

  audioToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isAudioActive = !isAudioActive;
    audioStatusText.textContent = isAudioActive ? 'On 🎵' : 'Off';
    audioStatusText.style.color = isAudioActive ? '#4ade80' : '';

    if (isAudioActive) {
      startAmbientDrone();
    }
  });
}

function playAudioChime(freq) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  } catch (err) {}
}

function startAmbientDrone() {
  if (!isAudioActive || !audioCtx) return;
  try {
    const droneFreqs = [146.83, 220.00, 293.66];
    droneFreqs.forEach(freq => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
    });
  } catch (e) {}
}

/* --------------------------------------------------------------------------
   10. Printable / Downloadable Certificate Generator
   -------------------------------------------------------------------------- */
function initCertificateGenerator() {
  const downloadBtn = document.getElementById('btnDownloadCertificate');
  if (!downloadBtn) return;

  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    playAudioChime(660);
    const stats = window.VirasatPassportService ? VirasatPassportService.getStats() : { totalXP: 450, solved: 6, level: 'Master Heritage Scholar', wisdomCount: 2 };
    
    const certWindow = window.open('', '_blank');
    if (!certWindow) {
      alert("Please allow popups to generate your Virasat Certificate.");
      return;
    }

    certWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Virasat Certificate of Cultural Heritage Scholarship</title>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;900&family=Libre+Caslon+Text:ital,wght@0,400;1,400&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet">
        <style>
          body { margin: 0; padding: 40px; background: #0c0b0a; color: #FAF5EE; font-family: 'Libre Caslon Text', serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
          .cert-container { width: 850px; padding: 50px; background: radial-gradient(circle at 50% 50%, #1a1714 0%, #0d0c0a 100%); border: 8px double #D4A359; border-radius: 16px; box-shadow: 0 0 50px rgba(212,163,89,0.3); text-align: center; position: relative; }
          .cert-header { font-family: 'Cinzel', serif; font-size: 32px; color: #ECC484; letter-spacing: 4px; margin-bottom: 8px; }
          .cert-sub { font-family: 'Space Grotesk', sans-serif; font-size: 13px; color: #D4A359; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 25px; }
          .cert-body { font-size: 18px; line-height: 1.8; color: #FAF5EE; margin: 30px auto; max-width: 650px; }
          .scholar-name { font-family: 'Cinzel', serif; font-size: 26px; color: #ECC484; border-bottom: 2px solid #D4A359; padding-bottom: 4px; display: inline-block; }
          .badge-row { display: flex; justify-content: center; gap: 20px; margin: 30px 0; }
          .badge { padding: 8px 18px; border: 1px solid #D4A359; border-radius: 20px; font-size: 12px; background: rgba(212,163,89,0.1); color: #ECC484; font-family: 'Space Grotesk', sans-serif; }
          .cert-footer { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 45px; border-top: 1px solid rgba(212,163,89,0.3); padding-top: 20px; font-size: 13px; color: rgba(250,245,238,0.7); }
          .cert-seal { width: 90px; height: 90px; border-radius: 50%; border: 3px solid #D4A359; display: flex; align-items: center; justify-content: center; font-size: 36px; margin: 0 auto; color: #ECC484; box-shadow: 0 0 20px rgba(212,163,89,0.4); }
          @media print { body { background: white; color: black; } .cert-container { border-color: black; box-shadow: none; } }
        </style>
      </head>
      <body>
        <div class="cert-container">
          <div class="cert-seal">🏛️</div>
          <h1 class="cert-header">VIRASAT SANSTHAN</h1>
          <div class="cert-sub">Certificate of Cultural Heritage Scholarship</div>
          
          <div class="cert-body">
            This is to certify that<br><br>
            <span class="scholar-name">Cultural Explorer</span><br><br>
            has successfully documented, preserved, and explored <strong>${stats.solved} Heritage Milestones</strong> across Bharat with a distinction score of <strong>${stats.totalXP} Preservation XP</strong>, attaining the rank of <strong>${stats.level}</strong>.
          </div>

          <div class="badge-row">
            <span class="badge">🎖️ ${stats.solved} Stamps Unlocked</span>
            <span class="badge">📜 ${stats.wisdomCount} Elder Lore Preserved</span>
            <span class="badge">⭐ 100% Verified Authenticity</span>
          </div>

          <div class="cert-footer">
            <div>
              <strong>Passport ID:</strong> VIR-2024-8X71-CE<br>
              <strong>Date:</strong> ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div>
              <button onclick="window.print()" style="background:#D4A359; color:#181512; border:none; padding:8px 16px; font-weight:bold; border-radius:6px; cursor:pointer;">🖨️ Print / Save as PDF</button>
            </div>
          </div>
        </div>
      </body>
      </html>
    `);
    certWindow.document.close();
  });
}
