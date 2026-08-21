/**
 * ==========================================================================
 * VIRASAT - HOMEPAGE MERGE & TOGGLE INTEGRATION CONTROLLER
 * ==========================================================================
 */

const HomeIntegration = (() => {
  function init() {
    setupViewToggle();
    setupHomeSectionLauncher();
  }

  function setupViewToggle() {
    const homeBtn = document.getElementById('viewModeHomeBtn');
    const vaultBtn = document.getElementById('viewModeVaultBtn');
    const homeView = document.getElementById('websiteHomeView');
    const vaultSection = document.getElementById('wisdomVaultSection');

    if (!homeBtn || !vaultBtn || !homeView || !vaultSection) return;

    homeBtn.addEventListener('click', () => {
      homeBtn.classList.add('active');
      vaultBtn.classList.remove('active');
      homeView.classList.add('active-view');
      vaultSection.classList.add('section-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    vaultBtn.addEventListener('click', () => {
      vaultBtn.classList.add('active');
      homeBtn.classList.remove('active');
      homeView.classList.remove('active-view');
      vaultSection.classList.remove('section-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Also link Header Navigation "Home" and "Wisdom Vault" links
    const headerHomeLink = document.getElementById('navLinkHome');
    const headerVaultLink = document.getElementById('navLinkWisdomVault');

    if (headerHomeLink) {
      headerHomeLink.addEventListener('click', (e) => {
        e.preventDefault();
        headerHomeLink.classList.add('active');
        if (headerVaultLink) headerVaultLink.classList.remove('active');
        homeBtn.click();
      });
    }

    if (headerVaultLink) {
      headerVaultLink.addEventListener('click', (e) => {
        e.preventDefault();
        headerVaultLink.classList.add('active');
        if (headerHomeLink) headerHomeLink.classList.remove('active');
        vaultBtn.click();
      });
    }
  }

  function setupHomeSectionLauncher() {
    const launchBtn = document.getElementById('launchVaultFromHomeBtn');
    const vaultBtn = document.getElementById('viewModeVaultBtn');
    const headerVaultLink = document.getElementById('navLinkWisdomVault');
    const headerHomeLink = document.getElementById('navLinkHome');

    if (!launchBtn) return;

    launchBtn.addEventListener('click', () => {
      if (vaultBtn) vaultBtn.click();
      if (headerVaultLink) headerVaultLink.classList.add('active');
      if (headerHomeLink) headerHomeLink.classList.remove('active');
    });
  }

  return {
    init
  };
})();

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', HomeIntegration.init);
}
