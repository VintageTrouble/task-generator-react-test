import React, { Component } from "react";
import { Route, Routes} from 'react-router-dom';

import { Home, Task } from 'Pages'
import { Header } from 'Components'

import 'Styles/App.css';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='app-content'>
                <Routes>
                    <Route path='/task/:id' element={<Task />} />
                    <Route exact path='/' element={<Home />} />
                </Routes>
                </div>
            </>
        );
    }
}

export default App;