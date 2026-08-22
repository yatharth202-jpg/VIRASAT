const VIRASAT_CONNECTIONS = [
  {
    id: "architecture-imambara-golgumbaz",
    title: "Bada Imambara & Gol Gumbaz",
    domainId: "architecture",
    domainName: "Architecture & Stepwells",
    domainIcon: "🏛️",
    difficulty: "Hard",
    correctGuess: "similar-architecture",
    guessOptions: [
      { id: "similar-architecture", label: "Pillar-Free Acoustic Vaulting", icon: "🏛️" },
      { id: "water-management", label: "Stepwell Cistern System", icon: "💧" },
      { id: "religious-influence", label: "Sufi Dargah Alignment", icon: "🕉️" },
      { id: "trade-exchange", label: "Silk Route Tile Glazing", icon: "🎨" }
    ],
    hints: [
      { id: 1, text: "Both monumental structures achieved world-record vault spans without steel girders or central support pillars." },
      { id: 2, text: "Both incorporate miraculous acoustic phenomena: whispering galleries and 3D ventilation labyrinths." },
      { id: 3, text: "One stands in Lucknow (Uttar Pradesh), the other in Vijayapura / Bijapur (Karnataka)." }
    ],
    cultureA: {
      regionId: "uttar-pradesh",
      regionName: "Uttar Pradesh",
      regionFlag: "🛕",
      siteName: "Bada Imambara (Bhool Bhulaiya)",
      location: "Lucknow, Uttar Pradesh",
      period: "1784 CE (Nawab Asaf-ud-Daula / Architect Kifayatullah)",
      shortDesc: "A monumental 50-meter arched central hall built without a single pillar or beam, topped by an acoustic 3D labyrinth.",
      image: "images/bada_imambara_lucknow.jpg",
      fallbackImage: "assets/images/bada_imambara_lucknow.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Bara_Imambara",
      wikiTitle: "Bara Imambara, Lucknow",
      unescoUrl: "https://asi.nic.in",
      badge: "UTTAR PRADESH"
    },
    cultureB: {
      regionId: "karnataka",
      regionName: "Karnataka",
      regionFlag: "🏛️",
      siteName: "Gol Gumbaz Whispering Gallery",
      location: "Vijayapura (Bijapur), Karnataka",
      period: "1656 CE (Mohammed Adil Shah / Architect Yaqut of Dabul)",
      shortDesc: "The second largest dome in the pre-modern world, featuring a circular gallery where the faintest whisper echoes 11 distinct times.",
      image: "images/gol_gumbaz_bijapur.jpg",
      fallbackImage: "assets/images/gol_gumbaz_bijapur.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Gol_Gumbaz",
      wikiTitle: "Gol Gumbaz, Bijapur",
      unescoUrl: "https://asi.nic.in",
      badge: "KARNATAKA"
    },
    connectionOverview: `Bada Imambara in Lucknow (UP) and Gol Gumbaz in Bijapur (Karnataka) are historic masterpieces of acoustic engineering and unsupported masonry. Built centuries before modern structural steel, both monuments engineered interlocking arch physics to create colossal pillar-free spaces.`,
    connectionDetails: `Bada Imambara's central hall spans 50 meters by 16 meters under a 15-meter arched ceiling supported entirely by interlocking Lakhori brickwork without wooden or iron beams, while Gol Gumbaz supports a 44-meter circular dome on 8 intersecting arches where even the rustle of paper carries across the entire gallery.`,
    bridgeImage: "images/bada_imambara_lucknow.jpg",
    bridgeImageB: "images/gol_gumbaz_bijapur.jpg",
    similarities: [
      {
        title: "Pillar-Free Massive Load Distribution",
        desc: "Neither monument uses central support pillars; both distribute immense overhead loads through intersecting arches and interlocking masonry vaults."
      },
      {
        title: "Acoustic Transmission Physics",
        desc: "Both structures manipulate sound waves: Bada Imambara's hollow labyrinth walls transmit whispers for secret security, while Gol Gumbaz's dome echoes a whisper 11 times across 44 meters."
      },
      {
        title: "Famine Relief & Royal Civic Works",
        desc: "Both monuments were commissioned during regional crises (such as the Awadh famine of 1784) to employ thousands of noblemen and commoners with dignity."
      }
    ],
    dissimilarities: [
      {
        title: "Linear Arched Vault vs. Massive Hemispherical Dome",
        desc: "Bada Imambara is a linear vaulted hall with a hollow multi-level rooftop labyrinth, while Gol Gumbaz is a cubical mausoleum crowned by a single giant circular dome."
      },
      {
        title: "Lakhnawi Brick-Lime Stucco vs. Deccan Basalt Masonry",
        desc: "Bada Imambara was built with lightweight Lakhori bricks and rice-husk lime mortar, while Gol Gumbaz was constructed with heavy dark Deccan basalt stone."
      }
    ],
    evidenceSources: [
      {
        title: "ASI - Bara Imambara Monument Page",
        org: "Archaeological Survey of India (Lucknow Circle)",
        url: "https://asi.nic.in",
        icon: "🏛️"
      },
      {
        title: "ASI - Gol Gumbaz Monument Dossier",
        org: "Archaeological Survey of India (Dharwad Circle)",
        url: "https://asi.nic.in",
        icon: "🌐"
      }
    ],
    wikipediaCards: [
      {
        culture: "Uttar Pradesh",
        title: "Bara Imambara",
        url: "https://en.wikipedia.org/wiki/Bara_Imambara",
        extract: "Bara Imambara is an imambara complex in Lucknow, India built by Asaf-ud-Daula in 1784. The central hall is the largest arched hall in the world without external pillar support.",
        image: "images/bada_imambara_lucknow.jpg"
      },
      {
        culture: "Karnataka",
        title: "Gol Gumbaz",
        url: "https://en.wikipedia.org/wiki/Gol_Gumbaz",
        extract: "Gol Gumbaz is the mausoleum of king Mohammed Adil Shah in Bijapur, Karnataka. It features an enormous 44-meter circular dome with an acoustic Whispering Gallery.",
        image: "images/gol_gumbaz_bijapur.jpg"
      }
    ]
  },
  {
    id: "stepwell-chandbaori-ranikivav",
    title: "Chand Baori & Rani Ki Vav",
    domainId: "architecture",
    domainName: "Architecture & Stepwells",
    domainIcon: "🏛️",
    difficulty: "Medium",
    correctGuess: "water-management",
    guessOptions: [
      { id: "similar-architecture", label: "Similar Step Geometry", icon: "📐" },
      { id: "water-management", label: "Subterranean Water Harvesting", icon: "💧" },
      { id: "religious-influence", label: "Temple Sanctum Alignment", icon: "🕉️" },
      { id: "trade-exchange", label: "Trade Route Caravan Rest", icon: "🐫" }
    ],
    hints: [
      { id: 1, text: "Both monuments are deep subterranean marvels built to harvest rainwater in the arid Thar desert fringe." },
      { id: 2, text: "One features 3,500 symmetrical triangular steps, while the other is an inverted temple with 800+ sculptures." },
      { id: 3, text: "One is located in Abhaneri (Rajasthan), the other in Patan (Gujarat)." }
    ],
    cultureA: {
      regionId: "rajasthan",
      regionName: "Rajasthan",
      regionFlag: "🏰",
      siteName: "Chand Baori Stepwell",
      location: "Abhaneri, Dausa District, Rajasthan",
      period: "8th - 9th Century CE (King Chanda / Nikumbha Dynasty)",
      shortDesc: "One of the oldest and deepest stepwells in the world, featuring 3,500 perfectly symmetrical steps over 13 storeys.",
      image: "images/chand_baori_rajasthan.jpg",
      fallbackImage: "assets/images/chand_baori_rajasthan.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Chand_Baori",
      wikiTitle: "Chand Baori, Abhaneri",
      unescoUrl: "https://whc.unesco.org",
      badge: "RAJASTHAN"
    },
    cultureB: {
      regionId: "gujarat",
      regionName: "Gujarat",
      regionFlag: "🌊",
      siteName: "Rani Ki Vav",
      location: "Patan, Saraswati River Basin, Gujarat",
      period: "11th Century CE (Queen Udayamati / Chaulukya Dynasty)",
      shortDesc: "A UNESCO World Heritage subterranean stepwell constructed as an inverted temple dedicated to Lord Vishnu.",
      image: "images/rani_ki_vav_gujarat.jpg",
      fallbackImage: "assets/images/rani_ki_vav_gujarat.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Rani_ki_Vav",
      wikiTitle: "Rani ki Vav (The Queen's Stepwell)",
      unescoUrl: "https://whc.unesco.org/en/list/922",
      badge: "GUJARAT"
    },
    connectionOverview: `Chand Baori in Rajasthan and Rani Ki Vav in Gujarat represent the pinnacle of medieval Indian water engineering. Both stepwells transformed the desperate necessity of harvesting desert groundwater into breathtaking works of mathematical symmetry and spiritual sanctity.`,
    connectionDetails: `While Chand Baori relies on an optical geometric matrix of 3,500 double-cascading stairs that create a mesmerizing play of light and shadow, Rani Ki Vav is crafted as a 7-tier subterranean temple adorned with over 800 divine sculptures, keeping water cool and sacred.`,
    bridgeImage: "images/chand_baori_rajasthan.jpg",
    bridgeImageB: "images/rani_ki_vav_gujarat.jpg",
    similarities: [
      {
        title: "Arid Zone Groundwater Harvesting",
        desc: "Both structures were engineered to capture seasonal monsoon runoff and tap deep subterranean water tables across the dry western Indian plains."
      },
      {
        title: "Subterranean Natural Air Conditioning",
        desc: "The deep vertical subterranean chambers remain 5°C to 6°C cooler than the scorching ground level, creating vital community gathering places."
      },
      {
        title: "Dry Interlocking Stone Joinery",
        desc: "Both masterworks were built using precision-cut sandstone joined through interlocking mortise-and-tenon masonry that has survived earthquakes for over a millennium."
      }
    ],
    dissimilarities: [
      {
        title: "Optical Geometry vs. Iconographic Sculpture Sanctuary",
        desc: "Chand Baori is celebrated for its hypnotic triangular zigzag stair matrix, while Rani Ki Vav is celebrated for its 800+ high-relief sculptures."
      },
      {
        title: "Royal Memorial Commission vs. Civic Fortress Reservoir",
        desc: "Rani Ki Vav was commissioned by Queen Udayamati as an eternal memorial to King Bhima I, whereas Chand Baori was built as a protective water citadel."
      }
    ],
    evidenceSources: [
      {
        title: "ASI - Chand Baori Protected Monument",
        org: "Archaeological Survey of India (Jaipur Circle)",
        url: "https://asi.nic.in",
        icon: "🏛️"
      },
      {
        title: "UNESCO - Rani Ki Vav World Heritage Dossier",
        org: "UNESCO World Heritage Centre",
        url: "https://whc.unesco.org/en/list/922",
        icon: "🌐"
      }
    ],
    wikipediaCards: [
      {
        culture: "Rajasthan",
        title: "Chand Baori",
        url: "https://en.wikipedia.org/wiki/Chand_Baori",
        extract: "Chand Baori is a stepwell in Abhaneri, Rajasthan. It consists of 3,500 narrow steps over 13 storeys, making it one of the deepest stepwells in the world.",
        image: "images/chand_baori_rajasthan.jpg"
      },
      {
        culture: "Gujarat",
        title: "Rani Ki Vav",
        url: "https://en.wikipedia.org/wiki/Rani_ki_Vav",
        extract: "Rani ki Vav is a stepwell in Patan, Gujarat. Built as an inverted temple, it was inscribed as a UNESCO World Heritage site in 2014.",
        image: "images/rani_ki_vav_gujarat.jpg"
      }
    ]
  },
  {
    id: "dance-kathak-kathakali",
    title: "Kathak & Kathakali",
    domainId: "dance",
    domainName: "Dance & Dramatic Arts",
    domainIcon: "💃",
    difficulty: "Medium",
    correctGuess: "religious-influence",
    guessOptions: [
      { id: "similar-architecture", label: "Temple Stage Design", icon: "🏛️" },
      { id: "water-management", label: "Riverfront Ritual Chants", icon: "💧" },
      { id: "religious-influence", label: "Natya Shastra & Epic Storytelling", icon: "🕉️" },
      { id: "trade-exchange", label: "Mughal Court Fusion", icon: "👑" }
    ],
    hints: [
      { id: 1, text: "Both are classical Indian dance forms rooted in the 2,000-year-old Natya Shastra." },
      { id: 2, text: "One is famous for lightning footwork (Tatkar) and spins; the other for elaborate green face makeup (Paccha) and all-night temple drama." },
      { id: 3, text: "One flourishes in Uttar Pradesh (Lucknow/Banaras), the other in Kerala." }
    ],
    cultureA: {
      regionId: "uttar-pradesh",
      regionName: "Uttar Pradesh",
      regionFlag: "🛕",
      siteName: "Kathak Classical Dance",
      location: "Lucknow / Varanasi Gharanas, Uttar Pradesh",
      period: "Ancient Vedic Kathakars & Nawabi Court Renaissance",
      shortDesc: "The classical dance of storytellers ('Katha Kahe So Kathak') characterized by rhythmic tatkar footwork, ghungroos, and graceful abhinaya.",
      image: "images/kathak_dance_lucknow.jpg",
      fallbackImage: "assets/images/kathak_dance_lucknow.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Kathak",
      wikiTitle: "Kathak Dance",
      unescoUrl: "https://ich.unesco.org",
      badge: "UTTAR PRADESH"
    },
    cultureB: {
      regionId: "kerala",
      regionName: "Kerala",
      regionFlag: "🌴",
      siteName: "Kathakali Dance Drama",
      location: "Temple Koothambalams, Kerala",
      period: "17th Century CE",
      shortDesc: "A highly stylized classical dance-drama featuring vibrant Paccha makeup, towering Kiritam headdresses, and intricate eye expressions.",
      image: "images/kathakali_dance_kerala.jpg",
      fallbackImage: "assets/images/kathakali_dance_kerala.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Kathakali",
      wikiTitle: "Kathakali Drama",
      unescoUrl: "https://ich.unesco.org",
      badge: "KERALA"
    },
    connectionOverview: `Originating in the northern river plains of Uttar Pradesh and the lush southwestern coast of Kerala, Kathak and Kathakali share the sacred foundation of Bharata Muni's Natya Shastra, translating the Mahabharata and Ramayana into expressive body language.`,
    connectionDetails: `Kathak emphasizes solo rhythmic mastery, swift 360-degree pirouettes (Chakkars), and subtle facial expressions (Bhav), while Kathakali is an explosive multi-character theatrical spectacle where actors communicate entirely without speaking, using 24 basic Mudras and microscopic eye movements (Netra Abhinaya).`,
    bridgeImage: "images/kathak_dance_lucknow.jpg",
    bridgeImageB: "images/kathakali_dance_kerala.jpg",
    similarities: [
      {
        title: "Natya Shastra Core Foundation",
        desc: "Both dances follow the foundational tripartite division: Nritta (pure rhythmic dance), Nritya (expressive dance with theme), and Natya (dramatic storytelling)."
      },
      {
        title: "Micro-Facial Abhinaya (Navarasas)",
        desc: "Both masters train for years in the Nine Emotions (Shringara, Veera, Karuna, Raudra, Hasya, Bibhatsa, etc.) using refined facial muscles."
      },
      {
        title: "Percussive Footwork & Complex Taals",
        desc: "Both require precise foot striking in sync with drums: Tabla and Pakhawaj in Kathak, and Chenda and Maddalam in Kathakali."
      }
    ],
    dissimilarities: [
      {
        title: "Solo Fluid Grace vs. Heavy Ensemble Theatre",
        desc: "Kathak is performed as a solo recital in lightweight kurtas, whereas Kathakali features full character troupes in 30-kg skirts."
      },
      {
        title: "Natural Makeup vs. Mineral Paccha Masks",
        desc: "Kathak dancers use natural cosmetics, while Kathakali requires 4 hours of applying mineral pigment pastes and rice-paste chutti ridges."
      }
    ],
    evidenceSources: [
      {
        title: "Sangeet Natak Akademi",
        org: "Ministry of Culture, Govt. of India",
        url: "https://sangeetnatak.gov.in",
        icon: "🎭"
      },
      {
        title: "Kerala Kalamandalam",
        org: "State Cultural Institution of Kerala",
        url: "https://kalamandalam.ac.in",
        icon: "🏛️"
      }
    ],
    wikipediaCards: [
      {
        culture: "Uttar Pradesh",
        title: "Kathak",
        url: "https://en.wikipedia.org/wiki/Kathak",
        extract: "Kathak is one of the eight major forms of Indian classical dance, characterized by rhythmic foot movements adorned with small bells (ghungroo).",
        image: "images/kathak_dance_lucknow.jpg"
      },
      {
        culture: "Kerala",
        title: "Kathakali",
        url: "https://en.wikipedia.org/wiki/Kathakali",
        extract: "Kathakali is a major form of classical Indian dance drama distinguished by colorful makeup and towering headdresses.",
        image: "images/kathakali_dance_kerala.jpg"
      }
    ]
  },
  {
    id: "dance-bhangra-garba",
    title: "Punjabi Bhangra & Gujarati Garba",
    domainId: "dance",
    domainName: "Dance & Dramatic Arts",
    domainIcon: "💃",
    difficulty: "Medium",
    correctGuess: "religious-influence",
    guessOptions: [
      { id: "similar-architecture", label: "Stage Acoustic Design", icon: "🏛️" },
      { id: "water-management", label: "Riverfront Chants", icon: "💧" },
      { id: "religious-influence", label: "Communal Harvest Joy & Folk Circles", icon: "🌾" },
      { id: "trade-exchange", label: "Silk Route Folk Exchange", icon: "🤝" }
    ],
    hints: [
      { id: 1, text: "Both are world-famous, high-energy folk circle dance forms celebrating seasonal harvest and festivals." },
      { id: 2, text: "One is accompanied by the thunderous beat of the Dhol on Baisakhi; the other is danced in Navratri circles with rhythmic clapping." },
      { id: 3, text: "One hails from Punjab, the other from Gujarat (UNESCO Intangible Heritage)." }
    ],
    cultureA: {
      regionId: "punjab",
      regionName: "Punjab",
      regionFlag: "🌾",
      siteName: "Punjabi Bhangra & Giddha",
      location: "Majha / Doaba / Malwa, Punjab",
      period: "Centuries-old Punjabi Baisakhi Folk Heritage",
      shortDesc: "The joyous folk dance of Punjab celebrating the golden wheat harvest with dynamic leaps, boliyan, and pulsating dhol rhythms.",
      image: "images/punjab_bhangra_dance.jpg",
      fallbackImage: "assets/images/punjab_bhangra_dance.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Bhangra_(dance)",
      wikiTitle: "Bhangra (Dance)",
      unescoUrl: "https://ich.unesco.org",
      badge: "PUNJAB"
    },
    cultureB: {
      regionId: "gujarat",
      regionName: "Gujarat",
      regionFlag: "🌊",
      siteName: "Gujarati Garba & Raas",
      location: "Ahmedabad / Vadodara, Gujarat",
      period: "Ancient Navratri Shakti Tradition (UNESCO Heritage)",
      shortDesc: "The vibrant devotional circular dance performed during Navratri, moving in concentric circles with synchronized rhythmic claps.",
      image: "images/gujarat_garba_dance.jpg",
      fallbackImage: "assets/images/gujarat_garba_dance.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Garba_(dance)",
      wikiTitle: "Garba of Gujarat",
      unescoUrl: "https://ich.unesco.org/en/RL/garba-of-gujarat-01962",
      badge: "GUJARAT"
    },
    connectionOverview: `Bhangra from Punjab and Garba from Gujarat represent the heart and soul of India's community folk celebrations. Both dances bring entire communities together in circular unity to celebrate agricultural bounty and seasonal renewal.`,
    connectionDetails: `While Bhangra channels the exuberance of the spring Baisakhi wheat harvest through high-velocity arm movements, shoulder shrugs, and jumping footwork to the acoustic dhol, Garba channels reverence for the Goddess during autumn Navratri through hypnotic circular twirls and hand clapping around the sacred Garbha lamp.`,
    bridgeImage: "images/punjab_bhangra_dance.jpg",
    bridgeImageB: "images/gujarat_garba_dance.jpg",
    similarities: [
      {
        title: "Communal Circular Unity & Inclusivity",
        desc: "Neither dance is meant for passive observation; both are participatory folk arts where people of all generations dance together in expansive circles."
      },
      {
        title: "Seasonal Agriculture & Festival Connection",
        desc: "Both are deeply tied to agricultural rhythms: Bhangra celebrates the ripening of the rabi wheat crop, while Garba celebrates the autumn harvest."
      },
      {
        title: "Percussive Dhol Rhythm Driving the Climax",
        desc: "Both dances steadily accelerate in tempo (laya), starting with measured steps and building to a breathless crescendo powered by live dhol drummers."
      }
    ],
    dissimilarities: [
      {
        title: "Vertical Leaps vs. Continuous Swirling Twirls",
        desc: "Bhangra features explosive vertical kicks and jumps, whereas Garba emphasizes fluid circular rotations and synchronized claps."
      },
      {
        title: "Agrarian Harvest Celebration vs. Sacred Shakti Devotion",
        desc: "Bhangra originated as a celebration of farming toil and harvest joy, whereas Garba is centered around a devotional shrine to Goddess Durga."
      }
    ],
    evidenceSources: [
      {
        title: "UNESCO - Garba of Gujarat Intangible Heritage",
        org: "UNESCO Intangible Cultural Heritage",
        url: "https://ich.unesco.org/en/RL/garba-of-gujarat-01962",
        icon: "🌐"
      },
      {
        title: "Sangeet Natak Akademi - Folk Arts Repository",
        org: "Ministry of Culture, Govt. of India",
        url: "https://sangeetnatak.gov.in",
        icon: "💃"
      }
    ],
    wikipediaCards: [
      {
        culture: "Punjab",
        title: "Bhangra",
        url: "https://en.wikipedia.org/wiki/Bhangra_(dance)",
        extract: "Bhangra is an energetic folk dance originating from Punjab, traditionally performed by farmers to celebrate Baisakhi.",
        image: "images/punjab_bhangra_dance.jpg"
      },
      {
        culture: "Gujarat",
        title: "Garba",
        url: "https://en.wikipedia.org/wiki/Garba_(dance)",
        extract: "Garba is a form of dance originating from Gujarat performed in concentric circles during Navratri.",
        image: "images/gujarat_garba_dance.jpg"
      }
    ]
  },
  {
    id: "dance-ghoomar-yakshagana",
    title: "Rajasthani Ghoomar & Karnataka Yakshagana",
    domainId: "dance",
    domainName: "Dance & Dramatic Arts",
    domainIcon: "💃",
    difficulty: "Medium",
    correctGuess: "religious-influence",
    guessOptions: [
      { id: "similar-architecture", label: "Courtyard Stage Engineering", icon: "🏛️" },
      { id: "water-management", label: "Monsoon Chants", icon: "💧" },
      { id: "religious-influence", label: "Devotional Narrative & Kinetic Swirls", icon: "🕉️" },
      { id: "trade-exchange", label: "Royal Court Treaties", icon: "👑" }
    ],
    hints: [
      { id: 1, text: "Both represent profound folk-classical performance arts with elaborate headwear and swirling costumery." },
      { id: 2, text: "One is famous for veiled pirouettes (Ghoomna) by women; the other is a powerful all-night dance-theatre drama with giant headgear." },
      { id: 3, text: "One represents Rajasthan, the other Karnataka." }
    ],
    cultureA: {
      regionId: "rajasthan",
      regionName: "Rajasthan",
      regionFlag: "🏰",
      siteName: "Rajasthani Ghoomar Dance",
      location: "Udaipur / Jodhpur / Jaipur, Rajasthan",
      period: "Bhil Tribal Roots & Rajput Royal Court Tradition",
      shortDesc: "The graceful folk dance of Rajasthan characterized by synchronized pirouettes ('Ghoomna') in heavy flared multi-colored ghagras.",
      image: "images/rajasthan_ghoomar_dance.jpg",
      fallbackImage: "assets/images/rajasthan_ghoomar_dance.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Ghoomar",
      wikiTitle: "Ghoomar Dance",
      unescoUrl: "https://sangeetnatak.gov.in",
      badge: "RAJASTHAN"
    },
    cultureB: {
      regionId: "karnataka",
      regionName: "Karnataka",
      regionFlag: "🏛️",
      siteName: "Karnataka Yakshagana Theatre",
      location: "Coastal & Malenadu Regions, Karnataka",
      period: "11th - 16th Century CE (Bhakti Movement)",
      shortDesc: "A majestic traditional theatre form combining dance, music, dialogue, and extravagant costumes depicting epic battles from the Ramayana.",
      image: "images/karnataka_yakshagana_dance.jpg",
      fallbackImage: "assets/images/karnataka_yakshagana_dance.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Yakshagana",
      wikiTitle: "Yakshagana Theatre",
      unescoUrl: "https://sangeetnatak.gov.in",
      badge: "KARNATAKA"
    },
    connectionOverview: `Ghoomar from Rajasthan and Yakshagana from Karnataka demonstrate the incredible diversity of Indian performance arts that fuse folklore, sacred devotion, and kinetic costume physics.`,
    connectionDetails: `While Ghoomar focuses on subtle, veiled pirouettes where royal women glide to the acoustic dholak and sarangi, Yakshagana transforms the stage into an epic mythological battleground powered by the thunderous Chande drum and high-voltage spins (Giri).`,
    bridgeImage: "images/rajasthan_ghoomar_dance.jpg",
    bridgeImageB: "images/karnataka_yakshagana_dance.jpg",
    similarities: [
      {
        title: "Rotational Kinetic Energy",
        desc: "Both traditions feature high-velocity pirouettes that create swirling geometric shapes with multi-layered costumes."
      },
      {
        title: "Folk Epics & Ballads",
        desc: "Both forms preserve ancient regional poetry, heroic historical legends, and Bhakti devotion."
      },
      {
        title: "Intricate Costume Craft",
        desc: "Both feature hand-embroidered textiles, metallic sequins, and traditional handcrafted jewelry."
      }
    ],
    dissimilarities: [
      {
        title: "Veiled Royal Grace vs. Expressive Mythological Drama",
        desc: "Ghoomar is a graceful feminine dance performed in royal courtyards, whereas Yakshagana is a high-intensity theatrical drama."
      },
      {
        title: "Dholak Melodies vs. Chande & Maddale Percussion",
        desc: "Ghoomar relies on mellow folk melodies, while Yakshagana is driven by the penetrating acoustic strike of the Chande."
      }
    ],
    evidenceSources: [
      {
        title: "West Zone Cultural Centre, Udaipur",
        org: "Ministry of Culture, Govt. of India",
        url: "https://wzccindia.gov.in",
        icon: "🏛️"
      },
      {
        title: "Karnataka Yakshagana Academy",
        org: "Govt. of Karnataka",
        url: "https://karnataka.gov.in",
        icon: "🎭"
      }
    ],
    wikipediaCards: [
      {
        culture: "Rajasthan",
        title: "Ghoomar",
        url: "https://en.wikipedia.org/wiki/Ghoomar",
        extract: "Ghoomar is a traditional folk dance of Rajasthan, performed by women in flowing flared ghagharas.",
        image: "images/rajasthan_ghoomar_dance.jpg"
      },
      {
        culture: "Karnataka",
        title: "Yakshagana",
        url: "https://en.wikipedia.org/wiki/Yakshagana",
        extract: "Yakshagana is a traditional Indian theatre form developed in Karnataka that combines dance, music, and stagecraft.",
        image: "images/karnataka_yakshagana_dance.jpg"
      }
    ]
  },
  {
    id: "craft-chikankari-phulkari",
    title: "Lucknow Chikankari & Punjabi Phulkari",
    domainId: "art-craft",
    domainName: "Art, Craft & Needlework",
    domainIcon: "🎨",
    difficulty: "Easy",
    correctGuess: "trade-exchange",
    guessOptions: [
      { id: "similar-architecture", label: "Loom Woodworking", icon: "🏛️" },
      { id: "water-management", label: "River Vat Dyeing", icon: "💧" },
      { id: "religious-influence", label: "Temple Hanging Vows", icon: "🕉️" },
      { id: "trade-exchange", label: "Counted-Thread Heritage Needlework", icon: "🧵" }
    ],
    hints: [
      { id: 1, text: "Both are world-famous hand-embroidery traditions passed down matrilineally across generations." },
      { id: 2, text: "One is ethereal white-on-white shadow embroidery on fine muslin; the other is vibrant floral silk embroidery on khaddar." },
      { id: 3, text: "One was nurtured by the royal courts of Lucknow (UP), the other by agrarian families across Punjab." }
    ],
    cultureA: {
      regionId: "uttar-pradesh",
      regionName: "Uttar Pradesh",
      regionFlag: "🛕",
      siteName: "Lucknow Chikankari",
      location: "Lucknow, Uttar Pradesh",
      period: "Mughal Era (Empress Noor Jahan) & Nawabi Lucknow (18th Century)",
      shortDesc: "Delicate white-on-white shadow needlework encompassing 32 intricate hand stitches on fine cotton muslin and organza.",
      image: "images/lucknow_chikankari.jpg",
      fallbackImage: "assets/images/lucknow_chikankari.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Chikan_(embroidery)",
      wikiTitle: "Chikankari of Lucknow",
      unescoUrl: "https://ich.unesco.org",
      badge: "UTTAR PRADESH"
    },
    cultureB: {
      regionId: "punjab",
      regionName: "Punjab",
      regionFlag: "🌾",
      siteName: "Punjabi Phulkari",
      location: "Majha / Malwa / Doaba, Punjab",
      period: "15th Century CE (Folk Punjabi Heritage & Heer Ranjha Epic)",
      shortDesc: "Vibrant 'flower embroidery' crafted with untwisted silk floss (Pat) on coarse handspun khaddar fabric from the reverse side.",
      image: "images/punjabi_phulkari.jpg",
      fallbackImage: "assets/images/punjabi_phulkari.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Phulkari",
      wikiTitle: "Phulkari Embroidery",
      unescoUrl: "https://ich.unesco.org",
      badge: "PUNJAB"
    },
    connectionOverview: `Lucknow Chikankari from Uttar Pradesh and Phulkari from Punjab represent two of India's most celebrated textile traditions. Both crafts turn simple raw cloth into intricate heirlooms through counted-thread embroidery, requiring exceptional visual acuity and patience.`,
    connectionDetails: `While Chikankari creates aristocratic, ghostly shadows on sheer muslin with fine white stitches (Bakhiya, Murri, Phanda), Phulkari creates a dazzling tapestry of joyful geometric flowers (Bagh) using golden-yellow and ruby-red untwisted silk floss on rugged homespun khaddar.`,
    bridgeImage: "images/lucknow_chikankari.jpg",
    bridgeImageB: "images/punjabi_phulkari.jpg",
    similarities: [
      {
        title: "Counted-Thread Manual Precision",
        desc: "Artisans in both crafts count the individual warp and weft yarns of the fabric by eye to ensure perfect geometric symmetry without tracing machines."
      },
      {
        title: "Matrilineal Heirloom Tradition",
        desc: "Both embroideries have historically been stitched by women at home, gifted as priceless bridal trousseaus (Daaj in Punjab) and family blessing tokens."
      },
      {
        title: "GI (Geographical Indication) Protection",
        desc: "Both crafts hold official GI tags from the Government of India, protecting authentic artisan guilds from industrial machine counterfeits."
      }
    ],
    dissimilarities: [
      {
        title: "Monochromatic White Shadow vs. Saturated Multi-Color Silk",
        desc: "Chikankari is famed for its subtle white-on-white shadow work, whereas Phulkari is famous for explosive saturated colors (yellow, orange, pink, green, deep red)."
      },
      {
        title: "Delicate Sheer Muslin vs. Coarse Homespun Khaddar",
        desc: "Chikankari requires fine sheer fabrics like mulmul, georgette, and organza, while Phulkari is worked on durable, heavy indigo or rust-dyed handspun khaddar."
      }
    ],
    evidenceSources: [
      {
        title: "GI Registry - Geographical Indications of India",
        org: "Intellectual Property Office, Govt. of India",
        url: "https://ipindia.gov.in",
        icon: "📜"
      },
      {
        title: "Crafts Council of India - Traditional Textiles",
        org: "National Crafts Authority",
        url: "https://craftscouncilofindia.org",
        icon: "🧵"
      }
    ],
    wikipediaCards: [
      {
        culture: "Uttar Pradesh",
        title: "Chikan (Embroidery)",
        url: "https://en.wikipedia.org/wiki/Chikan_(embroidery)",
        extract: "Chikan is a traditional embroidery style from Lucknow, India, celebrated for delicate shadow work on sheer muslin.",
        image: "images/lucknow_chikankari.jpg"
      },
      {
        culture: "Punjab",
        title: "Phulkari",
        url: "https://en.wikipedia.org/wiki/Phulkari",
        extract: "Phulkari literally means flower work. It is an embroidery technique from the Punjab region featuring vibrant darn stitches with silk thread.",
        image: "images/punjabi_phulkari.jpg"
      }
    ]
  },
  {
    id: "craft-ajrakh-bluepottery",
    title: "Kutch Ajrakh & Jaipur Blue Pottery",
    domainId: "art-craft",
    domainName: "Art, Craft & Needlework",
    domainIcon: "🎨",
    difficulty: "Medium",
    correctGuess: "trade-exchange",
    guessOptions: [
      { id: "similar-architecture", label: "Kiln Structural Engineering", icon: "🏛️" },
      { id: "water-management", label: "River Wash Chemistry", icon: "💧" },
      { id: "trade-exchange", label: "Natural Mineral Pigments & Cobalt Glazes", icon: "🎨" },
      { id: "religious-influence", label: "Sufi Motif Geometry", icon: "🕉️" }
    ],
    hints: [
      { id: 1, text: "Both masterworks rely on complex alchemy using natural mineral dyes like indigo, cobalt, and copper oxides." },
      { id: 2, text: "One is 16-stage hand-block resist printing on cotton; the other is unique quartz-based non-clay ceramic craftsmanship." },
      { id: 3, text: "One thrives in the desert of Kutch (Gujarat), the other in the royal workshops of Jaipur (Rajasthan)." }
    ],
    cultureA: {
      regionId: "gujarat",
      regionName: "Gujarat",
      regionFlag: "🌊",
      siteName: "Kutch Ajrakh Block Print",
      location: "Ajrakhpur / Dhamadka, Kutch, Gujarat",
      period: "Indus Valley Roots & Khatri Artisan Guilds (4,000+ Years)",
      shortDesc: "Ancient 16-step natural dye block printing on fabric featuring hypnotic star and clover geometric motifs in deep indigo and madder red.",
      image: "images/gujarat_ajrakh_craft.jpg",
      fallbackImage: "assets/images/gujarat_ajrakh_craft.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Ajrak",
      wikiTitle: "Ajrakh Block Printing",
      unescoUrl: "https://craftscouncilofindia.org",
      badge: "GUJARAT"
    },
    cultureB: {
      regionId: "rajasthan",
      regionName: "Rajasthan",
      regionFlag: "🏰",
      siteName: "Jaipur Blue Pottery",
      location: "Jaipur / Sanganer, Rajasthan",
      period: "Turko-Persian Fusion (Maharaja Sawai Ram Singh II, 19th Century)",
      shortDesc: "A distinctive ceramic craft made without clay, utilizing crushed quartz, glass, and copper oxide glaze fired to produce dazzling turquoise hues.",
      image: "images/blue-pottery-hd.jpg",
      fallbackImage: "assets/images/blue-pottery-hd.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Blue_Pottery_of_Jaipur",
      wikiTitle: "Blue Pottery of Jaipur",
      unescoUrl: "https://craftscouncilofindia.org",
      badge: "RAJASTHAN"
    },
    connectionOverview: `Kutch Ajrakh from Gujarat and Jaipur Blue Pottery from Rajasthan demonstrate the genius of Indian artisan chemistry. Both crafts transform raw minerals (indigo, copper, cobalt, gum) into stunning geometric patterns.`,
    connectionDetails: `While Ajrakh uses carved teakwood blocks to stamp intricate resist pastes across 16 stages of river washing and indigo vat dyeing, Jaipur Blue Pottery shapes non-clay Egyptian paste into delicate floral vases glazed with cobalt oxide.`,
    bridgeImage: "images/gujarat_ajrakh_craft.jpg",
    bridgeImageB: "images/blue-pottery-hd.jpg",
    similarities: [
      {
        title: "Natural Mineral Chemistry",
        desc: "Both crafts rely on natural mineral pigments: indigo plant extract, copper oxide, pomegranate rind, and iron rust."
      },
      {
        title: "Sacred Geometric Symmetry",
        desc: "Both art forms use interlocking Islamic and Vedic geometric motifs that repeat infinitely with mathematical precision."
      },
      {
        title: "Desert GI Heritage",
        desc: "Both are proud Geographical Indication (GI) heritage crafts protected by master artisan families."
      }
    ],
    dissimilarities: [
      {
        title: "Textile Block Resist vs. Quartz Fired Ceramics",
        desc: "Ajrakh is a dyed textile tradition on organic cotton/silk, whereas Blue Pottery produces glazed quartz tableware and tiles."
      },
      {
        title: "16-Stage Dyeing vs. Kiln Firing",
        desc: "Ajrakh involves multiple soaking and sun-bleaching stages, while Blue Pottery requires precise single-firing at 800°C."
      }
    ],
    evidenceSources: [
      {
        title: "Crafts Council of India",
        org: "National Crafts Authority",
        url: "https://craftscouncilofindia.org",
        icon: "🎨"
      },
      {
        title: "GI Registry India",
        org: "Intellectual Property India",
        url: "https://ipindia.gov.in",
        icon: "📜"
      }
    ],
    wikipediaCards: [
      {
        culture: "Gujarat",
        title: "Ajrak",
        url: "https://en.wikipedia.org/wiki/Ajrak",
        extract: "Ajrak is a unique form of blockprinted shawls and tiles found in Kutch, Gujarat, displaying special designs and patterns made using block printing by stamps.",
        image: "images/gujarat_ajrakh_craft.jpg"
      },
      {
        culture: "Rajasthan",
        title: "Blue Pottery of Jaipur",
        url: "https://en.wikipedia.org/wiki/Blue_Pottery_of_Jaipur",
        extract: "Blue Pottery of Jaipur is a traditional craft of Jaipur, Rajasthan. It is made of dough prepared by mixing quartz stone powder, powdered glass, Fuller's Earth and water.",
        image: "images/blue-pottery-hd.jpg"
      }
    ]
  },
  {
    id: "craft-warli-madhubani",
    title: "Warli Art & Madhubani Painting",
    domainId: "art-craft",
    domainName: "Art, Craft & Needlework",
    domainIcon: "🎨",
    difficulty: "Easy",
    correctGuess: "religious-influence",
    guessOptions: [
      { id: "similar-architecture", label: "Temple Wall Joinery", icon: "🏛️" },
      { id: "water-management", label: "Pond Mud Binding", icon: "💧" },
      { id: "religious-influence", label: "Sacred Folk Motifs & Rice-Paste Rituals", icon: "🌾" },
      { id: "trade-exchange", label: "Silk Route Canvas Trade", icon: "🎨" }
    ],
    hints: [
      { id: 1, text: "Both are world-renowned indigenous folk painting traditions originally painted on village hut mud walls using rice flour and bamboo twigs." },
      { id: 2, text: "One uses simple geometric figures (triangles and circles) depicting the circle of life (Tarpa dance); the other uses double-line outlines filled with vibrant natural colors." },
      { id: 3, text: "One hails from the Sahyadri mountains of Maharashtra, the other from the Mithila region of Bihar." }
    ],
    cultureA: {
      regionId: "maharashtra",
      regionName: "Maharashtra",
      regionFlag: "🏹",
      siteName: "Warli Tribal Folk Art",
      location: "Dahanu / Palghar, Maharashtra",
      period: "Neolithic Roots (3,000 BCE to present)",
      shortDesc: "Primitive tribal wall art using geometric circles, triangles, and white rice paste on red ochre mud walls depicting communal harmony and mother nature.",
      image: "assets/twin_warli.png",
      fallbackImage: "assets/twin_warli.png",
      wikiUrl: "https://en.wikipedia.org/wiki/Warli_painting",
      wikiTitle: "Warli Painting",
      unescoUrl: "https://sangeetnatak.gov.in",
      badge: "MAHARASHTRA"
    },
    cultureB: {
      regionId: "bihar",
      regionName: "Bihar",
      regionFlag: "🎨",
      siteName: "Mithila Madhubani Painting",
      location: "Madhubani / Darbhanga, Bihar",
      period: "Ancient Mithila Heritage (Ramayana Era)",
      shortDesc: "Vibrant ceremonial wall and paper art featuring double-line contours filled with natural mineral pigments, sacred flora, and cosmic icons.",
      image: "assets/discovery_madhubani.jpg",
      fallbackImage: "assets/discovery_madhubani.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Madhubani_art",
      wikiTitle: "Madhubani Art",
      unescoUrl: "https://craftscouncilofindia.org",
      badge: "BIHAR"
    },
    connectionOverview: `Warli art from Maharashtra and Madhubani painting from Bihar are two of India's most ancient visual traditions. Both art forms began as sacred ritual offerings painted on the mud walls of village huts by women during harvest festivals and weddings.`,
    connectionDetails: `While Warli uses pure monochromatic minimalism (white rice paste and chewed bamboo sticks on red mud) to represent the cosmic circle of life through the Tarpa spiral dance, Madhubani bursts with rich mineral colors (turmeric, indigo, lampblack) to depict fertility, love, and divine nature.`,
    bridgeImage: "assets/twin_warli.png",
    bridgeImageB: "assets/discovery_madhubani.jpg",
    similarities: [
      {
        title: "Mud Wall & Natural Rice-Paste Origins",
        desc: "Both traditions began as ephemeral domestic wall paintings (Bhitti Chitra) created on freshly plastered cow-dung and clay walls using natural binders."
      },
      {
        title: "Reverence for Flora, Fauna & Cosmic Life",
        desc: "Both celebrate nature without vanity: birds, trees of life, sun, moon, and farming rituals form the spiritual center of both canvases."
      },
      {
        title: "Matrilineal Cultural Transmission",
        desc: "Both art forms were sustained and passed down through mothers teaching daughters as an essential rite of passage for marriage and village harmony."
      }
    ],
    dissimilarities: [
      {
        title: "Monochromatic Geometric Minimalism vs. Polychromatic Mythological Detail",
        desc: "Warli relies strictly on white triangles and circles on ochre backgrounds, whereas Madhubani uses colorful double-line borders and dense figurative narratives."
      },
      {
        title: "Agrarian Tribal Ritual vs. Mithila Classical Epic",
        desc: "Warli is an egalitarian tribal art celebrating nature deities (Palghat), while Madhubani incorporates classical epics and Kohbar wedding motifs."
      }
    ],
    evidenceSources: [
      {
        title: "Tribal Research & Training Institute",
        org: "Govt. of Maharashtra",
        url: "https://trti.maharashtra.gov.in",
        icon: "🏹"
      },
      {
        title: "Upendra Maharathi Shilp Anusandhan Sansthan",
        org: "Govt. of Bihar",
        url: "https://biharcrafts.com",
        icon: "🎨"
      }
    ],
    wikipediaCards: [
      {
        culture: "Maharashtra",
        title: "Warli Painting",
        url: "https://en.wikipedia.org/wiki/Warli_painting",
        extract: "Warli painting is a style of tribal art mostly created by the tribal people from the North Sahyadri Range in Maharashtra, India.",
        image: "assets/twin_warli.png"
      },
      {
        culture: "Bihar",
        title: "Madhubani Art",
        url: "https://en.wikipedia.org/wiki/Madhubani_art",
        extract: "Madhubani art is a style of painting practiced in the Mithila region of Bihar. It is characterized by eye-catching geometrical patterns.",
        image: "assets/discovery_madhubani.jpg"
      }
    ]
  },
  {
    id: "architecture-hampi-goldentemple",
    title: "Hampi Chariot & Golden Temple",
    domainId: "architecture",
    domainName: "Architecture & Stepwells",
    domainIcon: "🏛️",
    difficulty: "Medium",
    correctGuess: "religious-influence",
    guessOptions: [
      { id: "similar-architecture", label: "Stone & Gilt Sanctuary Engineering", icon: "🏛️" },
      { id: "water-management", label: "Sacred Sarovar Tank Architecture", icon: "💧" },
      { id: "religious-influence", label: "Universal Spiritual Openness & Sanctuary", icon: "🕉️" },
      { id: "trade-exchange", label: "Riverine Trade Citadel", icon: "🚢" }
    ],
    hints: [
      { id: 1, text: "Both are world-renowned sacred monumental complexes with sacred water tanks and immortal architecture." },
      { id: 2, text: "One is a monolithic granite stone chariot inside a UNESCO World Heritage temple city; the other is the holiest Sikh sanctum surrounded by the sacred Amrit Sarovar." },
      { id: 3, text: "One stands in Vijayanagara (Karnataka), the other in Amritsar (Punjab)." }
    ],
    cultureA: {
      regionId: "karnataka",
      regionName: "Karnataka",
      regionFlag: "🏛️",
      siteName: "Hampi Stone Chariot (Vittala Temple)",
      location: "Hampi, Vijayanagara District, Karnataka",
      period: "16th Century CE (King Krishnadevaraya / Vijayanagara Empire)",
      shortDesc: "A monolithic carved granite chariot shrine dedicated to Garuda, featuring interlocking stone wheels and musical pillars.",
      image: "images/karnataka_hampi_chariot.jpg",
      fallbackImage: "assets/images/karnataka_hampi_chariot.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Hampi",
      wikiTitle: "Hampi Monuments",
      unescoUrl: "https://whc.unesco.org/en/list/241",
      badge: "KARNATAKA"
    },
    cultureB: {
      regionId: "punjab",
      regionName: "Punjab",
      regionFlag: "🌾",
      siteName: "Sri Harmandir Sahib (Golden Temple)",
      location: "Amritsar, Punjab",
      period: "1581 CE (Guru Arjan Dev / Foundation by Sufi Saint Mian Mir)",
      shortDesc: "The holiest Sikh Gurdwara, gilded in pure gold foil, resting in the center of the sacred pool of nectar with four open entrances welcoming all humanity.",
      image: "images/punjab_golden_temple.jpg",
      fallbackImage: "assets/images/punjab_golden_temple.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Golden_Temple",
      wikiTitle: "Golden Temple, Amritsar",
      unescoUrl: "https://whc.unesco.org",
      badge: "PUNJAB"
    },
    connectionOverview: `Hampi in Karnataka and the Golden Temple in Punjab represent two of the greatest spiritual sanctuaries in Indian history, blending monumental sacred architecture with deep egalitarian devotion.`,
    connectionDetails: `While the Stone Chariot in Hampi represents the peak of Vijayanagara granite sculpture and musical stone engineering on the banks of the Tungabhadra, Sri Harmandir Sahib in Amritsar embodies spiritual purity with its four open doors welcoming all faiths.`,
    bridgeImage: "images/karnataka_hampi_chariot.jpg",
    bridgeImageB: "images/punjab_golden_temple.jpg",
    similarities: [
      {
        title: "Sacred Water Tank Integration",
        desc: "Both monuments integrate sacred water bodies (Amrit Sarovar in Amritsar and Pushkarani sacred tanks in Hampi) as essential spiritual elements."
      },
      {
        title: "Egalitarian Spiritual Philosophy",
        desc: "Both sanctuaries champion openness: the Golden Temple has four doors open to all castes, while Vijayanagara welcomed global travelers and pilgrims."
      },
      {
        title: "Master Masonry & Metalwork",
        desc: "Both display unparalleled craftsmanship: interlocking monolithic granite in Karnataka and repoussé gilded copper in Punjab."
      }
    ],
    dissimilarities: [
      {
        title: "Open-Air Granite Chariot vs. Floating Gilded Sanctuary",
        desc: "Hampi's chariot is a carved stone vehicle for Garuda, while Harmandir Sahib is a gilded two-story gurdwara floating in a sacred lake."
      },
      {
        title: "Vijayanagara Dravidian Temple vs. Sikh Gurdwara Architecture",
        desc: "Hampi follows Dravidian temple sculpture with musical pillared mantapas, while the Golden Temple pioneered Sikh architecture with chattris and fluted domes."
      }
    ],
    evidenceSources: [
      {
        title: "UNESCO World Heritage - Hampi",
        org: "UNESCO World Heritage Centre",
        url: "https://whc.unesco.org/en/list/241",
        icon: "🌐"
      },
      {
        title: "SGPC Amritsar",
        org: "Shiromani Gurdwara Parbandhak Committee",
        url: "https://sgpc.net",
        icon: "🏛️"
      }
    ],
    wikipediaCards: [
      {
        culture: "Karnataka",
        title: "Hampi",
        url: "https://en.wikipedia.org/wiki/Hampi",
        extract: "Hampi is a UNESCO World Heritage Site located in east-central Karnataka, known for the magnificent Vittala Temple stone chariot.",
        image: "images/karnataka_hampi_chariot.jpg"
      },
      {
        culture: "Punjab",
        title: "Golden Temple",
        url: "https://en.wikipedia.org/wiki/Golden_Temple",
        extract: "The Golden Temple (Harmandir Sahib) is the preeminent spiritual site of Sikhism, located in the city of Amritsar, Punjab.",
        image: "images/punjab_golden_temple.jpg"
      }
    ]
  }
];

const VIRASAT_REGIONS = [
  { id: "all", name: "All States", icon: "🇮🇳" },
  { id: "uttar-pradesh", name: "Uttar Pradesh", icon: "🛕" },
  { id: "rajasthan", name: "Rajasthan", icon: "🏰" },
  { id: "gujarat", name: "Gujarat", icon: "🌊" },
  { id: "punjab", name: "Punjab", icon: "🌾" },
  { id: "karnataka", name: "Karnataka", icon: "🏛️" },
  { id: "kerala", name: "Kerala", icon: "🌴" },
  { id: "maharashtra", name: "Maharashtra", icon: "🏹" },
  { id: "bihar", name: "Bihar", icon: "🎨" }
];

const VIRASAT_DOMAINS = [
  { id: "all", name: "All Domains", icon: "✨" },
  { id: "architecture", name: "Architecture & Stepwells", icon: "🏛️" },
  { id: "dance", name: "Dance & Dramatic Arts", icon: "💃" },
  { id: "art-craft", name: "Art, Craft & Needlework", icon: "🎨" }
];

