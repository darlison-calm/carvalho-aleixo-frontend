import { initializeUI, showLoading, showError } from './ui.js';
import { fetchProducts } from './api/api.js';

// Initialize UI before any other operations
initializeUI();

/**
 * Event Listeners
 */
const scrapeBtn = document.getElementById('scrapeBtn');
const keywordInput = document.getElementById('keyword');
const modeToggleBtn = document.getElementById('modeToggle');

scrapeBtn.addEventListener('click', () => {
  const keyword = keywordInput.value.trim();
  if (!keyword) {
    showError('Please enter a search keyword.');
    return;
  }
  showLoading(); 
  fetchProducts(keyword);
});

keywordInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    scrapeBtn.click();
  }
});

/**
 * Theme Management
 */
function setMode(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    modeToggleBtn.textContent = '🌞';
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    modeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

function getPreferredMode() {
  return (
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
}

modeToggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  setMode(isDark ? 'light' : 'dark');
});

// Initialize theme on load
setMode(getPreferredMode());