import React from 'react';

function FavouriteCountriesList({ countries }) {
    const listItems = countries.map(country => {
        return (
            <li key={country.cca3}>{country.name.common}</li>
        );
    });

    return (
        <>
            <h2>Favourite Countries</h2>
            {!countries.length ? <p>You haven't added any favourite countries</p> : null}
            <ul>
                {listItems}
            </ul>
        </>
    );
}

export default FavouriteCountriesList;
