import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from "react-router-dom" 
import './index.css';
import App from './App';
import Demo from './demo'
import * as serviceWorker from './serviceWorker';
import ArrayOfImages from "./titleBasedImages"
import ImageInfo from "./singleImageInfo"
import Dashboard from "./Dashbord"
import Preferences from "./Preferences"
import Help from "./Help"
import Login1 from "./Login1"
import PeishkharDash from "./PeiskharDash"
import InventoryDash from "./InventoryDash"
import AuditorDash from "./AuditorDash"
import DyEo from "./Dy.EoDash"



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={Login1}/>
      <Route path="/test" component={Demo}/>
      <Route path="/test1" component={ArrayOfImages}/>
      <Route path="/test2" component={ImageInfo}/>
      <Route path="/test3" component={Dashboard}/>
      <Route path="/preference" component={Preferences}/>
      <Route path="/help" component={Help}/>
      <Route path="/peiskhar" component={PeishkharDash}/>
      <Route path="/inventory" component={InventoryDash}/>
      <Route path="/audit" component={AuditorDash}/>
      <Route path="/DyEo" component={DyEo}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
