const VIRASAT_STORAGE_KEY = 'virasat_passport_data';
const VIRASAT_STATS_KEY = 'virasat_user_stats';

const DEFAULT_STAMPS = [
  { 
    id: "architecture-imambara-golgumbaz",
    title: "Bada Imambara ↔ Gol Gumbaz", 
    region: "Uttar Pradesh ↔ Karnataka", 
    domain: "Architecture & Stepwells", 
    icon: "🏛️",
    date: "Aug 22, 2026", 
    similaritySummary: "Pillar-Free Acoustic Vaulting: Both engineered colossal unsupported spans without central pillars, creating acoustic sound transmission."
  },
  { 
    id: "stepwell-chandbaori-ranikivav",
    title: "Chand Baori ↔ Rani Ki Vav", 
    region: "Rajasthan ↔ Gujarat", 
    domain: "Architecture & Stepwells", 
    icon: "💧",
    date: "Aug 21, 2026", 
    similaritySummary: "Subterranean Desert Rainwater Harvesting: Both engineered multi-tier stepwells in arid Thar fringes with dry interlocking stone joinery."
  },
  { 
    id: "dance-kathak-kathakali",
    title: "Kathak ↔ Kathakali", 
    region: "Uttar Pradesh ↔ Kerala", 
    domain: "Dance & Dramatic Arts", 
    icon: "💃",
    date: "Aug 22, 2026", 
    similaritySummary: "Natya Shastra Roots: Both classical dances are rooted in the Natya Shastra, featuring 9 Navarasas micro-facial abhinaya and percussive rhythm."
  },
  { 
    id: "craft-chikankari-phulkari",
    title: "Lucknow Chikankari ↔ Punjabi Phulkari", 
    region: "Uttar Pradesh ↔ Punjab", 
    domain: "Art, Craft & Needlework", 
    icon: "🧵",
    date: "Aug 20, 2026", 
    similaritySummary: "Counted-Thread Heritage Needlework: Artisans count warp and weft yarns by hand to craft geometric matrilineal bridal heirlooms."
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
      console.warn('Storage read error:', e);
    }
    return [...DEFAULT_STAMPS];
  }

  static saveStamps(stamps) {
    try {
      localStorage.setItem(VIRASAT_STORAGE_KEY, JSON.stringify(stamps));
      window.dispatchEvent(new CustomEvent('virasat:passport-updated', { detail: { stamps } }));
    } catch (e) {
      console.warn('Storage write error:', e);
    }
  }

  static hasStamp(connectionId) {
    const stamps = this.getStamps();
    return stamps.some(s => s.id === connectionId);
  }

  static addStamp(connection) {
    if (!connection) return false;
    const stamps = this.getStamps();
    if (stamps.some(s => s.id === connection.id || s.title === connection.title)) {
      return false;
    }

    const topSimilarity = connection.similarities && connection.similarities[0]
      ? `${connection.similarities[0].title}: ${connection.similarities[0].desc}`
      : connection.connectionOverview;

    const newStamp = {
      id: connection.id,
      title: connection.title,
      region: `${connection.cultureA.regionName} ↔ ${connection.cultureB.regionName}`,
      domain: connection.domainName,
      icon: connection.domainIcon || '🏛️',
      date: 'Today',
      similaritySummary: topSimilarity
    };

    stamps.unshift(newStamp);
    this.saveStamps(stamps);
    return true;
  }

  static getStats() {
    const stamps = this.getStamps();
    return {
      solved: stamps.length,
      total: 28,
      streakDays: 12,
      level: 'Heritage Scholar',
      tokens: 4
    };
  }
}

window.VirasatPassportService = VirasatPassportService;
