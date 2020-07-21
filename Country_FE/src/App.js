import React from 'react';
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
  return (

    // <div className="App">
    //   APP
    <ContinentCard history={history}/>
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
