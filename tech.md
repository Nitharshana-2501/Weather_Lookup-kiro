# Technology Stack

## Core Technologies

- **HTML5** - Semantic markup with accessibility considerations
- **CSS3** - Modern styling with flexbox, grid, and animations
- **Vanilla JavaScript (ES6+)** - No frameworks or build tools
- **OpenWeatherMap API** - Weather data provider

## Architecture

- Pure client-side application (no server required)
- Direct browser execution via `index.html`
- Async/await for API calls
- DOM manipulation using native JavaScript APIs

## Development

### Running the Application

Open `index.html` directly in a browser:
```bash
# Option 1: Direct file open
open public/index.html

# Option 2: Simple HTTP server (if needed)
python3 -m http.server 8000
# Then visit http://localhost:8000/public/
```

### API Configuration

The app uses OpenWeatherMap API. Configure in `app.js`:
- Set `apiKey` variable to your OpenWeatherMap API key
- Demo mode available by leaving `apiKey = 'DEMO_MODE'`

### No Build Process

This is a static site with no compilation, bundling, or transpilation required. All files run directly in the browser.
