import React, { useState,useEffect } from 'react';
import './Continent.css';
import { Link} from 'react-router-dom';

//props are: history, setRegion
function Continent(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [regions, setRegions] = useState([]);

  const onClickSetRegion=(regionName)=>{
    console.log('REGION IS:'+regionName);
    props.setRegion(regionName);
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:5000/regions")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRegions(result);
          console.log(result[0]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    
            <div id="outPopUp">

              <table id="leftText">
                <tbody>
                  <tr>
                    <th>Continent Code</th>
                    <th>Continent Name</th> 
                  </tr>
                
                  {regions.map((region,i)=>
                    <tr key={i}>
                      <td>{region.code}</td>
                      <td><Link to="/countries_card" onClick={()=>onClickSetRegion(region.name)}>{region.name}</Link></td>
                    </tr>)}

                </tbody>
              </table>

            </div>
          );
          }
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

