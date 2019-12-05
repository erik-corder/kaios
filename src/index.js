// import l10n.js before react modules
import 'kaios-gaia-l10n';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './view/app';
import './index.css';
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter basename="">
        <App />
    </BrowserRouter>
    , document.getElementById('app')
);
