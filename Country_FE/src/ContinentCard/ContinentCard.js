import React, { Component } from 'react';
import Continent from '../Continent/Continent';

function ContinentCard (props) {
  
  return (
  <div>
    <Continent history={props.history} regions={props.regions}/>
  </div>
  );
}

export default ContinentCard;
