import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("hola");
      setCountries(response.data);
      console.log("chau");
    });
  }, []);

  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Cities</h1>
      find countries <input onChange={handleInputChange} />
      <ul>
        {console.log("a", countries)}
        {countries.length > 1
          ? //countries.forEach((c) => console.log(c.name.common))
            countries.map((c) => <li key={c.name.common}>{c.name.common}</li>)
          : null}
      </ul>
    </div>
  );
};

export default App;
