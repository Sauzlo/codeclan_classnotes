import React from "react";
import FavouriteCountriesList from "./FavouriteCountriesList";

function CountryInfo({ country, onFavouriteButtonClick }) {
    if (country === null) {
        return (
            <p>Please select a country</p>
        );
    }

    function handleFavouriteButtonClick() {
        onFavouriteButtonClick(country);
    }

    return (
        <>
            <h2>{country.name.common}</h2>
            <ul>
                <li>Population: {country.population.toLocaleString()}</li>
                <li>Area: {country.area.toLocaleString()}</li>
                <li>Region: {country.region}</li>
                <li>Sub-Region: {country.subregion}</li>
            </ul>
            <button onClick={handleFavouriteButtonClick}>
                Add to favourites
            </button>
        </>
    );
}

export default CountryInfo;
