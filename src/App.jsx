import React from "react";
import LocationDropdown from "./components/location-dropdown.cmp";
import ForecastTile from "./components/forecast.cmp";

function App() {
  const info = {
    icon: './images/clear.png',
    date: 'Mon July 25',
    caption: 'Clear',
    temp: {
      high: '25',
      low: '17'
    }
  };

  return (
    <div>
      <h1>European Weather Forecast</h1>
      <LocationDropdown></LocationDropdown>
      <ForecastTile info={info}></ForecastTile>
    </div>
  );
}

export default App;