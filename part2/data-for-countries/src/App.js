import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data);
    });
  }, []);

  const searchCountry = e => {
    e.preventDefault();
  };

  const searchCountryHandler = e => {
    setCountry(e.target.value);
  };

  return (
    <div className='App'>
      <form onSubmit={searchCountry}>
        <div>
          find countries:{' '}
          <input value={country} onChange={searchCountryHandler} />
        </div>
      </form>
      <CountryList countries={countries} searchQuery={country} />
    </div>
  );
};

export default App;
