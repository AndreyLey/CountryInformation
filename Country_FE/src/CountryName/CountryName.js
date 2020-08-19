import React from 'react';

function CountryName(props) {
    return (
    <div>
        {props.name}
        <br/>
        {props.capital}
    </div>
    );
}

export default CountryName;
