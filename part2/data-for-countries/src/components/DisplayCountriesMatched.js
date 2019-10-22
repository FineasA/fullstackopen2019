import React, { useState } from 'react';
import SingleCountryDisplay from './SingleCountryDisplay';
import ShowStateDisplay from './ShowStateDisplay';

const DisplayCountriesMatched = props => {
  const [showState, setShowState] = useState(false);
  const [indexCountry, setIndexCountry] = useState();

  const listId = itemId => {
    setShowState(!showState);
    setIndexCountry(itemId);
  };

  let message = undefined;

  if (props.countriesList.length === 1) {
    message = (
      <SingleCountryDisplay
        countriesList={props.countriesList}
        countriesMatched={props.countriesMatched}
      />
    );
    return message;
  } else if (
    props.countriesList.length > 1 &&
    props.countriesList.length <= 10
  ) {
    const renderedList = props.countriesList.map((country, index) => {
      const languageName = country.languages.map((name, index) => {
        return <li key={index}>{name.name}</li>;
      });

      return (
        <div key={index}>
          <li key={index}>
            {country.name}
            <button onClick={() => listId(index)}>show {country.name}</button>
          </li>
        </div>
      );
    });
    message = <ul>{renderedList}</ul>;
  }

  const showRenderedList = props.countriesList.map(country => {
    return country;
  });

  return (
    <div>
      {showState ? (
        <ShowStateDisplay country={showRenderedList[indexCountry]} />
      ) : (
        message
      )}
    </div>
  );
};

export default DisplayCountriesMatched;
