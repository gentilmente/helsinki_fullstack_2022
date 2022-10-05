import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [isLoading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);

  const hook = () => {
    const query = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${api_key}`;
    axios.get(query).then((response) => {
      setWeather(response.data);
      setLoading(false);
    });
  };

  useEffect(hook, []);

  //console.log(weather);
  if (isLoading) {
    return <div>Loading weather...</div>;
  }

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <h3>{weather.weather[0].description}</h3>
      <div>
        <strong>temp:</strong> {weather.main.temp} ºF
      </div>
      <div>
        <strong>humidity:</strong> {weather.main.humidity} %
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="icon weather"
      />
      <div>
        <strong>wind:</strong> {weather.wind.speed} m/s
      </div>
    </div>
  );
};

export default Weather;
