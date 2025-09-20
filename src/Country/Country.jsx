import React, { useState } from "react";
import "./Tufayel.css";
import "./My.css";
const Country = ({ data, handleVisitedCountries }) => {
  const [visited, setvisited] = useState(false);

  const handleVisited = () => {
    setvisited(!visited);
    handleVisitedCountries(data);
  };
  // currency#############################
  const currencyKey = data.currencies?.currencies
    ? Object.keys(data.currencies.currencies)[0]
    : null;
  const currency = currencyKey ? data.currencies.currencies[currencyKey] : null;

  return (
    <div className={`my-text   ${visited && "country-visited"} `}>
      <h2 className="text">Name: {data.name.common}</h2>
      <img src={data.flags.flags.png} alt="" />

      <p>Official Name: {data.name.official}</p>
      <p>Country Code: {data.ccn3.ccn3}</p>
      <p>
        Area : {data.area.area} <br />
        {data.area.area > 300000 ? "Big country" : "Small country"}
      </p>
      <p>
        Currency: {currency?.name || "Not available"} (
        {currency?.symbol || "N/A"})
      </p>

      <button onClick={handleVisited}>
        {visited ? "visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
