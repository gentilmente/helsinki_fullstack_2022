import { useState } from "react";
const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Show = ({ text, counter }) => (
  <div>
    {text}: {counter}
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <Header title="Give feedback" />
      <Button handleClick={increaseGood} text="good" />{" "}
      <Button handleClick={increaseNeutral} text="neutral" />{" "}
      <Button handleClick={increaseBad} text="bad" />
      <Header title="Statistics:" />
      <Show text="Good" counter={good} />
      <Show text="Neutral" counter={neutral} />
      <Show text="Bad" counter={bad} />
    </div>
  );
};

export default App;
