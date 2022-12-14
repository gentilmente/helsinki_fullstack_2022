import { useState } from "react";
const Header = ({ text }) => <h2>{text}</h2>;

const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>;

const Votes = ({ selected, votes }) => <div>has {votes[selected]} votes</div>;

const MostVoted = ({ anecdotes, votes }) => {
  const indexOfWinner = votes.indexOf(Math.max(...votes));
  return (
    <div>
      <Header text="Anecdote with most votes" />
      {anecdotes[indexOfWinner]}
      <Votes votes={votes} selected={indexOfWinner} />
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const voteAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] = newVotes[selected] + 1;
    setVotes(newVotes);
    /* not this way...
    votes[selected] = votes[selected] + 1;
    setVotes(votes);
    */
  };
  const selectAnecdote = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  return (
    <div>
      <Header text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <Votes selected={selected} votes={votes} />
      <Button handler={voteAnecdote} text="vote +1" />
      <Button handler={selectAnecdote} text="next anecdote" />
      <MostVoted anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
