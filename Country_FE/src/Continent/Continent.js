import React, { Component, useState,useEffect } from 'react';
import './Continent.css';
import { Route, Link, BrowserRouter as Router, Switch, useHistory,useLocation,useParams} from 'react-router-dom';
import CountryCard from '../CountryCard/CountryCard';


function Continent(props) {
    return (
    
    <div id="outPopUp">

      <table id="leftText">
        <tbody>
          <tr>
            <th>Continent Code</th>
            <th>Continent Name</th> 
          </tr>
        
          {props.regions.map(region=>
            <tr>
              <td>{region.code}</td>
              <td key={region.name}>{region.name}</td>
            </tr>)}

        </tbody>
      </table>

    </div>
  );
  
  //////////////////////////////////Working fetch////////////////////////////////////
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [country, setCountry] = useState(new Object());

  // // Note: the empty deps array [] means
  // // this useEffect will run once
  // // similar to componentDidMount()
  // useEffect(() => {
  //   fetch("https://restcountries.eu/rest/v2/name/ukraine")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setCountry( result[0]);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  //   return (
  //     <ul>

  //       {/* {items.map(item => (
  //         <li key={item.name}>
  //           {item.name} {item.topLevelDomain}
  //         </li>
  //       ))} */}
  //                 <li>{country.name}</li> 
  //     </ul>
  //   );
  // }
  
}

export default Continent;

