import React, { Component } from 'react';
import logo from './logo.svg';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import './app.css';

import Routes from "../Routes/Routes";

const hist = createBrowserHistory({basename: '/'});

class App extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    // Focus to the anchor, press 'Enter' should open a new webpage

  }

  render() {

    let routes = (
      <Switch>
        {Routes.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
        <Redirect to="/login" />
      </Switch>
    );

    return (      
      <Router history={hist}>     
        {routes}       
      </Router>
    );
   
  }
}

export default App;
