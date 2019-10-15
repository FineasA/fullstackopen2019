import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MostVotes = props => {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>
        {props.selected} has {props.votes} votes
      </p>
    </>
  );
};

const Votes = props => {
  return <p>has {props.votes} votes</p>;
};

const Button = props => {
  return (
    <>
      <button onClick={props.addOneVote}>vote</button>
      <button onClick={props.randomNum}>next anectode</button>
    </>
  );
};

const App = props => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [highestVote, setHighestVote] = useState(0);

  const getRandomNum = () => {
    const num = Math.floor(Math.random() * Math.floor(props.anecdotes.length));
    // console.log(
    //   Math.floor(Math.random() * Math.floor(props.anecdotes.length + 1))
    // );
    setSelected(num);
  };

  const addOneVote = () => {
    const copy = { ...points };
    copy[selected] += 1;
    setPoints(copy);
    getMostVotes(copy);
  };

  const getMostVotes = object => {
    const _highestVote = Object.keys(object).reduce((a, b) =>
      object[a] > object[b] ? a : b
    );
    console.log(_highestVote);
    setHighestVote(_highestVote);
  };

  return (
    <div>
      <div>{props.anecdotes[selected]}</div>
      <Votes votes={points[selected]} />
      <Button randomNum={getRandomNum} addOneVote={addOneVote} />
      <MostVotes
        highestVotes={highestVote}
        selected={props.anecdotes[highestVote]}
        votes={points[highestVote]}
      />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
