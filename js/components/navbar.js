class VirasatNavbar {
  constructor(app) {
    this.app = app;
    this.searchInput = document.getElementById('globalSearchInput');
    this.searchResults = document.getElementById('searchResultsDropdown');
    this.searchTriggerBtn = document.getElementById('searchTriggerBtn');
    this.searchFlyoutBar = document.getElementById('searchFlyoutBar');
    this.closeSearchFlyoutBtn = document.getElementById('closeSearchFlyoutBtn');
    
    this.exploreDropdownWrap = document.getElementById('exploreDropdownWrap');
    this.exploreDropdownBtn = document.getElementById('exploreDropdownBtn');
    
    this.signInBtn = document.getElementById('signInBtn');
    this.signInModal = document.getElementById('signInModal');
    
    this.howItWorksBtn = document.getElementById('howItWorksBtn');
    this.howItWorksModal = document.getElementById('howItWorksModal');
    this.navPassportLink = document.getElementById('navPassportLink');
    this.navRoomsLink = document.getElementById('navRoomsLink');
    
    this.init();
  }

  init() {
    this.setupSearch();
    this.setupDropdowns();
    this.setupModals();
  }

  setupSearch() {
    if (this.searchTriggerBtn && this.searchFlyoutBar) {
      this.searchTriggerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.searchFlyoutBar.classList.toggle('open');
        if (this.searchFlyoutBar.classList.contains('open') && this.searchInput) {
          this.searchInput.focus();
        }
      });
    }

    if (this.closeSearchFlyoutBtn && this.searchFlyoutBar) {
      this.closeSearchFlyoutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.searchFlyoutBar.classList.remove('open');
        if (this.searchResults) this.searchResults.classList.remove('show');
      });
    }

    if (!this.searchInput || !this.searchResults) return;

    this.searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (query.length < 2) {
        this.searchResults.classList.remove('show');
        this.searchResults.innerHTML = '';
        return;
      }

      const matches = VIRASAT_CONNECTIONS.filter(conn => {
        return (
          conn.title.toLowerCase().includes(query) ||
          conn.domainName.toLowerCase().includes(query) ||
          conn.cultureA.siteName.toLowerCase().includes(query) ||
          conn.cultureA.regionName.toLowerCase().includes(query) ||
          conn.cultureB.siteName.toLowerCase().includes(query) ||
          conn.cultureB.regionName.toLowerCase().includes(query)
        );
      });

      if (matches.length === 0) {
        this.searchResults.innerHTML = `
          <div style="padding: 10px; color: #8E877C; font-size: 0.82rem; text-align: center;">
            No cultural twins found for "${e.target.value}". Try searching "Stepwell", "Kathak", "Chikankari", or "Imambara".
          </div>
        `;
      } else {
        this.searchResults.innerHTML = matches.map(m => `
          <div class="search-result-item" data-id="${m.id}">
            <span>${m.domainIcon}</span>
            <div style="display: flex; flex-direction: column;">
              <strong style="font-size: 0.85rem; color: #F8EFE6;">${m.title}</strong>
              <span style="font-size: 0.72rem; color: #A99E90;">${m.cultureA.regionName} ↔ ${m.cultureB.regionName}</span>
            </div>
            <span class="result-tag">${m.domainName}</span>
          </div>
        `).join('');

        this.searchResults.querySelectorAll('.search-result-item').forEach(item => {
          item.addEventListener('click', () => {
            const connId = item.getAttribute('data-id');
            this.app.loadConnectionById(connId);
            this.searchResults.classList.remove('show');
            if (this.searchFlyoutBar) this.searchFlyoutBar.classList.remove('open');
            this.searchInput.value = '';
          });
        });
      }

      this.searchResults.classList.add('show');
    });

    document.addEventListener('click', (e) => {
      if (this.searchFlyoutBar && !this.searchFlyoutBar.contains(e.target) && (!this.searchTriggerBtn || !this.searchTriggerBtn.contains(e.target))) {
        this.searchFlyoutBar.classList.remove('open');
        if (this.searchResults) this.searchResults.classList.remove('show');
      }
    });
  }

  setupDropdowns() {
    if (this.exploreDropdownBtn && this.exploreDropdownWrap) {
      this.exploreDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.exploreDropdownWrap.classList.toggle('open');
      });

      document.addEventListener('click', (e) => {
        if (!this.exploreDropdownWrap.contains(e.target)) {
          this.exploreDropdownWrap.classList.remove('open');
        }
      });

      const dropdownItems = this.exploreDropdownWrap.querySelectorAll('.dropdown-menu-item');
      dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
          const href = item.getAttribute('href');
          if (href === '#architecture' || href === 'index.html#architecture') {
            this.app.filterBar.setFilters('all', 'architecture');
          } else if (href === '#dance' || href === 'index.html#dance') {
            this.app.filterBar.setFilters('all', 'dance');
          } else if (href === '#craft' || href === 'index.html#craft') {
            this.app.filterBar.setFilters('all', 'art-craft');
          } else if (href === '#explore-states' || href === 'index.html#explore-states') {
            this.app.filterBar.setFilters('uttar-pradesh', 'all');
          }
          this.exploreDropdownWrap.classList.remove('open');
        });
      });
    }
  }

  setupModals() {
    if (this.howItWorksBtn && this.howItWorksModal) {
      this.howItWorksBtn.addEventListener('click', () => {
        this.howItWorksModal.classList.add('open');
      });
    }

    if (this.signInBtn && this.signInModal) {
      this.signInBtn.addEventListener('click', () => {
        this.signInModal.classList.add('open');
      });
    }

    if (this.navRoomsLink) {
      this.navRoomsLink.addEventListener('click', (e) => {
        e.preventDefault();
        const roomModal = document.getElementById('culturalRoomModal');
        if (roomModal) roomModal.classList.add('open');
      });
    }

    document.querySelectorAll('.modal-close-btn, .modal-overlay').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target === el || el.classList.contains('modal-close-btn')) {
          const modal = el.closest('.modal-overlay');
          if (modal) modal.classList.remove('open');
        }
      });
    });
  }
}
