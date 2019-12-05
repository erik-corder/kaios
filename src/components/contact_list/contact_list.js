import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/footer';


class ContactList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    get_details = () => {
        this.props.history.push('/single-contact-list');
    }

    render() {
        return (
            <div>
                <Nav />
                <table class="uk-table uk-table-middle uk-table-divider">
                    <thead>
                    </thead>
                    <tbody>
                       
                        <tr onClick={() => this.get_details()}>
                            <td>
                                <div className="uk-width-1-6@m ">
                                    <img class="uk-border-circle" width="40" height="40" src={require('../../assests/images/avatar.jpg')} />
                                </div>
                            </td>
                            <td className="customer-details">
                                <strong>Default</strong>
                                <br />
                                071 584 265
                        </td>
                            <td>
                                <i  class="fa fa-plus" aria-hidden="true"></i>
                            </td>
                        </tr>
                       
                        <tr onClick={() => this.get_details()}>
                            <td>
                                <div className="uk-width-1-6@m ">
                                    <img class="uk-border-circle" width="40" height="40" src={require('../../assests/images/avatar.jpg')} />
                                </div>
                            </td>
                            <td className="customer-details">
                                <strong>Default</strong>
                                <br />
                                071 584 265
                        </td>
                            <td>
                                <i onClick={() => this.get_details()} class="fa fa-plus" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr onClick={() => this.get_details()}>
                            <td>
                                <div className="uk-width-1-6@m ">
                                    <img class="uk-border-circle" width="40" height="40" src={require('../../assests/images/avatar.jpg')} />
                                </div>
                            </td>
                            <td className="customer-details">
                                <strong>Default</strong>
                                <br />
                                071 584 265
                        </td>
                            <td>
                                <i onClick={() => this.get_details()} class="fa fa-plus" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr onClick={() => this.get_details()}>
                            <td>
                                <div className="uk-width-1-6@m ">
                                    <img class="uk-border-circle" width="40" height="40" src={require('../../assests/images/avatar.jpg')} />
                                </div>
                            </td>
                            <td className="customer-details">
                                <strong>Default</strong>
                                <br />
                                071 584 265
                        </td>
                            <td>
                                <i onClick={() => this.get_details()} class="fa fa-plus" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr onClick={() => this.get_details()}>
                            <td>
                                <div className="uk-width-1-6@m ">
                                    <img class="uk-border-circle" width="40" height="40" src={require('../../assests/images/avatar.jpg')} />
                                </div>
                            </td>
                            <td className="customer-details">
                                <strong>Default</strong>
                                <br />
                                071 584 265
                        </td>
                            <td>
                                <i onClick={() => this.get_details()} class="fa fa-plus" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr onClick={() => this.get_details()}>
                            <td>
                                <div className="uk-width-1-6@m ">
                                    <img class="uk-border-circle" width="40" height="40" src={require('../../assests/images/avatar.jpg')} />
                                </div>
                            </td>
                            <td className="customer-details">
                                <strong>Default</strong>
                                <br />
                                071 584 265
                        </td>
                            <td>
                                <i onClick={() => this.get_details()} class="fa fa-plus" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr onClick={() => this.get_details()}>
                            <td>
                                <div className="uk-width-1-6@m ">
                                    <img class="uk-border-circle" width="40" height="40" src={require('../../assests/images/avatar.jpg')} />
                                </div>
                            </td>
                            <td className="customer-details">
                                <strong>Default</strong>
                                <br />
                                071 584 265
                        </td>
                            <td>
                                <i onClick={() => this.get_details()} class="fa fa-plus" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr onClick={() => this.get_details()}>
                            <td>
                                <div className="uk-width-1-6@m ">
                                    <img class="uk-border-circle" width="40" height="40" src={require('../../assests/images/avatar.jpg')} />
                                </div>
                            </td>
                            <td className="customer-details">
                                <strong>Default</strong>
                                <br />
                                071 584 265
                        </td>
                            <td>
                                <i onClick={() => this.get_details()} class="fa fa-plus" aria-hidden="true"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Footer />
            </div>
        );
    }
}

export default ContactList;