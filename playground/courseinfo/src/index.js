import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ course }) => {
  const Part = ({ part, exercise }) => {
    return (
      <p>
        {part} {exercise}
      </p>
    );
  };
  return (
    <>
      <Part part={course.parts[0].name} exercise={course.parts[0].exercises} />
      <Part part={course.parts[1].name} exercise={course.parts[1].exercises} />
      <Part part={course.parts[2].name} exercise={course.parts[2].exercises} />
    </>
  );
};

const Total = ({ course }) => {
  return (
    <p>
      Number of exercises{' '}
      {course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises}
    </p>
  );
};

const History = props => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(' ')}</div>;
};

const hello = who => console.log('hello', who);

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Display = props => {
  return <div>{props.value}</div>;
};

const App = () => {
  // const [counter, setCounter] = useState(0);
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  // const [allClicks, setAll] = useState([]);
  const [value, setValue] = useState(10);

  const setToValue = newValue => {
    setValue(newValue);
  };

  // const handleLeftClick = () => {
  //   setAll(allClicks.concat('L'));
  //   setLeft(left + 1);
  // };

  // const handleRightClick = () => {
  //   setAll(allClicks.concat('R'));
  //   setRight(right + 1);
  // };
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  return (
    <div>
      {/* <Header course={course} />
      <Content course={course} />
      <Total course={course} /> */}
      {/* <Display counter={counter} />
      <Button clicked={setToValue(counter + 1)} text='plus' />
      <Button clicked={setToValue(counter - 1)} text='minus' />
      <Button clicked={setToValue(0)} text='reset' /> */}

      <div>
        {/* <div>
          {left}
          <button onClick={handleLeftClick}>left</button>
          <button onClick={handleRightClick}>right</button>
          {right}
          <History allClicks={allClicks} />
        </div> */}
        <Display value={value}></Display>
        <Button handleClick={() => setToValue(value + 1)} text='increment' />
        <Button handleClick={() => setToValue(0)} text='reset' />
        <Button handleClick={() => setToValue(1000)} text='thousand' />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
