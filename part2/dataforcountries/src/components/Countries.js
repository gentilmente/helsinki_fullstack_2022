import { useState } from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  //console.log("countries", countries);
  const [show, setShow] = useState(false);
  const [selectedCountry, SetSelectedCountry] = useState({});

  const handleClick = (c) => (e) => {
    //console.log("e", e);
    setShow(!show);
    SetSelectedCountry(c);
  };

  if (show)
    return (
      <div>
        <button onClick={handleClick()}>back</button>
        <Country country={selectedCountry} />
      </div>
    );
  else
    return countries.map((c) => (
      <li key={c.cca3}>
        {c.name.common} <button onClick={handleClick(c)}>show</button>
      </li>
    ));
};
export default Countries;
