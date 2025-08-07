/**
 * Formats metadata into HTML for display
 * @param {Object} data - Metadata with totalFound, keyword, and timestamp
 * @returns {string} HTML string for metadata display
 */
export function formatMeta(data) {
    return `
    <div class="meta">
      Found <strong>${data.totalFound}</strong> products for "<strong>${data.keyword}</strong>"<br>
      <span>Scraped at: ${new Date(data.timestamp).toLocaleString()}</span>
    </div>
  `;
}