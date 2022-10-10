import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      //console.log("req");
      setCountries(response.data);
      //console.log("res");
    });
  }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filteredo = countries.filter((c) =>
      c.name.common.toLowerCase().includes(inputValue)
    );
    //console.log(filteredo);
    setFiltered([...filteredo]);
    //console.log("coso", filtered); //ojo, trae el contenido anterior al set
  };

  return (
    <div>
      <h1>Weather</h1>
      find countries <input onChange={handleInputChange} autoFocus />
      <ul>
        {/*console.log(countries)*/}
        {filtered.length < 1 ? (
          <Countries countries={countries} />
        ) : filtered.length === 1 ? (
          <Country country={filtered[0]} />
        ) : filtered.length <= 10 ? (
          <Countries countries={filtered} />
        ) : (
          "Too many matches, specify another filter"
        )}
      </ul>
    </div>
  );
};

export default App;
