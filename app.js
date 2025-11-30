// DOM elements
const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const validationError = document.getElementById('validationError');
const loadingIndicator = document.getElementById('loadingIndicator');
const errorMessage = document.getElementById('errorMessage');
const weatherResults = document.getElementById('weatherResults');

// Event listeners
searchForm.addEventListener('submit', handleSearch);

// Handle form submission
function handleSearch(e) {
  e.preventDefault();
  
  const city = cityInput.value;
  
  // Validate input
  if (!city || city.trim() === '') {
    showValidationError('Please enter a city name');
    return;
  }
  
  // Clear validation error and search for weather
  hideValidationError();
  searchWeather(city.trim());
}

// Show validation error
function showValidationError(message) {
  validationError.textContent = message;
  validationError.classList.remove('hidden');
}

// Hide validation error
function hideValidationError() {
  validationError.classList.add('hidden');
}


// Search for weather
async function searchWeather(city) {
  // Show loading, hide previous results/errors
  showLoading();
  hideError();
  hideWeatherResults();
  
  // Replace with your OpenWeatherMap API key (or leave as 'DEMO_MODE' for testing)
  const apiKey = 'DEMO_MODE';
  
  // Demo mode - return mock data for testing
  if (apiKey === 'DEMO_MODE' || apiKey === 'YOUR_API_KEY_HERE') {
    setTimeout(() => {
      hideLoading();
      const mockWeatherData = {
        city: city.charAt(0).toUpperCase() + city.slice(1),
        temperature: Math.floor(Math.random() * 15) + 15, // 15-30°C
        condition: 'partly cloudy',
        humidity: Math.floor(Math.random() * 30) + 50, // 50-80%
        windSpeed: (Math.random() * 5 + 2).toFixed(1), // 2-7 m/s
        icon: '02d'
      };
      displayWeather(mockWeatherData);
    }, 800); // Simulate network delay
    return;
  }
  
  // Real API call
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    hideLoading();
    
    if (!response.ok) {
      if (response.status === 404) {
        showError('City not found. Please check the city name and try again.');
      } else if (response.status === 401) {
        showError('Invalid API key. Please add your OpenWeatherMap API key to app.js');
      } else {
        showError('Weather service error. Please try again later.');
      }
      return;
    }
    
    // Transform API response to our format
    const weatherData = {
      city: data.name,
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      icon: data.weather[0].icon
    };
    
    displayWeather(weatherData);
  } catch (error) {
    hideLoading();
    showError('Network error. Please check your connection and try again.');
  }
}

// Show loading indicator
function showLoading() {
  loadingIndicator.classList.remove('hidden');
}

// Hide loading indicator
function hideLoading() {
  loadingIndicator.classList.add('hidden');
}


// Display weather data
function displayWeather(data) {
  document.getElementById('cityName').textContent = data.city;
  document.getElementById('temperature').textContent = data.temperature;
  document.getElementById('condition').textContent = data.condition;
  document.getElementById('humidity').textContent = `${data.humidity}%`;
  document.getElementById('windSpeed').textContent = `${data.windSpeed} m/s`;
  
  const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
  document.getElementById('weatherIcon').src = iconUrl;
  document.getElementById('weatherIcon').alt = data.condition;
  
  weatherResults.classList.remove('hidden');
}

// Hide weather results
function hideWeatherResults() {
  weatherResults.classList.add('hidden');
}


// Show error message
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
  // Preserve the input value (already in the field)
}

// Hide error message
function hideError() {
  errorMessage.classList.add('hidden');
}
