import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from "react-router-dom" 
import './index.css';
import App from './App';
import Demo from './demo'
import * as serviceWorker from './serviceWorker';
import Sample from './Sample';
import ArrayOfImages from "./titleBasedImages"
import ImageInfo from "./singleImageInfo"
import Login from "./Login"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={Login}/>
      <Route path="/test" component={ArrayOfImages}/>
      <Route path="/test2" component={ImageInfo}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
