import React, { Fragment, useState, useEffect } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [searching, setSearching] = useState(false);

  const [weather, setWeather] = useState({});

  const [error, setError] = useState("");

  const { city, country } = search;

  useEffect(() => {
    const getWeatherFromAPI = async () => {
      const APIKey = "c84315a89ab5da3fcbf3d3b7ea79321e";
      const url = `//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKey}`;

      try {
        const response = await fetch(url);
        const result = await response.json();

        if (response.ok) {
          setError("");
          setWeather(result);
          setSearching(false);

          return;
        }

        setSearching(false);
        setError(result.message);
        return;
      } catch (error) {
        console.error(error);
        setSearching(false);
      }
    };

    if (searching) {
      getWeatherFromAPI();
    }
  }, [city, country, searching]);

  return (
    <Fragment>
      <Header title="Weather APP" />

      <div className="form-container">
        <div className="cointainer">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setSearching={setSearching}
              />
            </div>
            <div className="col m6 s12">
              {error ? (
                <Error message={error} />
              ) : (
                <Weather weather={weather} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
