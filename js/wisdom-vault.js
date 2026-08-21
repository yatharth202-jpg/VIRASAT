/**
 * ==========================================================================
 * VIRASAT - WISDOM VAULT CORE INTERACTION LOGIC
 * ==========================================================================
 */

const WisdomVault = (() => {
  // Mock Data for Stories
  const storiesData = [
    {
      id: 'story-1',
      category: 'Recipe',
      title: 'The secret behind our festive laddoos',
      author: 'Dadi Shanta Devi',
      location: 'Punjab',
      duration: '05:23',
      excerpt: 'Dadi Shanta shares the traditional method down in our family for over 100 years.',
      image: 'assets/images/recipe-laddoos.jpg',
      fullStory: 'Besan laddoos made during Diwali hold the fragrance of roasted gram flour, pure desi ghee, and ground cardamom. Passed down through four generations in Amritsar, this recipe requires patience—roasting on a slow flame until the aroma fills every corner of the house.'
    },
    {
      id: 'story-2',
      category: 'Craft',
      title: 'Spinning stories with the charkha',
      author: 'Babu Harbans Singh',
      location: 'Gujarat',
      duration: '04:11',
      excerpt: 'Babuji explains how the charkha was a symbol of freedom, self-reliance, and pride.',
      image: 'assets/images/craft-charkha.jpg',
      fullStory: 'In the quiet mornings of Sabarmati, the rhythmic hum of the wooden charkha was not merely about spinning thread—it was about spinning unity and self-reliance. Babuji reflects on how patience and precision can weave a nation together.'
    },
    {
      id: 'story-3',
      category: 'Tradition',
      title: 'Why we paint before we pray',
      author: 'Dadi Parvati Bai',
      location: 'Madhya Pradesh',
      duration: '06:07',
      excerpt: 'The meaning behind our village art the first look of all on the art of the divine.',
      image: 'assets/images/tradition-folk-art.jpg',
      fullStory: 'Before every harvest festival, the women of our village mix rice paste, lime, and natural ochre to paint sacred murals on our mud walls. Each peacock, tree, and deity is an invitation to prosperity and ancestral protection.'
    },
    {
      id: 'story-4',
      category: 'Folk Tale',
      title: 'The brave princess of our village',
      author: 'Nana Jora Rana',
      location: 'Rajasthan',
      duration: '13:42',
      excerpt: 'A forgotten folk tale of courage, known photos, recipe, wisdom and a promise kept.',
      image: 'assets/images/elder-storyteller.jpg',
      fullStory: 'Under the starry desert sky of Jaisalmer, Nana Jora recounts the oral ballad of Princess Rupali, who defended the oasis wells during a severe drought and united warring clans with her wisdom and compassion.'
    }
  ];

  // Initialize tabs, search, carousel, and story cards
  function init() {
    setupTabs();
    setupSearch();
    setupBookmarks();
    setupTopicCarousel();
    setupStoryPlayer();
  }

  function setupTabs() {
    const tabs = document.querySelectorAll('.vault-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filterType = tab.getAttribute('data-tab');
        filterStories(filterType);
      });
    });
  }

  function filterStories(filterType) {
    const cards = document.querySelectorAll('.story-card');
    cards.forEach(card => {
      if (filterType === 'all' || filterType === 'featured') {
        card.style.display = 'flex';
      } else {
        // Subtle visual filter feedback
        card.style.display = 'flex';
        card.style.animation = 'fadeIn 0.3s ease';
      }
    });
  }

  function setupSearch() {
    const searchInput = document.getElementById('vaultSearchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.story-card');

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  function setupBookmarks() {
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.classList.toggle('saved');
        const svg = btn.querySelector('svg');
        if (btn.classList.contains('saved')) {
          svg.setAttribute('fill', 'currentColor');
        } else {
          svg.setAttribute('fill', 'none');
        }
      });
    });
  }

  function setupTopicCarousel() {
    const carousel = document.getElementById('topicsCarousel');
    const nextBtn = document.getElementById('topicNextBtn');
    if (!carousel || !nextBtn) return;

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 220, behavior: 'smooth' });
    });
  }

  function setupStoryPlayer() {
    document.querySelectorAll('.story-card').forEach((card, index) => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.bookmark-btn')) return;
        const story = storiesData[index % storiesData.length];
        openStoryPlayer(story);
      });
    });
  }

  function openStoryPlayer(story) {
    const modal = document.getElementById('storyPlayerModal');
    if (!modal) return;

    document.getElementById('playerHeroImg').src = story.image;
    document.getElementById('playerTitle').textContent = story.title;
    document.getElementById('playerAuthor').textContent = `${story.author} • ${story.location}`;
    document.getElementById('playerDuration').textContent = story.duration;
    document.getElementById('playerExcerpt').textContent = story.fullStory;

    modal.classList.add('open');
  }

  return {
    init,
    storiesData
  };
})();

// Auto-run if loaded directly
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', WisdomVault.init);
}
