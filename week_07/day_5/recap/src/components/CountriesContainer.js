import React, {useState, useEffect} from "react";
import CountryInfo from "./CountryInfo";
import FavouriteCountriesList from "./FavouriteCountriesList";
import Select from "./Select";

function CountriesContainer() {
    const [countries, setCountries] = useState([]);
    const [favouriteCountries, setFavouriteCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    // es6 - .then()
    // function fetchCountries() {
    //     fetch('https://restcountries.com/v3.1/all')
    //         .then(response => response.json())
    //         .then(countries => setCountries(countries))
    //         .catch(err => console.error(err));
    // }

    // es7 - async / await
    async function fetchCountries() {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const countries = await response.json();
            setCountries(countries);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    function updateSelectedCountry(cca3) {
        const newSelectedCountry = countries.find(country => {
            return country.cca3 === cca3;
        });
        setSelectedCountry(newSelectedCountry);
    }

    function addFavouriteCountry(newFavouriteCountry) {
        const updatedFavouriteCountries = [...favouriteCountries, newFavouriteCountry];
        setFavouriteCountries(updatedFavouriteCountries);
    }

    const countriesSelectData = countries.map(country => {
        return {
            text: country.name.common,
            value: country.cca3
        };
    });

    return (
        <>
            <h1>Countries App</h1>
            <Select
                data={countriesSelectData}
                onChange={updateSelectedCountry} />
            <CountryInfo country={selectedCountry}
                onFavouriteButtonClick={addFavouriteCountry}/>
            <FavouriteCountriesList
                countries={favouriteCountries}/>
        </>
    );
}

export default CountriesContainer;
