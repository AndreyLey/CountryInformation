import React, { Component } from 'react';
import CountryCode from '../CountryCode/CountryCode';
import CountryName from '../CountryName/CountryName';
import Flag from '../Flag/Flag';
import './CountryCard.css';

function CountryCard () {
  
  return (
    <div>CountryCard
      <CountryCode/>
      <CountryName/>
      <Flag/>
    </div>
  );
}

export default CountryCard;
