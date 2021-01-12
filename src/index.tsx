import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch ,Redirect} from "react-router-dom";
import {exceptionRoutes} from "./routes/config";

ReactDOM.render(
  <Router>
    <Switch>
        {/* 转发到 App */}
      <Route path="/admin" render={routeProps => <App {...routeProps}/>}/>
      <Redirect to={exceptionRoutes[0].path} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
