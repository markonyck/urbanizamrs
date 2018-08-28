import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Header } from "./partials/Header";
import '../App.css';

class App extends Component {
    render() {

        return (
            <React.Fragment>

                <Header />
                <Switch>

                </Switch>

            </React.Fragment>
        );

    }
}

export default App;