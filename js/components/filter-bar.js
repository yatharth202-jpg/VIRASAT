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
    this.updateCountBadge();
  }

  getAvailableDomainsForRegion(regionId) {
    if (regionId === 'all') return VIRASAT_DOMAINS.map(d => d.id);
    const conns = VIRASAT_CONNECTIONS.filter(c => 
      c.cultureA.regionId === regionId || c.cultureB.regionId === regionId
    );
    const domainIds = new Set(conns.map(c => c.domainId));
    domainIds.add('all');
    return Array.from(domainIds);
  }

  getAvailableRegionsForDomain(domainId) {
    if (domainId === 'all') return VIRASAT_REGIONS.map(r => r.id);
    const conns = VIRASAT_CONNECTIONS.filter(c => c.domainId === domainId);
    const regionIds = new Set();
    conns.forEach(c => {
      regionIds.add(c.cultureA.regionId);
      regionIds.add(c.cultureB.regionId);
    });
    regionIds.add('all');
    return Array.from(regionIds);
  }

  renderRegionPills() {
    if (!this.regionPillsContainer) return;
    const availableRegionIds = this.getAvailableRegionsForDomain(this.selectedDomain);
    const visibleRegions = VIRASAT_REGIONS.filter(r => availableRegionIds.includes(r.id));

    this.regionPillsContainer.innerHTML = visibleRegions.map(reg => `
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
    const availableDomainIds = this.getAvailableDomainsForRegion(this.selectedRegion);
    const visibleDomains = VIRASAT_DOMAINS.filter(d => availableDomainIds.includes(d.id));

    this.domainPillsContainer.innerHTML = visibleDomains.map(dom => `
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

    const availableDomains = this.getAvailableDomainsForRegion(regionId);
    if (!availableDomains.includes(this.selectedDomain)) {
      this.selectedDomain = 'all';
    }

    this.renderRegionPills();
    this.renderDomainPills();
    this.applyFilters();
  }

  selectDomain(domainId) {
    this.selectedDomain = domainId;

    const availableRegions = this.getAvailableRegionsForDomain(domainId);
    if (!availableRegions.includes(this.selectedRegion)) {
      this.selectedRegion = 'all';
    }

    this.renderRegionPills();
    this.renderDomainPills();
    this.applyFilters();
  }

  applyFilters() {
    const filtered = VIRASAT_CONNECTIONS.filter(conn => {
      const matchRegion = (this.selectedRegion === 'all') || 
        (conn.cultureA.regionId === this.selectedRegion || conn.cultureB.regionId === this.selectedRegion);
      const matchDomain = (this.selectedDomain === 'all') || (conn.domainId === this.selectedDomain);
      return matchRegion && matchDomain;
    });

    this.updateCountBadge(filtered.length);

    if (filtered.length > 0) {
      this.app.loadConnection(filtered[0]);
    } else {
      this.app.loadConnection(VIRASAT_CONNECTIONS[0]);
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
