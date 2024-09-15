import axios from 'axios';

const WEATHER_API_KEY = '79ed57d54ff44f06b5862708241509'; // WeatherAPI key

// Function to fetch weather data from WeatherAPI
export const getWeatherData = async (city) => {
  try {
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`;
    const weatherResponse = await axios.get(weatherUrl);
    return weatherResponse.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
