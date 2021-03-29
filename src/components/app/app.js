import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from '../pages';
import Logo from './logo.svg';

import './style.scss';

const App = () => {

    return (
        <div className="app">
            <div className="app__header">
                <div className="container">
                    <div className="app__header-logo">
                        <img src={Logo} alt="Aviasales test" />
                    </div>
                </div>
            </div>
            <div className="app__content">
                <div className="container">
                    <div className="app__wrapper">
                        <Switch>
                            <Route path="/" component={MainPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default App;