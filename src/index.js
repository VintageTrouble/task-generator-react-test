import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import App from "./App.jsx";
import store from 'Redux'

import 'Styles/fonts.css'
import '@fortawesome/fontawesome-free/css/all.css'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
    document.getElementById("root"));