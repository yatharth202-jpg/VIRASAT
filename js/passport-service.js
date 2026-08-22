/**
 * VIRASAT PASSPORT SERVICE
 * Unified Heritage Passport, Discoveries, and Elder Wisdom Vault Integration
 */

const VIRASAT_STORAGE_KEY = 'virasat_passport_data';
const VIRASAT_STATS_KEY = 'virasat_user_stats';
const VIRASAT_WISDOM_BADGES_KEY = 'virasat_wisdom_badges';
const VIRASAT_DISCOVERIES_KEY = 'virasat_discoveries';

const DEFAULT_STAMPS = [
  { 
    id: "architecture-imambara-golgumbaz",
    title: "Bada Imambara ⟷ Gol Gumbaz", 
    region: "Uttar Pradesh ⟷ Karnataka", 
    domain: "Architecture & Acoustic Vaults", 
    icon: "🏛️",
    date: "Aug 22, 2026", 
    type: "connection",
    similaritySummary: "Pillar-Free Acoustic Vaulting: Both engineered colossal unsupported spans without central pillars, creating acoustic sound transmission."
  },
  { 
    id: "stepwell-chandbaori-ranikivav",
    title: "Chand Baori ⟷ Rani Ki Vav", 
    region: "Rajasthan ⟷ Gujarat", 
    domain: "Architecture & Stepwells", 
    icon: "🌊",
    date: "Aug 21, 2026", 
    type: "connection",
    similaritySummary: "Subterranean Desert Rainwater Harvesting: Both engineered multi-tier stepwells in arid Thar fringes with dry interlocking stone joinery."
  },
  { 
    id: "dance-kathak-kathakali",
    title: "Kathak ⟷ Kathakali", 
    region: "Uttar Pradesh ⟷ Kerala", 
    domain: "Dance & Dramatic Arts", 
    icon: "🎭",
    date: "Aug 22, 2026", 
    type: "connection",
    similaritySummary: "Natya Shastra Roots: Both classical dances are rooted in the Natya Shastra, featuring 9 Navarasas micro-facial abhinaya and percussive rhythm."
  },
  { 
    id: "craft-chikankari-phulkari",
    title: "Lucknow Chikankari ⟷ Punjabi Phulkari", 
    region: "Uttar Pradesh ⟷ Punjab", 
    domain: "Art, Craft & Needlework", 
    icon: "🪡",
    date: "Aug 20, 2026", 
    type: "connection",
    similaritySummary: "Counted-Thread Heritage Needlework: Artisans count warp and weft yarns by hand to craft geometric matrilineal bridal heirlooms."
  },
  {
    id: "wisdom-oral-history-kutch",
    title: "Kutch Ajrakh Masters Lore",
    region: "Gujarat",
    domain: "Elder Wisdom & Crafts",
    icon: "📜",
    date: "Aug 22, 2026",
    type: "wisdom",
    similaritySummary: "Oral History Preservation: Documented 400-year indigo resist-dyeing chants shared by Master Artisan Ismail Khatri."
  },
  {
    id: "wisdom-ancestral-recipe-laddu",
    title: "Immunity Gond Ke Laddu",
    region: "Rajasthan",
    domain: "Ancestral Nutrition & Recipes",
    icon: "🍯",
    date: "Aug 21, 2026",
    type: "wisdom",
    similaritySummary: "Heritage Kitchen Secret: Preserved Dadi Kamla Devi's winter gum-resin recipe passed down across four generations."
  }
];

const DEFAULT_WISDOM_BADGES = [
  { id: "badge-curious", name: "Curious Mind", icon: "badge_curious.png", description: "Visited 5+ living heritage regions and explored cultural roots", unlocked: true },
  { id: "badge-first", name: "First Discovery", icon: "badge_first.png", description: "Logged your first traditional art discovery into the passport", unlocked: true },
  { id: "badge-story", name: "Story Seeker", icon: "badge_story.png", description: "Preserved 3+ elder folklore stories and oral traditions", unlocked: true },
  { id: "badge-game", name: "Game Explorer", icon: "badge_game.png", description: "Solved cultural twin matrix challenges across Indian states", unlocked: true },
  { id: "badge-culture", name: "Culture Connector", icon: "badge_culture.png", description: "Mapped connections between Indian traditions and world heritage", unlocked: true },
  { id: "badge-keeper", name: "Heritage Keeper", icon: "badge_keeper.png", description: "Achieved Master Scholar status with 500+ Preservation XP", unlocked: false }
];

const DEFAULT_DISCOVERIES = [
  {
    id: "disc-onam",
    title: "Onam & Vallam Kali",
    region: "Kerala",
    category: "Festivals",
    img: "assets/discovery_onam_crop.png",
    hdImg: "assets/discovery_onam.jpg",
    unlocked: true,
    lore: "Celebration of king Mahabali with grand floral pookalams and rhythmic snake boat races along the backwaters."
  },
  {
    id: "disc-madhubani",
    title: "Mithila Madhubani Art",
    region: "Bihar",
    category: "Crafts",
    img: "assets/discovery_madhubani_crop.png",
    hdImg: "assets/discovery_madhubani.jpg",
    unlocked: true,
    lore: "Centuries-old folk art painted using natural twigs, fingers, and mineral pigments illustrating nature and epics."
  },
  {
    id: "disc-baul",
    title: "Baul Mystic Folk Songs",
    region: "West Bengal",
    category: "Traditions",
    img: "assets/discovery_baul.png",
    hdImg: "assets/discovery_baul.svg",
    unlocked: true,
    lore: "UNESCO-recognized wandering mystic minstrels expressing devotion through ektara instruments and soulful poetry."
  },
  {
    id: "disc-dalbaati",
    title: "Dal Baati Churma",
    region: "Rajasthan",
    category: "Food",
    img: "assets/discovery_dalbaati.png",
    hdImg: "assets/discovery_dalbaati.svg",
    unlocked: true,
    lore: "Iconic arid-zone culinary triumph baked on cow-dung embers and enriched with pure desi ghee."
  }
];

class VirasatPassportService {
  static getStamps() {
    try {
      const stored = localStorage.getItem(VIRASAT_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Passport storage read error:', e);
    }
    return [...DEFAULT_STAMPS];
  }

  static saveStamps(stamps) {
    try {
      localStorage.setItem(VIRASAT_STORAGE_KEY, JSON.stringify(stamps));
      window.dispatchEvent(new CustomEvent('virasat:passport-updated', { detail: { stamps } }));
    } catch (e) {
      console.warn('Passport storage write error:', e);
    }
  }

  static getWisdomBadges() {
    try {
      const stored = localStorage.getItem(VIRASAT_WISDOM_BADGES_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Badges storage read error:', e);
    }
    return [...DEFAULT_WISDOM_BADGES];
  }

  static saveWisdomBadges(badges) {
    try {
      localStorage.setItem(VIRASAT_WISDOM_BADGES_KEY, JSON.stringify(badges));
      window.dispatchEvent(new CustomEvent('virasat:badges-updated', { detail: { badges } }));
    } catch (e) {
      console.warn('Badges storage write error:', e);
    }
  }

  static getDiscoveries() {
    try {
      const stored = localStorage.getItem(VIRASAT_DISCOVERIES_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Discoveries storage read error:', e);
    }
    return [...DEFAULT_DISCOVERIES];
  }

  static saveDiscoveries(discoveries) {
    try {
      localStorage.setItem(VIRASAT_DISCOVERIES_KEY, JSON.stringify(discoveries));
      window.dispatchEvent(new CustomEvent('virasat:discoveries-updated', { detail: { discoveries } }));
    } catch (e) {
      console.warn('Discoveries storage write error:', e);
    }
  }

  static hasStamp(id) {
    const stamps = this.getStamps();
    return stamps.some(s => s.id === id);
  }

  static addStamp(connection) {
    if (!connection) return false;
    const stamps = this.getStamps();
    if (stamps.some(s => s.id === connection.id || s.title === connection.title)) {
      return false;
    }

    const topSimilarity = connection.similarities && connection.similarities[0]
      ? `${connection.similarities[0].title}: ${connection.similarities[0].desc}`
      : connection.connectionOverview || 'Cultural Twin Connection Documented';

    const newStamp = {
      id: connection.id || 'conn-' + Date.now(),
      title: connection.title,
      region: connection.cultureA ? `${connection.cultureA.regionName} ⟷ ${connection.cultureB.regionName}` : (connection.region || 'All India'),
      domain: connection.domainName || 'Cultural Connections',
      icon: connection.domainIcon || connection.icon || '🏛️',
      date: 'Today',
      type: connection.type || 'connection',
      similaritySummary: topSimilarity
    };

    stamps.unshift(newStamp);
    this.saveStamps(stamps);
    this.showToast(`Passport Stamp Unlocked: ${newStamp.title}`, '+50 XP');
    return true;
  }

  static recordWisdomContribution(story) {
    if (!story) return false;
    const stamps = this.getStamps();
    const stampId = 'wisdom-contrib-' + (story.id || Date.now());
    
    if (!stamps.some(s => s.id === stampId)) {
      const newStamp = {
        id: stampId,
        title: `Elder Wisdom: ${story.title || 'Oral Lore'}`,
        region: story.region || 'India',
        domain: `Wisdom Vault • ${story.category || 'Folklore'}`,
        icon: story.icon || '📜',
        date: 'Today',
        type: 'wisdom',
        similaritySummary: `Contributed by ${story.contributor || 'Community Preserver'}: Story of ${story.elderName || 'Elder Master'} (${story.region || 'India'}).`
      };
      stamps.unshift(newStamp);
      this.saveStamps(stamps);
    }

    const badges = this.getWisdomBadges();
    const storytellerBadge = badges.find(b => b.id === 'badge-story');
    if (storytellerBadge) storytellerBadge.unlocked = true;
    this.saveWisdomBadges(badges);

    this.showToast(`Wisdom Preserved! +100 Passport XP`, '🌟 Living Legend Stamp Earned');
    return true;
  }

  static recordWisdomListen(story) {
    const stamps = this.getStamps();
    const stampId = 'wisdom-listen-' + (story.id || 'general');
    if (!stamps.some(s => s.id === stampId)) {
      stamps.push({
        id: stampId,
        title: `Oral History: ${story.title || 'Elder Tale'}`,
        region: story.region || 'India',
        domain: 'Oral History Archive',
        icon: '🎧',
        date: 'Today',
        type: 'wisdom',
        similaritySummary: `Immersive audio listening verified: ${story.elderName || 'Elder'} from ${story.region || 'India'}.`
      });
      this.saveStamps(stamps);
      this.showToast(`Audio Archive Explored! +30 Passport XP`, '🎙️ Oral Historian Progress');
    }
  }

  static recordWisdomVerification(story) {
    const stamps = this.getStamps();
    const stampId = 'wisdom-verify-' + (story.id || 'general');
    if (!stamps.some(s => s.id === stampId)) {
      stamps.push({
        id: stampId,
        title: `Verified Authenticity: ${story.title || 'Elder Lore'}`,
        region: story.region || 'India',
        domain: 'Community Verification',
        icon: '🛡️',
        date: 'Today',
        type: 'wisdom',
        similaritySummary: `Community elder verification stamp awarded for authentic heritage preservation.`
      });
      this.saveStamps(stamps);
      this.showToast(`Story Verified! +40 Passport XP`, '🎖️ Tradition Keeper Badge Updated');
    }
  }

  static getStats() {
    const stamps = this.getStamps();
    const wisdomStamps = stamps.filter(s => s.type === 'wisdom').length;
    const connectionStamps = stamps.filter(s => s.type !== 'wisdom').length;
    const totalXP = stamps.length * 50 + 150;

    return {
      solved: stamps.length,
      total: 28,
      wisdomCount: wisdomStamps,
      connectionCount: connectionStamps,
      totalXP: totalXP,
      streakDays: 14,
      level: totalXP >= 400 ? 'Master Heritage Scholar' : 'Heritage Scholar',
      tokens: Math.floor(stamps.length / 2) + 2
    };
  }

  static showToast(title, subtitle) {
    let container = document.getElementById('virasat-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'virasat-toast-container';
      container.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      `;
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.style.cssText = `
      background: #181512;
      border: 1px solid #D4A359;
      color: #FAF5EE;
      padding: 14px 20px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5), 0 0 15px rgba(212,163,89,0.25);
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 13px;
      display: flex;
      align-items: center;
      gap: 12px;
      pointer-events: auto;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;

    toast.innerHTML = `
      <div style="width:36px; height:36px; border-radius:50%; background:rgba(212,163,89,0.2); border:1px solid #D4A359; display:flex; align-items:center; justify-content:center; color:#ECC484; font-size:18px; shrink:0;">
        🌟
      </div>
      <div>
        <div style="font-weight:700; color:#FAF5EE; font-size:13.5px;">${title}</div>
        <div style="color:#ECC484; font-size:12px; margin-top:2px;">${subtitle || 'Saved to your Passport'}</div>
      </div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    }, 20);

    setTimeout(() => {
      toast.style.transform = 'translateY(20px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }
}

if (typeof window !== 'undefined') {
  window.VirasatPassportService = VirasatPassportService;
}
