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
      fallbackImage: "images/bada_imambara_lucknow.jpg",
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
      fallbackImage: "images/gol_gumbaz_bijapur.jpg",
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
        desc: "Both monuments were commissioned during regional crises (such as the devastating Awadh famine of 1784) to employ thousands of noblemen and commoners with dignity."
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
        extract: "Bara Imambara is an imambara complex in Lucknow, India built by Asaf-ud-Daula, Nawab of Awadh, in 1784. The central hall is said to be the largest arched hall in the world without external pillar support.",
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
      fallbackImage: "images/chand_baori_rajasthan.jpg",
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
      fallbackImage: "images/rani_ki_vav_gujarat.jpg",
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
        desc: "The deep vertical subterranean chambers remain 5°C to 6°C cooler than the scorching ground level, creating vital community gathering places for villagers and traveling caravans."
      },
      {
        title: "Dry Interlocking Stone Joinery",
        desc: "Both masterworks were built using precision-cut sandstone joined through interlocking mortise-and-tenon masonry that has survived earthquakes for over a millennium."
      }
    ],
    dissimilarities: [
      {
        title: "Optical Geometry vs. Iconographic Sculpture Sanctuary",
        desc: "Chand Baori is celebrated for its hypnotic triangular zigzag stair matrix, while Rani Ki Vav is celebrated for its 800+ high-relief sculptures depicting the Dashavatara."
      },
      {
        title: "Royal Memorial Commission vs. Civic Fortress Reservoir",
        desc: "Rani Ki Vav was commissioned by Queen Udayamati as an eternal memorial to King Bhima I, whereas Chand Baori was built by King Chanda as a protective water citadel."
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
      fallbackImage: "images/kathak_dance_lucknow.jpg",
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
      fallbackImage: "images/kathakali_dance_kerala.jpg",
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
        desc: "Kathak is performed as a solo recital in lightweight Anarkali kurtas, whereas Kathakali features full character troupes in 30-kg skirts."
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
      { id: 2, text: "One is accompanied by the thunderous beat of the Dhol on Baisakhi; the other is danced in Navratri circles with rhythmic clapping and dandiya sticks." },
      { id: 3, text: "One hails from Punjab, the other from Gujarat (inscribed on UNESCO Intangible Cultural Heritage)." }
    ],
    cultureA: {
      regionId: "punjab",
      regionName: "Punjab",
      regionFlag: "🌾",
      siteName: "Punjabi Bhangra & Giddha",
      location: "Majha / Doaba / Malwa, Punjab",
      period: "Centuries-old Punjabi Baisakhi Folk Heritage",
      shortDesc: "The joyous folk dance of Punjab celebrating the golden wheat harvest with dynamic leaping jumps, boliyan, and pulsating dhol rhythms.",
      image: "images/punjab_bhangra_dance.jpg",
      fallbackImage: "images/punjab_bhangra_dance.jpg",
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
      location: "Ahmedabad / Vadodara / Saurashtra, Gujarat",
      period: "Ancient Navratri Shakti Tradition (UNESCO Heritage)",
      shortDesc: "The vibrant devotional circular dance performed during Navratri, moving in concentric circles with synchronized rhythmic claps.",
      image: "images/gujarat_garba_dance.jpg",
      fallbackImage: "images/gujarat_garba_dance.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Garba_(dance)",
      wikiTitle: "Garba of Gujarat",
      unescoUrl: "https://ich.unesco.org/en/RL/garba-of-gujarat-01962",
      badge: "GUJARAT"
    },
    connectionOverview: `Bhangra from Punjab and Garba from Gujarat represent the heart and soul of India's community folk celebrations. Both dances bring entire villages and communities together in circular unity to celebrate agricultural bounty and seasonal renewal.`,
    connectionDetails: `While Bhangra channels the exuberance of the spring Baisakhi wheat harvest through high-velocity arm movements, shoulder shrugs, and jumping footwork to the acoustic dhol, Garba channels reverence for the Goddess during autumn Navratri through hypnotic circular twirls and hand clapping around the sacred Garbha lamp.`,
    bridgeImage: "images/punjab_bhangra_dance.jpg",
    bridgeImageB: "images/gujarat_garba_dance.jpg",
    similarities: [
      {
        title: "Communal Circular Unity & Inclusivity",
        desc: "Neither dance is meant for passive observation; both are participatory folk arts where people of all generations dance together in expansive concentric circles."
      },
      {
        title: "Seasonal Agriculture & Festival Connection",
        desc: "Both are deeply tied to agricultural rhythms: Bhangra celebrates the ripening of the rabi wheat crop, while Garba celebrates the autumn harvest and feminine cosmic energy."
      },
      {
        title: "Percussive Dhol Rhythm Driving the Climax",
        desc: "Both dances steadily accelerate in tempo (laya), starting with measured steps and building to a breathless crescendo powered by live double-headed dhol drummers."
      }
    ],
    dissimilarities: [
      {
        title: "Vertical Leaps vs. Continuous Swirling Twirls",
        desc: "Bhangra features explosive vertical kicks, leg extensions, and shoulder bounces, whereas Garba emphasizes fluid circular rotations, foot taps, and synchronized hand claps."
      },
      {
        title: "Agrarian Harvest Celebration vs. Sacred Shakti Devotion",
        desc: "Bhangra originated primarily as a secular celebration of farming toil and harvest joy, whereas Garba is centered around a devotional shrine to Goddess Durga/Amba."
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
        extract: "Bhangra is an energetic folk dance originating from the Punjab region of India. It was traditionally performed by Punjabi farmers to celebrate the spring harvest festival of Baisakhi.",
        image: "images/punjab_bhangra_dance.jpg"
      },
      {
        culture: "Gujarat",
        title: "Garba",
        url: "https://en.wikipedia.org/wiki/Garba_(dance)",
        extract: "Garba is a form of dance which originates from the state of Gujarat in India. The dance is performed around a centrally lit lamp or picture of the Goddess Durga during the nine-day Hindu festival of Navratri.",
        image: "images/gujarat_garba_dance.jpg"
      }
    ]
  },
  {
    id: "dance-ghoomar-garba",
    title: "Rajasthani Ghoomar & Gujarati Garba",
    domainId: "dance",
    domainName: "Dance & Dramatic Arts",
    domainIcon: "💃",
    difficulty: "Easy",
    correctGuess: "religious-influence",
    guessOptions: [
      { id: "similar-architecture", label: "Palace Courtyard Architecture", icon: "🏛️" },
      { id: "water-management", label: "Oasis Dance Chants", icon: "💧" },
      { id: "religious-influence", label: "Folk Pirouettes & Sacred Circles", icon: "🕉️" },
      { id: "trade-exchange", label: "Royal Marriage Treaty Alliances", icon: "🤝" }
    ],
    hints: [
      { id: 1, text: "Both are iconic western Indian folk dances famous for rhythmic twirling and swirling heavy flared ghagras." },
      { id: 2, text: "One was performed by royal Rajput women inside palace courtyards (Ghoomar); the other is danced in community circles for Navratri (Garba)." },
      { id: 3, text: "One represents Rajasthan, the other Gujarat." }
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
      fallbackImage: "images/rajasthan_ghoomar_dance.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Ghoomar",
      wikiTitle: "Ghoomar Dance",
      unescoUrl: "https://sangeetnatak.gov.in",
      badge: "RAJASTHAN"
    },
    cultureB: {
      regionId: "gujarat",
      regionName: "Gujarat",
      regionFlag: "🌊",
      siteName: "Gujarati Garba & Raas",
      location: "Gujarat Plains",
      period: "UNESCO World Heritage Folk Tradition",
      shortDesc: "The vibrant devotional circular dance performed in Navratri circles with rhythmic clapping and mirror-work chaniyas.",
      image: "images/gujarat_garba_dance.jpg",
      fallbackImage: "images/gujarat_garba_dance.jpg",
      wikiUrl: "https://en.wikipedia.org/wiki/Garba_(dance)",
      wikiTitle: "Garba of Gujarat",
      unescoUrl: "https://ich.unesco.org/en/RL/garba-of-gujarat-01962",
      badge: "GUJARAT"
    },
    connectionOverview: `Ghoomar in Rajasthan and Garba in Gujarat embody the vibrant textile and musical heritage of western India. Both dances celebrate grace, rotational symmetry, and the kaleidoscopic movement of mirror-embroidered ghagras.`,
    connectionDetails: `While Ghoomar focuses on subtle, veiled pirouettes where royal women glide and twirl to the acoustic dholak and folk Sarangi, Garba radiates celebratory energy in vast open-air circles where thousands clap and step in sync with live dhol drums.`,
    bridgeImage: "images/rajasthan_ghoomar_dance.jpg",
    bridgeImageB: "images/gujarat_garba_dance.jpg",
    similarities: [
      {
        title: "Rotational Symmetry & Flared Skirt Motion",
        desc: "Both dances are designed around the physics of spinning, causing heavily pleated embroidered ghagras to balloon into swirling cones of color."
      },
      {
        title: "Mirror-Work (Shisha) & Bandhani Costumes",
        desc: "Costumes in both traditions use authentic tie-and-dye (Bandhani) and tiny mirror-work embroidery that sparkle under ceremonial lanterns."
      },
      {
        title: "Female Fellowship & Festivity",
        desc: "Both serve as vital cultural spaces for women to gather, sing regional ballads, and celebrate sisterhood during auspicious milestones."
      }
    ],
    dissimilarities: [
      {
        title: "Veiled Royal Palace Elegance vs. Open Public Devotion",
        desc: "Ghoomar was historically danced by veiled women in royal Zenana courtyards, whereas Garba is danced publicly by people of all backgrounds."
      },
      {
        title: "Lyrical Dholak Ballads vs. Fast Clapping & Dandiya Sticks",
        desc: "Ghoomar follows slower, dignified 8-beat rhythms, while Garba and Dandiya feature rapid tempo acceleration with wooden sticks."
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
        title: "UNESCO Intangible Cultural Heritage",
        org: "UNESCO Heritage Registry",
        url: "https://ich.unesco.org",
        icon: "🌐"
      }
    ],
    wikipediaCards: [
      {
        culture: "Rajasthan",
        title: "Ghoomar",
        url: "https://en.wikipedia.org/wiki/Ghoomar",
        extract: "Ghoomar is a traditional folk dance of Rajasthan. The dance is chiefly performed by veiled women who wear flowing dresses called ghaghara.",
        image: "images/rajasthan_ghoomar_dance.jpg"
      },
      {
        culture: "Gujarat",
        title: "Garba",
        url: "https://en.wikipedia.org/wiki/Garba_(dance)",
        extract: "Garba is a form of dance which originates from Gujarat. It is danced in concentric circles to celebrate Navratri.",
        image: "images/gujarat_garba_dance.jpg"
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
      fallbackImage: "images/lucknow_chikankari.jpg",
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
      fallbackImage: "images/punjabi_phulkari.jpg",
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
      },
      {
        title: "Rooted in Regional Poetry & Culture",
        desc: "Chikankari is immortalized in Lakhnawi Ghazals and Tehzeeb, while Phulkari is woven into Punjabi folk Boliyan and the epic ballad of Heer Ranjha."
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
      },
      {
        title: "Royal Court Patronage vs. Agrarian Folk Celebration",
        desc: "Chikankari was patronized by the Nawabs of Awadh for royal summer court attire, while Phulkari originated as an agrarian folk expression of fertility and harvest."
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
        extract: "Chikan is a traditional embroidery style from Lucknow, India. Literally translated, the word means embroidery, and it is one of Lucknow's best known textile decoration styles.",
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
  }
];

const VIRASAT_REGIONS = [
  { id: "all", name: "All States", icon: "🇮🇳" },
  { id: "uttar-pradesh", name: "Uttar Pradesh (UP)", icon: "🛕" },
  { id: "punjab", name: "Punjab", icon: "🌾" },
  { id: "rajasthan", name: "Rajasthan", icon: "🏰" },
  { id: "gujarat", name: "Gujarat", icon: "🌊" },
  { id: "kerala", name: "Kerala", icon: "🌴" },
  { id: "karnataka", name: "Karnataka", icon: "🏛️" }
];

const VIRASAT_DOMAINS = [
  { id: "all", name: "All Domains", icon: "✨" },
  { id: "architecture", name: "Architecture & Stepwells", icon: "🏛️" },
  { id: "dance", name: "Dance & Dramatic Arts", icon: "💃" },
  { id: "art-craft", name: "Art, Craft & Needlework", icon: "🎨" }
];
