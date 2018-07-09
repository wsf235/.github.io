import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Major from './components/major';
import Main from './components/main';
import './App.css';

import {
    BrowserRouter as Router
} from 'react-router-dom'


class App extends Component {

    

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Major />
                    <Main />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
