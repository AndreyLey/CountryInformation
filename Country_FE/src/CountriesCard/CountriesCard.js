import React, { Component, useState,useEffect } from 'react';

function CountriesCard(props) {
   
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);

  const loadContent = async()=>{
    try{
      const response = await fetch("http://localhost:5000/regions/Europe/countries");
      const json = await response.json();
      console.log(json);
      setCountries(json);
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
       CountriesCard
       <ul>
         {countries.map(country=>
          <li> {country}</li>)}
      </ul>
      {/* <CountryCode code={country.code}/>
      <CountryName name={country.name} capital={country.capital}/>
      <Flag flagUrl={country.flag}/> */}
     </div>
  );
  
}

export default CountriesCard;
