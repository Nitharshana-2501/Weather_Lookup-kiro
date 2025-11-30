# Weather Lookup - Standalone Version

A simple weather lookup website using only HTML, CSS, and JavaScript. No server required!

## Features

- 🌤️ Real-time weather data from OpenWeatherMap API
- 🔍 Search by city name
- 📱 Responsive design
- 🎨 Clean, modern interface
- ⚡ Runs directly in browser - no server needed

## Setup Instructions

### 1. Get an OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to API Keys section
4. Copy your API key

### 2. Add Your API Key

Open `app.js` and replace `YOUR_API_KEY_HERE` with your actual API key:

```javascript
const apiKey = 'your_actual_api_key_here';
```

### 3. Run the Application

Simply open `index.html` in your web browser. That's it!

You can:
- Double-click `index.html`
- Right-click and choose "Open with" your browser
- Use a local development server like Live Server (VS Code extension)

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling
- `app.js` - Weather lookup logic

## Usage

1. Enter a city name in the search field
2. Press Enter or click the Search button
3. View current weather information including:
   - Temperature (°C)
   - Weather conditions
   - Humidity
   - Wind speed
   - Weather icon

## Note

This version makes direct API calls from the browser. For production use, consider using a backend server to keep your API key secure.
