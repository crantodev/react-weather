import React, { useState } from "react";
import PropTypes from "prop-types";

import Error from "./Error";

const Form = ({ search, setSearch, setSearching }) => {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setSearching(true);
  };

  const { city, country } = search;
  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <Error message="All fields are required" />
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">Select one</option>
          <option value="US">Unite States</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">Spain</option>
          <option value="PE">Peru</option>
        </select>
        <label htmlFor="country">Country</label>
      </div>

      <div className="input-field col 12">
        <input
          type="submit"
          value="Search"
          className="btn waves-effect waves-light yellow accent-4"
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setSearching: PropTypes.func.isRequired,
}

export default Form;
