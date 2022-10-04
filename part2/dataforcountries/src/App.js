import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("req");
      setCountries(response.data);
      console.log("res");
    });
  }, []);

  const handleInputChange = (event) => {
    const filteredo = countries.filter((c) =>
      c.name.common.includes(event.target.value)
    );
    //console.log(filteredo);
    setFiltered([...filteredo]);
    //console.log("coso", filtered); //ojo, trae el contenido anterior al set
  };

  return (
    <div>
      <h1>Cities</h1>
      find countries <input onChange={handleInputChange} />
      <ul>
        {/*console.log(countries)*/}
        {filtered.length === 1 ? (
          <div>
            <h1>
              {filtered[0].flag} {filtered[0].name.common}
            </h1>
            <p>area: {filtered[0].area}</p>
            <p>capital: {filtered[0].capital}</p>
            <h3>Languages</h3>
            <ul>
              {Object.values(filtered[0].languages).map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        ) : filtered.length <= 10 ? (
          filtered.map((c) => <li key={c.cca3}>{c.name.common}</li>)
        ) : (
          "Too many matches, specify another filter"
        )}
      </ul>
    </div>
  );
};

export default App;
