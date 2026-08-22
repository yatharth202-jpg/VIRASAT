document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Slides Carousel
    const slides = document.querySelectorAll('.hero-slide');
    const monumentText = document.getElementById('monument-text');
    let currentSlideIndex = 0;
    let slideTimer;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        if (monumentText && slides[index]) {
            monumentText.textContent = slides[index].getAttribute('data-monument') || '';
        }
        currentSlideIndex = index;
    }

    window.nextHeroSlide = function() {
        const nextIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(nextIndex);
        resetHeroTimer();
    };

    window.goToSlide = function(index) {
        showSlide(index);
        resetHeroTimer();
    };

    function resetHeroTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(() => {
            const nextIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(nextIndex);
        }, 5500);
    }

    // 2. Heritage Facts Carousel
    const heritageFacts = [
        "The sarangi, a traditional Indian instrument, shares its roots with the rebab of Persia.",
        "Rani Ki Vav stepwell was constructed in the 11th century as an inverted subterranean temple with over 500 sculpted deities.",
        "The Konark Sun Temple’s 24 monumental stone wheels function as accurate sundials, calculating time down to the exact minute.",
        "Jaipur Blue Pottery is unique across the world — it is made without clay, using Egyptian paste, quartz powder, and natural glass glaze."
    ];

    let currentFactIndex = 0;
    const factText = document.getElementById('fact-text');
    const factNumber = document.getElementById('fact-number');
    const factDots = document.querySelectorAll('.fact-dot');
    let factTimer;

    function showFact(index) {
        if (!factText) return;
        
        factText.style.opacity = '0';
        setTimeout(() => {
            factText.textContent = heritageFacts[index];
            if (factNumber) factNumber.textContent = `${index + 1} / 4`;
            factText.style.opacity = '1';
        }, 220);

        factDots.forEach((dot, i) => {
            if (i === index) {
                dot.className = 'fact-dot w-2.5 h-2.5 rounded-full bg-[#D4A359] transition-all cursor-pointer';
            } else {
                dot.className = 'fact-dot w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/60 transition-all cursor-pointer';
            }
        });
        currentFactIndex = index;
    }

    window.nextFact = function() {
        const nextIndex = (currentFactIndex + 1) % heritageFacts.length;
        showFact(nextIndex);
        resetFactTimer();
    };

    window.goToFact = function(index) {
        showFact(index);
        resetFactTimer();
    };

    function resetFactTimer() {
        clearInterval(factTimer);
        factTimer = setInterval(() => {
            const nextIndex = (currentFactIndex + 1) % heritageFacts.length;
            showFact(nextIndex);
        }, 5500);
    }

    slideTimer = setInterval(() => {
        const nextIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(nextIndex);
    }, 5500);

    factTimer = setInterval(() => {
        const nextIndex = (currentFactIndex + 1) % heritageFacts.length;
        showFact(nextIndex);
    }, 5500);

    // 3. Homepage Passport Module Live Dynamic Sync
    function syncHomepagePassportModule() {
        if (typeof VirasatPassportService === 'undefined') return;
        const stats = VirasatPassportService.getStats();
        const passportModule = document.getElementById('passport-module');
        if (!passportModule) return;

        const countHeader = passportModule.querySelector('.font-heading.text-2xl');
        if (countHeader) {
            countHeader.textContent = `${stats.solved} / 28`;
        }

        const progressBar = passportModule.querySelector('.bg-gradient-to-r');
        if (progressBar) {
            const pct = Math.min(100, Math.round((stats.solved / 28) * 100));
            progressBar.style.width = `${Math.max(15, pct)}%`;
        }

        const wisdomCountEl = passportModule.querySelector('.border-t .flex-col:first-child .font-bold');
        if (wisdomCountEl) {
            wisdomCountEl.textContent = `${stats.wisdomCount}/6`;
        }
    }

    syncHomepagePassportModule();
    window.addEventListener('virasat:passport-updated', syncHomepagePassportModule);
});
