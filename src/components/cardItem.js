export function formatProduct(product) {
  return `
    <a class="product-card-link" href="${product.url}" target="_blank" rel="noopener noreferrer">
      <div class="product-card">
        <img src="${product.imageUrl}" alt="${product.title}" />
        <div class="product-details">
          <div class="product-title">${product.title}</div>
          <div class="product-rating">⭐ ${product.rating}</div>
          <div class="product-reviews">${product.reviewCount} reviews</div>
        </div>
      </div>
    </a>
  `;
}