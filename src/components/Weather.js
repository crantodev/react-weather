import React from "react";
import PropTypes from "prop-types";

const Weather = ({ weather }) => {
  const { name, main } = weather;

  if (!name) {
    return null;
  }

  const kelvin = 273.15;

  return (
    <div className="card-panel white` col-12">
      <div className="black-text">
        <h2>The weather in {name} is</h2>
        <p className="temperature">
          {parseFloat(main.temp - kelvin).toFixed(2)} <span>&#x2103;</span>
        </p>

        <p>
          Max Temperature {parseFloat(main.temp_max - kelvin).toFixed(2)} <span>&#x2103;</span>
        </p>

        <p>
          Min Temperature {parseFloat(main.temp_min - kelvin).toFixed(2)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default Weather;
