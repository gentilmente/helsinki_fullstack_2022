const Country = ({ country }) => {
  //sconsole.log("country", country);
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
    </div>
  );
};

export default Country;
