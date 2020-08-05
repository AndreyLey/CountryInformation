import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Continent from './Continent/Continent';
import Country from './CountryCode/CountryCode';
import CountryCode from './CountryCode/CountryCode';
import Flag from './Flag/Flag';
import CountryName from './CountryName/CountryName';
import CountryCard from './CountryCard/CountryCard';
import ContinentCard from './ContinentCard/ContinentCard';
import { Route, Link, BrowserRouter as Router, Switch,useHistory } from 'react-router-dom';
import CountriesCard from './CountriesCard/CountriesCard';

// const routing = (
//   <Router>
//     <div>
//       {/* <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/continet_card">ContinetCard</Link>
//         </li>
//         <li>
//           <Link to="country_card/">CountryCard</Link>
//         </li>
//       </ul> */}
//       <Switch>
//         <Route exact path="/" component={App} />
//         <Route path="/continet_card" component={ContinentCard} />
//       </Switch>
//     </div>
//   </Router>
// )

function App(props) {
  let history = useHistory();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [regions, setRegions] = useState([]);

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
      <Router>
        <Switch>
          <Route exact path="/">
            <ContinentCard history={history} regions={regions}/>
          </Route>
          <Route path="/country_card">
            <CountryCard/>
          </Route>
          <Route path="/countries_card">
            <CountriesCard/>
          </Route>
        </Switch>
      </Router>
    );
  }

}

export default App;
