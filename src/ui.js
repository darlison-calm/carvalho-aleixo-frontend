import './style.css';
import { formatProduct } from './components/cardItem.js';
import { formatMeta } from './components/meta.js';

// State
let products = [];
let meta = null;
let loadingDiv, errorDiv, resultsDiv;

/**
 * Initializes the main application UI and queries DOM elements
 */
export function initializeUI() {
    document.querySelector('#app').innerHTML = `
    <div>
      <button id="modeToggle" class="mode-toggle" aria-label="Toggle dark/light mode">🌙</button>
      <h1>Amazon Product Scraper</h1>
      <div class="top-bar">
        <div class="search-box">
          <input type="text" id="keyword" placeholder="Enter search keyword (e.g., ps5)" aria-label="Search keyword">
          <button id="scrapeBtn">Search</button>
        </div>
      </div>
      <div id="loading" class="hidden"><div class="spinner"></div></div>
      <div id="error" class="hidden"></div>
      <div id="results"></div>
    </div>
  `;

    // Query DOM elements after HTML is set
    loadingDiv = document.getElementById('loading');
    errorDiv = document.getElementById('error');
    resultsDiv = document.getElementById('results');
}

/**
 * Shows loading state
 */
export function showLoading() {
    if (!loadingDiv || !errorDiv || !resultsDiv) {
        console.error('DOM elements not initialized. Call initializeUI first.');
        return;
    }
    loadingDiv.classList.remove('hidden');
    errorDiv.classList.add('hidden');
    resultsDiv.innerHTML = '';
}

/**
 * Shows error message
 * @param {string} msg - Error message to display
 */
export function showError(msg) {
    if (!loadingDiv || !errorDiv || !resultsDiv) {
        console.error('DOM elements not initialized. Call initializeUI first.');
        return;
    }
    loadingDiv.classList.add('hidden');
    errorDiv.textContent = msg;
    errorDiv.classList.remove('hidden');
    resultsDiv.innerHTML = '';
}

/**
 * Displays search results
 * @param {Object[]} newProducts - Array of product objects
 * @param {Object} newMeta - Metadata object
 */
export function showResults(newProducts, newMeta) {
    if (!loadingDiv || !errorDiv || !resultsDiv) {
        console.error('DOM elements not initialized. Call initializeUI first.');
        return;
    }
    products = newProducts;
    meta = newMeta;
    loadingDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    if (!products || products.length === 0) {
        resultsDiv.innerHTML = '<div class="error">No products found.</div>';
        return;
    }
    resultsDiv.innerHTML = products.map(formatProduct).join('') + formatMeta(meta);
}