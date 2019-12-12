import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    componentDidMount() {
        // Focus to the anchor, press 'Enter' should open a new webpage

    }

    goBack = () => {
        this.props.history.push('/home');
    }


    render() {
        return (
            <nav className="uk-navbar uk-navbar-container uk-margin main-navbar">
                <div className="uk-navbar-left">
                    <i class="fa fa-bars" aria-hidden="true" uk-toggle="target: #offcanvas-nav"></i>
                </div>
                <div id="offcanvas-nav" uk-offcanvas="overlay: true">
                    <i class="fa fa-times uk-offcanvas-close" aria-hidden="true"></i>
                    <div class="uk-offcanvas-bar side-nav">
                        <button class="uk-offcanvas-close" type="button" uk-close></button>
                        <ul class="uk-nav uk-nav-default nav-list">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li class="uk-parent">
                                <a href="#">Parent</a>
                                <ul class="uk-nav-sub">
                                    <li><a href="#">Sub item</a></li>
                                    <li><a href="#">Sub item</a></li>
                                </ul>
                            </li>
                            {/* <li class="uk-nav-header">Header</li> */}
                            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
                            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
                            <li class="uk-nav-divider"></li>
                            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
                        </ul>

                    </div>
                </div>
                <div className="uk-navbar-center cantact-list">
                    <strong>Contact List</strong>
                </div>
                <div className="uk-navbar-right back-button">
                    <Link to='/contact-list'>
                        <i class="fa fa-backward" aria-hidden="true"></i>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;