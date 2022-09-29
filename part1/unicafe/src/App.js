import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Show = ({ text, value }) => (
  <div>
    {text}: {value}
  </div>
);

const Statistics = ({ stats }) => {
  //console.log(stats);
  return (
    <div>
      <Show text="Good" value={stats.good} />
      <Show text="Neutral" value={stats.neutral} />
      <Show text="Bad" value={stats.bad} />
      <Show text="All" value={stats.all} />
      <Show text="Average" value={stats.average} />
      <Show text="Positive" value={stats.positive + "%"} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);
  const all = good + neutral + bad;
  const average = all ? (good - bad) / all : 0;
  const positiveCalc = (good / all) * 100;
  const positive = isNaN(positiveCalc) ? 0 : positiveCalc;
  const stats = { good, neutral, bad, all, average, positive };
  return (
    <div>
      <Header title="Give feedback" />
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <Header title="Statistics:" />
      <Statistics stats={stats} />
    </div>
  );
};

export default App;
