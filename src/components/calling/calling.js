import React, { Component } from 'react';

import Nav from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/footer';


class Calling extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Nav />
                <div>
                    <div className="run-time">
                        <p>00:11</p>
                    </div>
                    <div className="user-icon">
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                    <div className="run-time">
                        <p className="name">Title</p>
                        <p className="call-gif">Calling...</p>
                    </div>
                    <hr />
                    <div class="icon-set" uk-gird>
                        <div class="uk-card uk-card-default uk-card-body card">
                            <i class="fa fa-microphone-slash icons" aria-hidden="true"></i>
                        </div>
                        <div class="uk-card uk-card-default uk-card-body card">
                            <i class="fa fa-pause icons" aria-hidden="true"></i>
                        </div>
                        <div class="uk-card uk-card-default uk-card-body card">
                            <i class="fa fa-volume-up icons" aria-hidden="true"></i>
                        </div>
                        <div class="uk-card uk-card-default uk-card-body card">
                            <i class="fa fa-keyboard-o icons" aria-hidden="true"></i>   
                        </div>
                    </div>
                    <div className="calling-img">
                        <img className="calling-icon" src={require('../../assests/images/calling-icon.jpg')} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Calling;