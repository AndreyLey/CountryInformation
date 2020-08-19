import React,{useState} from 'react';
import './App.css';
import CountryCard from './CountryCard/CountryCard';
import ContinentCard from './ContinentCard/ContinentCard';
import { Route, BrowserRouter as Router, Switch,useHistory } from 'react-router-dom';
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
  const [region, setRegion]=useState('Asia');
  const [country, setCountry] =useState('Israel');
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <ContinentCard history={history} setRegion={setRegion}/>
          </Route>
          <Route path="/country_card">
            <CountryCard country={country} region={region}/>
          </Route>
          <Route path="/countries_card">
            <CountriesCard region={region} setCountry={setCountry}/>
          </Route>
        </Switch>
      </Router>
    );
  

}

export default App;
