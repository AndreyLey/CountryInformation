import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import ContinentCard from './ContinentCard/ContinentCard';
// import CountryCard from './CountryCard/CountryCard';


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
//       </Switch>
//     </div>
//   </Router>
// )
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
