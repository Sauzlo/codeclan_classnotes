import React from 'react';

function CountrySelect({countries, onCountrySelected}){

  const countryOptions = countries.map((country, index) => {
    return <option value={index} key={index}>{country.name.common}</option>
  });

  const onCountryChange = function(evt){
    const index = evt.target.value;
    const selectedCountry = countries[index];
    onCountrySelected(selectedCountry);
  }

return(
  <select defaultValue="default" onChange={onCountryChange}>
    <option value="default" disabled>Pick a country...</option>
    {countryOptions}
  </select>
)
}

export default CountrySelect;