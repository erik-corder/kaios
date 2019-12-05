import React, { Component } from 'react';
import logo from './logo.svg';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import './app.css';


import Nav from '../components/Navbar/Navbar';
import ContactList from "../components/contact_list/contact_list";
import SingleContactList from "../components/single_contact_details/single_contact_details";
import Routes from "../Routes/Routes";

const hist = createBrowserHistory({basename: '/'});

class App extends React.Component {

  constructor(prop){
    super(prop);
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
        <Redirect to="/home" />
      </Switch>
    );

    return (      
      <Router history={hist}>
        <Nav />
        {routes}
      </Router>
    );
   
  }
}

export default App;