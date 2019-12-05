import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
            <table class="uk-table uk-table-middle uk-table-divider">
                <thead>
                </thead>
                <tbody>
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
        );
    }
}

export default ContactList;