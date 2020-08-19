import React from 'react';
import Continent from '../Continent/Continent';
import {ReactPainter} from 'react-painter';

function ContinentCard (props) {
  
  return (
  <div>
    <Continent history={props.history} setRegion={props.setRegion}/>
    <ReactPainter
    width={300}
    height={300}
    onSave={blob => console.log(blob)}
    render={({ triggerSave, canvas }) => (
      <div>
        <button onClick={triggerSave}>Save Canvas</button>
        <div>{canvas}</div>
      </div>
    )}
  />
  </div>
  );
}

export default ContinentCard;
