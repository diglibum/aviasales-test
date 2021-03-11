import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from '../pages';
import Logo from './logo.svg';

import './style.scss';

const App = () => {

    return (
        <div className="wrapper">
            <div className="app">
                <div className="app__header">
                    <div className="app__header-logo">
                        <img src={Logo} alt="Aviasales test" />
                    </div>
                </div>
                <div className="app__inner">
                    <Switch>
                        <Route path="/" component={MainPage} />
                    </Switch>
                </div>
            </div>
        </div>

    )
};
export default App;