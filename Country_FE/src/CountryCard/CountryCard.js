import React, { Component, useEffect,useState } from 'react';
import CountryCode from '../CountryCode/CountryCode';
import CountryName from '../CountryName/CountryName';
import Flag from '../Flag/Flag';
import './CountryCard.css';

function CountryCard (props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [country, setCountry] = useState(new Object());

  const loadContent = async()=>{
    try{
      const response = await fetch("http://localhost:5000/regions/Europe/countries/german");
      const json = await response.json();
      console.log(json);
      setCountry(json);
    }
    catch(error)
    {
      setIsLoaded(true);
      setError(error);
      console.log(error);
    }
  }

  useEffect(()=>{
    // Create an scoped async function in the hook
    // async function anyNameFunction() {
    //   await loadContent();
    // }
    // Execute the created function directly
    // anyNameFunction();
    loadContent();
  },[])

  // if (error) {
  //    return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //          return <div>Loading...</div>;
  // } else {
     return (
     <div>
      <CountryCode code={country.code}/>
      <CountryName name={country.name} capital={country.capital}/>
      <Flag flagUrl={country.flag}/>
     </div>
  );
}

export default CountryCard;
