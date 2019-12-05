import React, { Component } from 'react';


//components
import App from "../view/app.js";
import ContactList from "../components/contact_list/contact_list";
import SingleContact from "../components/single_contact_details/single_contact_details";

const Routes  = [
    {
        path: '/home',
        name: "Contact list",
        icon: "fas fa-user",
        component: ContactList
    },
    {
        path: '/single-contact-list',
        name: "single contact list",
        icon: "fas fa-user",
        component: SingleContact
    }
]
export default Routes;
