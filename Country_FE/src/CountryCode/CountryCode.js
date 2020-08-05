import React, { Component } from 'react';
import './CountryCode.css';

function CountryCode(props){
    return (
    <div>
      <h1>{props.code}</h1>
    </div>
    );
}

export default CountryCode;
