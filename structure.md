# Project Structure

## Directory Layout

```
public/
├── index.html    # Main HTML structure and markup
├── styles.css    # All styling and responsive design
├── app.js        # Weather logic, API calls, and DOM manipulation
└── README.md     # Setup and usage instructions
```

## Code Organization

### HTML (`index.html`)
- Semantic structure with header, main, and form elements
- BEM-inspired class naming (e.g., `search-form`, `search-input`)
- Accessibility attributes (lang, alt text, autocomplete)
- State management via `.hidden` class toggling

### CSS (`styles.css`)
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- CSS custom properties for gradient backgrounds
- Media queries for mobile breakpoints (600px)
- Utility classes (`.hidden` for visibility control)

### JavaScript (`app.js`)
- DOM element references at top of file
- Event-driven architecture
- Separation of concerns: validation, API calls, UI updates
- Function naming convention: verb-noun (e.g., `showLoading`, `hideError`)
- Async/await for asynchronous operations
- Demo mode for testing without API key

## Conventions

- All user-facing files in `public/` directory
- No external dependencies or node_modules
- Class-based state management (add/remove `.hidden`)
- Metric units for weather data (Celsius, m/s)
- Error messages are user-friendly and actionable
