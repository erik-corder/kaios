import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    componentDidMount() {
        // Focus to the anchor, press 'Enter' should open a new webpage

    }

    goBack = () => {
        this.props.history.push('/home  ');
    }


    render() {
        return (
            <nav className="uk-navbar uk-navbar-container uk-margin main-navbar">
                <div className="uk-navbar-left">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div className="uk-navbar-center cantact-list">
                    <strong>Contact List</strong>
                </div>
                <div className="uk-navbar-right back-button">
                    <Link to='/home'>
                        <i class="fa fa-backward" aria-hidden="true"></i>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;