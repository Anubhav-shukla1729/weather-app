import React from 'react';
import WeatherApp from './components/WeatherApp'; // Adjusted path to import WeatherApp
import './App.css'; // Import any global styles for the app

const App = () => {
  return (
    <div className="app-container">
      <WeatherApp />
    </div>
  );
};

export default App;
