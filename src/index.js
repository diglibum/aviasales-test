import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import AviasalesService from './services/aviasales-service';
import AviasalesServiceContext from './components/aviasales-service-context';
import store from './store';

const aviasalesService = new AviasalesService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <AviasalesServiceContext.Provider value={aviasalesService}>
        <Router>
          <App />
        </Router>
      </AviasalesServiceContext.Provider>
    </ErrorBoundry>
  </Provider>
  , document.getElementById('root')
);