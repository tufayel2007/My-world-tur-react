import React, { use, useState } from "react";
import Country from "./Country";
import "./Tufayel.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setvisitedCountries] = useState([]);
  //
  const handleVisitedCountries = (country) => {
    console.log("handle visited country  clicked", country);
    setvisitedCountries([...visitedCountries, country]);
  };
  const CountriesData = use(countriesPromise);
  const Countries = CountriesData.countries;
  return (
    <div>
      <h1>Hi, I'm Tufayel Ahmed</h1>
      <h4>Total Country Visited: {visitedCountries.length}</h4>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className={`country `}>
        {Countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            data={country}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
