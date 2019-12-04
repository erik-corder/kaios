import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';


import Nav from '../components/Navbar/Navbar';
import ContactList from "../components/contact_list/contact_list";
import SingleContactList from "../components/single_contact_details/single_contact_details";

class App extends Component {
  componentDidMount() {
    // Focus to the anchor, press 'Enter' should open a new webpage

  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={ContactList} />
          <Route path="/SingleContactList" component={SingleContactList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
