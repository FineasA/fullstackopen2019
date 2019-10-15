import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = () => {
  return <h1>Give Feedback</h1>;
};

const Button = props => {
  return <button onClick={props.handler}>{props.text}</button>;
};

const Statistic = props => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            {props.text} : {props.rating}
            {props.percentage}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = props => {
  const total = props.goodRating + props.badRating + props.neutralRating;
  const average = (props.goodRating - props.badRating) / total;
  const positive = (props.goodRating / total) * 100;

  if (total === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </>
    );
  }
  return (
    <>
      <h1>Statistics</h1>
      <Statistic text='good' rating={props.goodRating} />
      <Statistic text='neutral' rating={props.neutralRating} />
      <Statistic text='bad' rating={props.badRating} />
      <Statistic text='total' rating={total} />
      <Statistic text='average' rating={average.toFixed(2)} />
      <Statistic
        text='positive'
        rating={positive.toFixed(2)}
        percentage={props.percentage}
      />
    </>
  );
};

const App = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodVal = newValue => {
    setGood(newValue);
  };

  const setNeutralVal = newValue => {
    setNeutral(newValue);
  };

  const setBadVal = newValue => {
    setBad(newValue);
  };

  return (
    <div>
      <Title />
      <Button text='good' handler={() => setGoodVal(good + 1)} />
      <Button text='neutral' handler={() => setNeutralVal(neutral + 1)} />
      <Button text='bad' handler={() => setBadVal(bad + 1)} />
      <Statistics
        goodRating={good}
        neutralRating={neutral}
        badRating={bad}
        percentage='%'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
