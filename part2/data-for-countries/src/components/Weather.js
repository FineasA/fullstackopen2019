import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = props => {
  const [countryWeather, setCountryWeather] = useState();
  const [temperature, setTemperature] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [windDirection, setWindDirection] = useState();
  const access_key = 'e7fd7bb94c5ea37f9d235d377d00a7f4';

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${access_key}&query=${props.capital}`
      )
      .then(response => {
        // console.log(response.data.current);
        setCountryWeather(response.data.current);
        setTemperature(response.data.current.temperature);
        setWeatherIcon(response.data.current.weather_icons[0]);
        setWindSpeed(response.data.current.wind_speed);
        setWindDirection(response.data.current.wind_dir);
      });
  }, []);

  return (
    <div>
      <h1>Weather in {props.capital}</h1>
      <p>
        <strong>temperature: </strong>
        {temperature} Celsius
      </p>
      <img src={weatherIcon} />
      <p>
        <strong>wind: </strong>
        {windSpeed} kph direction {windDirection}
      </p>
    </div>
  );
};

export default Weather;
