import React from 'react';
import Weather from './Weather';

const SingleCountryDisplay = props => {
  let message = '';
  if (props.countriesList.length === 1) {
    const languages = props.countriesMatched.languages.map(
      (language, index) => {
        return <li key={index}>{language.name}</li>;
      }
    );

    message = (
      <div>
        <h2>{props.countriesMatched.name}</h2>
        <p>capital: {props.countriesMatched.capital}</p>
        <p>population: {props.countriesMatched.population}</p>
        <h1>Languages: </h1>
        <ul>{languages}</ul>
        <img style={imageStyling} src={props.countriesMatched.flag} />
        <Weather capital={props.countriesMatched.capital} />
      </div>
    );
  }
  return <div>{message}</div>;
};

const imageStyling = {
  height: '250px',
  width: '400px',
  marginLeft: '0px'
};

export default SingleCountryDisplay;
