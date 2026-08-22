class VirasatFilterBar {
  constructor(app) {
    this.app = app;
    this.regionPillsContainer = document.getElementById('regionPillsContainer');
    this.domainPillsContainer = document.getElementById('domainPillsContainer');
    this.activeCountBadge = document.getElementById('filterActiveCountBadge');
    
    this.selectedRegion = 'all';
    this.selectedDomain = 'all';

    this.init();
  }

  init() {
    this.renderRegionPills();
    this.renderDomainPills();
    this.applyFilters();
  }

  renderRegionPills() {
    if (!this.regionPillsContainer) return;

    this.regionPillsContainer.innerHTML = VIRASAT_REGIONS.map(reg => `
      <button class="filter-pill ${reg.id === this.selectedRegion ? 'active' : ''}" data-region-id="${reg.id}">
        <span>${reg.icon}</span>
        <span>${reg.name}</span>
      </button>
    `).join('');

    this.regionPillsContainer.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const regionId = btn.getAttribute('data-region-id');
        this.selectRegion(regionId);
      });
    });
  }

  renderDomainPills() {
    if (!this.domainPillsContainer) return;

    this.domainPillsContainer.innerHTML = VIRASAT_DOMAINS.map(dom => `
      <button class="filter-pill ${dom.id === this.selectedDomain ? 'active' : ''}" data-domain-id="${dom.id}">
        <span>${dom.icon}</span>
        <span>${dom.name}</span>
      </button>
    `).join('');

    this.domainPillsContainer.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const domainId = btn.getAttribute('data-domain-id');
        this.selectDomain(domainId);
      });
    });
  }

  selectRegion(regionId) {
    this.selectedRegion = regionId;
    this.renderRegionPills();
    this.renderDomainPills();
    this.applyFilters();
  }

  selectDomain(domainId) {
    this.selectedDomain = domainId;
    this.renderRegionPills();
    this.renderDomainPills();
    this.applyFilters();
  }

  applyFilters() {
    let filtered = VIRASAT_CONNECTIONS.filter(conn => {
      const matchRegion = (this.selectedRegion === 'all') || 
        (conn.cultureA.regionId === this.selectedRegion || conn.cultureB.regionId === this.selectedRegion);
      const matchDomain = (this.selectedDomain === 'all') || (conn.domainId === this.selectedDomain);
      return matchRegion && matchDomain;
    });

    // Smart fallback if the exact intersection has 0 matches
    if (filtered.length === 0) {
      if (this.selectedRegion !== 'all') {
        filtered = VIRASAT_CONNECTIONS.filter(conn => 
          conn.cultureA.regionId === this.selectedRegion || conn.cultureB.regionId === this.selectedRegion
        );
      } else if (this.selectedDomain !== 'all') {
        filtered = VIRASAT_CONNECTIONS.filter(conn => conn.domainId === this.selectedDomain);
      }
    }

    if (filtered.length === 0) {
      filtered = VIRASAT_CONNECTIONS;
    }

    this.updateCountBadge(filtered.length);

    if (filtered.length > 0 && this.app) {
      this.app.loadConnection(filtered[0]);
    }
  }

  updateCountBadge(count = VIRASAT_CONNECTIONS.length) {
    if (this.activeCountBadge) {
      this.activeCountBadge.textContent = `${count} Active Cultural Twin${count === 1 ? '' : 's'}`;
    }
  }

  setFilters(regionId, domainId) {
    if (regionId) this.selectedRegion = regionId;
    if (domainId) this.selectedDomain = domainId;
    this.renderRegionPills();
    this.renderDomainPills();
    this.applyFilters();
  }
}
