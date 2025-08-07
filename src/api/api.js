import { showError, showResults } from '../ui.js';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Fetches products from the API
 * @param {string} keyword - Search keyword
 */
export async function fetchProducts(keyword) {
    try {
        const endpoint = `${BASE_URL}/scrape?keyword=${encodeURIComponent(keyword)}`;
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        showResults(data.products || [], data);
    } catch (err) {
        showError('Error fetching products. Please try again.');
    }
}