import React, { Component } from 'react';
import { Link } from "react-router-dom"


class Login extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {

    }

    render() {
        return (
            <div class="login-form">
                <form>
                    <div class="uk-margin">
                        <div class="uk-inline login-field">
                            <h1><strong>Login</strong></h1>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline login-field">
                            <span class="uk-form-icon uk-form-icon-flip log-icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                            <input class="uk-input" type="text" />
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline login-field">
                            <span class="uk-form-icon uk-form-icon-flip log-icon"><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                            <input class="uk-input" type="text" />
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline login-field">
                            <Link to='/contact-list'>
                                <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Button</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;