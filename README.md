# Amazon Product Scraper

A web application to scrape and display Amazon product data based on user-provided search keywords. Features a clean UI with product cards, metadata display, dark/light mode toggle, and a loading spinner.

## Features
- Search for Amazon products by keyword
- Display product details (title, image, rating, reviews) in styled cards
- Show search metadata (total results, keyword, timestamp)
- Toggle between dark and light themes with localStorage persistence
- Responsive design with a loading spinner for better UX
- Navigate to the Amazon product page by clicking a product card
## Project Structure
```
├── index.html          # Entry point for the frontend
├── src/
│   ├──api/api.js
    ├── componentes/ ├── cardItem.js e  ├── meta.js   
│   ├── main.js        # Main app logic (event listeners, theme management)
│   ├── ui.js          # UI initialization and state management
│   ├── api.js         # API interaction for fetching products
│       # Formats product card HTML
│          # Formats metadata HTML
│   ├── style.css      # Styles for UI components and themes
├── .env               # Environment variables (VITE_API_BASE_URL)
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation
```

## Prerequisites
- **Node.js** (v16 or higher) and **npm** for the frontend
- **Bun** or **npm** for running Vite
- A running backend server with a `/scrape` endpoint (e.g., Node.js with Express)
- A modern web browser (Chrome, Firefox, etc.)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd carvalho-aleixo-frontend
```

### 2. Install Frontend Dependencies
Navigate to the project directory and install dependencies using npm or Bun:
```bash
npm install
```
or
```bash
bun install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root and add the backend API URL:
```env
VITE_API_BASE_URL=http://localhost:3000/api
```
Replace `http://localhost:3000/api` with your backend server’s URL if different.

### 4. Set Up the Backend
The frontend expects a backend server with a `/scrape` endpoint that accepts a `keyword` query parameter and returns JSON in the format:
```json
{
  "products": [
    {
      "url": "string",
      "imageUrl": "string",
      "title": "string",
      "rating": number,
      "reviewCount": number
    }
  ],
  "totalFound": number,
  "keyword": "string",
  "timestamp": "string"
}
```

Example backend setup (Node.js/Express):
1. Create a backend project:
   ```bash
   mkdir backend
   cd backend
   npm init -y
   npm install express
   ```
2. Create `server.js`:
   ```javascript
   const express = require('express');
   const app = express();

   app.get('/api/scrape', (req, res) => {
     const keyword = req.query.keyword;
     // Implement scraping logic here
     res.json({
       products: [],
       totalFound: 0,
       keyword,
       timestamp: new Date().toISOString()
     });
   });

   app.listen(3000, () => console.log('Server running on http://localhost:3000'));
   ```
3. Run the backend:
   ```bash
   node server.js
   ```

**Note**: The actual scraping logic is not provided here. You’ll need to integrate a scraping library (e.g., Puppeteer, Cheerio) to fetch Amazon data.

### 5. Run the Frontend
Start the Vite development server:
```bash
npm run dev
```
or
```bash
bun dev
```

This will start the app at `http://localhost:5173` (or another port if specified).

## Usage
1. Open the app in your browser (e.g., `http://localhost:5173`).
2. Enter a search keyword (e.g., "ps5") in the input field.
3. Click the "Search" button or press Enter.
4. View the product results, including title, image, rating, and reviews.
5. Toggle between dark and light modes using the 🌙/🌞 button.

## Debugging
- **Console Logs**: Check the browser’s DevTools console for logs like:
  - `Initializing UI...`
  - `DOM elements initialized successfully`
  - `Showing loading spinner...`
- **API Issues**: Test the backend with:
  ```bash
  curl "http://localhost:3000/api/scrape?keyword=ps5"
  ```

## Notes
- The backend server must be running for the app to fetch data.
- The `/scrape` endpoint should handle scraping and return data in the expected format.
