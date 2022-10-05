import Weather from "./Weather";

const Country = ({ country }) => {
  //console.log("country", country);
  return (
    <div>
      <h1>
        {country.flag} {country.name.common}
      </h1>
      <p>area: {country.area}</p>
      <p>capital: {country.capital}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <Weather capital={country.capital} />
    </div>
  );
};

export default Country;
