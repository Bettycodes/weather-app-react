import React, { useState } from "react";
import axios from "axios";

export default function WeatherApp(props) {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function submitButton(event) {
    event.preventDefault();
    let unit = `metric`;
    let apiKey = `049fb32dcd4a672d3fcbdb2a37413a71`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(showTemp);
  }

  function showTemp(response) {
    setTemp(response.data.main.temp);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    );
  }

  function City(event) {
    setCity(event.target.value);
  }

  return (
    <div className="main-container">
      <form className="search" onSubmit={submitButton}>
        <input type="search" placeholder="Enter city" onChange={City} />
        <input type="submit" value="search" />
      </form>
      
      <ul  className="city" >
        <div>
        <h1 className="text-capitalize cityName">{city}</h1>
        </div>
        
        <div className="grid">
          <div className="col-6">
          <li>Temperature:<strong className="temperature">{Math.round(temp)}</strong><a href="https://sad-dijkstra-d03c5b.netlify.app" className="celsius">°C</a></li>
        <li>
          <img src={icon} alt="weather icon" />
        </li>
          </div>
        <div className="col-6">
        <li>Humidity:{Math.round(humidity)}%</li>
        <li>Wind:{Math.round(wind)}km/h</li>
        </div>
        </div>
        
       
      </ul>
      <br/>
      <p><a href="https://github.com/Bettycodes/weather-app-react.git" className="github">Source code</a> Bethel Girma</p>
    </div>
  );
}
