import React, { Component } from 'react';

class Navbar extends React.Component {
        
    componentDidMount() {
        // Focus to the anchor, press 'Enter' should open a new webpage

    }

    render() {
        return (
            <nav className="uk-navbar uk-navbar-container uk-margin main-navbar">
                <div className="uk-navbar-left">
                    <a className="uk-navbar-toggle" href="#">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="uk-navbar-center cantact-list">
                    <strong>Contact List</strong>
                </div>
            </nav>
        );
    }
}

export default Navbar;