import React, { useState } from 'react';
import { getWeatherData } from '../api'; // Adjust the import path
import './WeatherApp.css'; // Import the CSS file

const cities = [
  'Delhi',
  'Mumbai',
  'Kolkata',
  'Chennai',
  'Bengaluru',
  'Hyderabad',
  'Ahmedabad',
  'Pune',
  'Jaipur',
  'Lucknow'
];

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const fetchWeather = async () => {
    try {
      const weatherData = await getWeatherData(city || selectedCity);
      setWeather(weatherData);
      setError(''); // Clear previous errors
    } catch (err) {
      setError('Error fetching weather data');
      setWeather(null);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setSelectedCity(''); // Clear selected city if user types
  };

  const handleCitySelect = (event) => {
    setSelectedCity(event.target.value);
    setCity(''); // Clear typed city if user selects from dropdown
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="controls">
        <input 
          type="text" 
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
        />
        <select onChange={handleCitySelect} value={selectedCity}>
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button onClick={fetchWeather}>Get Weather</button>
      </div>

      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h3>Weather Data for {city || selectedCity}</h3>
          <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
          <p><strong>Condition:</strong> {weather.current.condition.text}</p>
          <p><strong>Wind Speed:</strong> {weather.current.wind_kph} kph</p>
          <img 
            src={weather.current.condition.icon} 
            alt={weather.current.condition.text} 
          />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
