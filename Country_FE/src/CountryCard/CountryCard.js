import React, { useEffect,useState } from 'react';
import CountryCode from '../CountryCode/CountryCode';
import CountryName from '../CountryName/CountryName';
import Flag from '../Flag/Flag';
import './CountryCard.css';

//props are: region, country
function CountryCard (props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [country, setCountry] = useState({});

  const loadContent = async()=>{
    try{
      var url='';
      console.log(url.concat('http://localhost:5000/regions/',props.region,'/countries/',props.country));
      const response = await fetch(url.concat('http://localhost:5000/regions/',props.region,'/countries/',props.country));//"http://localhost:5000/regions/Europe/countries/german");
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
