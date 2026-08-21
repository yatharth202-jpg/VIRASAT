class VirasatApp {
  constructor() {
    this.currentConnection = VIRASAT_CONNECTIONS[0];

    this.navbar = new VirasatNavbar(this);
    this.filterBar = new VirasatFilterBar(this);
    this.game = new VirasatConnectionGame(this);
    this.comparisonMatrix = new VirasatComparisonMatrix(this);
    this.sidebar = new VirasatSidebar(this);

    this.init();
  }

  init() {
    this.loadConnection(this.currentConnection);
  }

  loadConnection(connection) {
    if (!connection) return;
    this.currentConnection = connection;

    this.game.loadConnection(connection);
    this.comparisonMatrix.render(connection);
  }

  loadConnectionById(connId) {
    const found = VIRASAT_CONNECTIONS.find(c => c.id === connId);
    if (found) {
      this.loadConnection(found);
      this.filterBar.selectedRegion = found.cultureA.regionId;
      this.filterBar.selectedDomain = found.domainId;
      this.filterBar.renderRegionPills();
      this.filterBar.renderDomainPills();
    }
  }

  onConnectionRevealed(connection) {
    this.sidebar.addPassportStamp(connection);
    this.comparisonMatrix.render(connection);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.virasatApp = new VirasatApp();
});
