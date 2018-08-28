import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";
import '../App.css';

class App extends Component {
    render() {

        return (
            <React.Fragment>

                <Header />
                <Switch>
                    
                </Switch>
                <Footer />
            </React.Fragment>
        );

    }
}

export default App;