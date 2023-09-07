import React from 'react';

function Heading({ text }) {
    console.log('Heading component rendering');

    return (
        <h1>{text}</h1>
    );
}

export default Heading;
