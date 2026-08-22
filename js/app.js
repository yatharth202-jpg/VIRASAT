/**
 * ==========================================================================
 * VIRASAT - CULTURAL CONNECTION MAIN APPLICATION ENTRY POINT
 * ==========================================================================
 */

class CulturalConnectionApp {
  constructor() {
    this.currentConnection = null;
    this.connections = typeof VIRASAT_CONNECTIONS !== 'undefined' ? VIRASAT_CONNECTIONS : [];
    
    // Components
    this.navbar = new VirasatNavbar(this);
    this.filterBar = new VirasatFilterBar(this);
    this.connectionGame = new VirasatConnectionGame(this);
    this.comparisonMatrix = new VirasatComparisonMatrix(this);
    this.sidebar = new VirasatSidebar(this);

    this.init();
  }

  init() {
    // Check URL parameters for specific connection or default to first
    const urlParams = new URLSearchParams(window.location.search);
    const connectionId = urlParams.get('connection') || (this.connections.length > 0 ? this.connections[0].id : null);
    
    this.loadConnectionById(connectionId);
    this.setupGlobalEvents();
  }

  setupGlobalEvents() {
    // How it works modal / alert
    const howItWorksBtn = document.getElementById('howItWorksBtn');
    if (howItWorksBtn) {
      howItWorksBtn.addEventListener('click', () => {
        alert("✨ How Find the Connection Works:\n\n1. Select States or Domains from top filter bar.\n2. Examine the dual-culture 3D cards.\n3. Choose your answer to guess the shared heritage link.\n4. Click 'Reveal Connection' to discover deep historical similarities and unlock Virasat Passport Stamps!");
      });
    }

    // Modal close buttons
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal-overlay');
        if (modal) modal.classList.remove('open');
      });
    });

    // Close modal on click outside
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    });

    // Check for hash modals e.g. #culturalRoomModal
    if (window.location.hash === '#culturalRoomModal') {
      const roomModal = document.getElementById('culturalRoomModal');
      if (roomModal) roomModal.classList.add('open');
    }
  }

  loadConnection(connection) {
    if (!connection) return;
    this.currentConnection = connection;
    if (this.connectionGame) this.connectionGame.loadConnection(connection);
    if (this.comparisonMatrix) this.comparisonMatrix.render(connection);
  }

  loadConnectionById(connectionId) {
    let conn = this.connections.find(c => c.id === connectionId);
    if (!conn && this.connections.length > 0) {
      conn = this.connections[0];
    }
    if (conn) {
      this.loadConnection(conn);
    }
  }

  filterConnections(regionId, domainId) {
    let filtered = this.connections;
    if (regionId && regionId !== 'all') {
      filtered = filtered.filter(c => c.cultureA.regionId === regionId || c.cultureB.regionId === regionId);
    }
    if (domainId && domainId !== 'all') {
      filtered = filtered.filter(c => c.domainId === domainId);
    }

    if (filtered.length > 0) {
      this.loadConnection(filtered[0]);
    } else if (this.connections.length > 0) {
      this.loadConnection(this.connections[0]);
    }
  }
}

// Global App Instance
let virasatApp = null;
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cultureACard') || document.getElementById('regionPillsContainer')) {
    virasatApp = new CulturalConnectionApp();
  }
});
