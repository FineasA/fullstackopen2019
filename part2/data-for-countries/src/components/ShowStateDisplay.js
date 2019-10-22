import React from 'react';
import Weather from './Weather';

const ShowStateDisplay = props => {
  const languages = props.country.languages.map((language, index) => {
    return <li key={index}>{language.name}</li>;
  });
  return (
    <div>
      <h2>{props.country.name}</h2>
      <p>capital: {props.country.capital}</p>
      <p>population: {props.country.population}</p>

      <h1>Languages: </h1>
      <ul>{languages}</ul>
      <img style={imageStyling} src={props.country.flag} />
      <Weather capital={props.country.capital} />
    </div>
  );
};

const imageStyling = {
  height: '250px',
  width: '400px',
  marginLeft: '0px'
};

export default ShowStateDisplay;
