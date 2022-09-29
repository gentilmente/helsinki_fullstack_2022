import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}:</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ stats }) => {
  //console.log(stats);
  if (stats.all !== 0)
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="Good" value={stats.good} />
            <StatisticLine text="Neutral" value={stats.neutral} />
            <StatisticLine text="Bad" value={stats.bad} />
            <StatisticLine text="All" value={stats.all} />
            <StatisticLine text="Average" value={stats.average} />
            <StatisticLine text="Positive" value={stats.positive + "%"} />
          </tbody>
        </table>
      </div>
    );
  else return <span>No feedback given</span>;
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
