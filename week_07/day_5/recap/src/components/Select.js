import React from 'react';

function Select({ data, onChange }) {
    const options = data.map(item => {
        return (
            <option
                key={item.value}
                value={item.value}>
                    {item.text}
            </option>
        );
    });

    function handleChange(evt) {
        onChange(evt.target.value);
    }

    return (
        <select onChange={handleChange}>
            {options}
        </select>
    );
}

export default Select;
