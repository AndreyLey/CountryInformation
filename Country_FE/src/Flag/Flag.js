import React, { Component } from 'react';
import './Flag.css';
function Flag(props){
  
  return(
  <div><img id="flagImg" src={props.flagUrl}/></div>
  );
  
}

export default Flag;
