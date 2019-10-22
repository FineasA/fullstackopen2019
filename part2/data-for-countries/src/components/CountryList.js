import React from 'react';
import DisplayCountriesMatched from './DisplayCountriesMatched';

const CountryList = props => {
  // * create array of objects of specific properties that I want

  const countryProperties = props.countries.map(country => {
    const countryProperties = {
      name: country.name,
      capital: country.capital,
      population: country.population,
      languages: [...country.languages],
      flag: country.flag
    };
    return countryProperties;
  });
  const countryList = countryProperties.filter(country => {
    const countrySearch = country.name
      .toLowerCase()
      .includes(props.searchQuery.toLowerCase());
    return countrySearch;
  });
  const capitalCities = countryList.map(country => {
    return country.capital;
  });

  const countryMap = countryList.map((countriesMatched, index) => {
    return (
      <DisplayCountriesMatched
        key={index}
        countriesMatched={countriesMatched}
        countriesList={countryList}
      />
    );
  });

  return (
    <div>
      {countryMap.length > 10 ? (
        <p>too many matches, specify another filter...</p>
      ) : countryMap.length > 1 && countryMap.length < 11 ? (
        <DisplayCountriesMatched
          countriesList={countryList}
          capitals={capitalCities}
        />
      ) : (
        countryMap
      )}
    </div>
  );
};

export default CountryList;
