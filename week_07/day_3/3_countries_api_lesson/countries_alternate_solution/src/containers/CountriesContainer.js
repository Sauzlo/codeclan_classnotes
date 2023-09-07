import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';
import CountrySelect from '../components/CountrySelect';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      getCountries();
    }, [])
    
    const onCountrySelected = function(country){
      setSelectedCountry(country);
    }

    // const onCountryClicked = function(country){
    //   setSelectedCountry(country);
    // }

    // const getCountries = function(){
    //     fetch('https://restcountries.com/v3.1/all')
    //     .then(res => res.json())
    //     .then(countries => {
    //       const sortedCountries = countries.sort(function (country1, country2) {
    //         if (country1.name.common > country2.name.common) return 1;
    //         if (country1.name.common < country2.name.common) return -1;
    //         return 0;
    //       })
    //       setCountries(sortedCountries);
    //     })
    // }

    const getCountries = async function(){
      const res = await fetch('https://restcountries.com/v3.1/all');
      const countries = await res.json();
      const sortedCountries = countries.sort(function(country1, country2) {
        if (country1.name.common > country2.name.common) return 1;
        if (country1.name.common < country2.name.common) return -1;
        return 0;
      })
      setCountries(sortedCountries);
    }

    return (
        <div className="main-container">
            {/* <CountryList countries={countries} onCountryClicked={onCountryClicked}/> */}
            <CountrySelect countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
            {/* {selectedCountry && <CountryDetail country={selectedCountry} />} */}
        </div>
    )
}

export default CountryContainer;
