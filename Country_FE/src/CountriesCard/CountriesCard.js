import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
//props are: region, setCountry
function CountriesCard(props) {
   
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);

  const onClickSetCountry=(countryName)=>{
    console.log('COUNTRY IS:'+countryName);
    props.setCountry(countryName);
  }

  const loadContent = async()=>{
    try{     
      var url='';
      console.log(url.concat('http://localhost:5000/regions/',props.region,'/countries'));
      console.log(url);
      const response = await fetch(url.concat('http://localhost:5000/regions/',props.region,'/countries'));//"http://localhost:5000/regions/Europe/countries");
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
         {countries.map((country,i)=>
          <li key={i}><Link to="/country_card" onClick={()=>onClickSetCountry(country)}>{country}</Link></li>)}
      </ul>
      {/* <CountryCode code={country.code}/>
      <CountryName name={country.name} capital={country.capital}/>
      <Flag flagUrl={country.flag}/> */}
     </div>
  );
  
}

export default CountriesCard;
