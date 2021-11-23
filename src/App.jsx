import React, { Component } from "react";

import { Home } from 'Pages/index.js'
import { Header } from 'Components/index.js'

import 'Styles/App.css';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='app-content'>
                    <Home />
                </div>
            </>
        );
    }
}

export default App;