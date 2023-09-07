import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';

    // fetch returns a promise object
    fetch(url)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log('Oh no, there was an error!', err));

    // promise methods...
    // promise.then();
    // promise.catch();

    // possible promise states
    // {
    //   state: 'fulfilled',
    //   result: Response
    // }

    // {
    //   state: 'rejected',
    //   result: Error
    // }
  }, []);

  useEffect(() => {
    console.log('The countries changed')
  }, [countries]);

  const countryListItem = countries.map((country) => {
    return (
      <li key={country.cca3}>{country.name.common}</li>
    );
  });

  return (
    <div className="App">
      <ul>
        {countryListItem}
      </ul>
    </div>
  );
}

export default App;
