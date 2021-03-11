import { createStore } from 'redux';
import reducer from './components/reducers';

const persistedState = {
    searchId: null,
    tickets: [],
    filters: {
        stops: true,
        stops_0: true,
        stops_1: true,
        stops_2: true,
        stops_3: true
    },
    sorting: {
        cheapest: true,
        fastest: false,
        optimal: false
    },
    stop: false,
    ticketsOnPage: 5,
    loading: true,
    error: false,
    errorCount: 0 // the number of errors in the tickets request 
};

const store = createStore(reducer, persistedState);

export default store;