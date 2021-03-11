import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketsList from '../tickets-list';
import WithAviasalesService from '../hoc';
import { idLoaded, idError, ticketsLoaded, ticketsRequested, ticketsError } from '../../actions';
import Filtration from '../filtration';
import Filter from '../filter';
import Sorting from '../sorting';
import Spinner from '../spinner';
import Button from '../button';
import Error from '../error';

import './main-page.scss';


class MainPage extends Component {

    loadingTicketsPart() {
        const { AviasalesService, searchId } = this.props;
        const { ticketsLoaded, ticketsError } = this.props;

        AviasalesService.getTickets(searchId)
            .then(res => {
                ticketsLoaded(res);
            })
            .catch(() => ticketsError());
    }

    componentDidMount() {
        const { AviasalesService, searchId } = this.props;
        const { idLoaded, idError } = this.props;
        const { stop, error } = this.props;

        if (!searchId) {
            AviasalesService.getSearchId()
                .then(res => idLoaded(res.searchId))
                .catch(() => idError());
        } else {
            if (!stop && !error) {
                this.loadingTicketsPart(AviasalesService, searchId);
            }
        };
    }

    componentDidUpdate({ stop, error }) {
        if (!stop && !error) {
            this.loadingTicketsPart();
        }
    }


    render() {
        let { tickets, filters, sorting, loading, ticketsOnPage, error } = this.props;
        let filtredTickets = [];

        if (tickets.length > 0) {
            filtredTickets = Filtration(tickets, filters, sorting, ticketsOnPage);
        }

        const spinner = (loading) ? <Spinner /> : null;
        const ticketsLen = filtredTickets.length;

        const btn = (ticketsLen > 0 && !loading) ? <Button btnText="Показать ещё 5 билетов!" /> : null;
        const errorMessage = (error) ? <Error /> : null;

        return (
            <>
                <div className="app__informer">
                    <div className="app__informer__filters">
                        <Filter />
                    </div>
                </div>
                <div className="app__content">
                    <Sorting />
                    {spinner}
                    {errorMessage}
                    <TicketsList tickets={filtredTickets} />
                    <div className="show-more-btn">
                        {btn}
                    </div>
                </div>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = {
    idLoaded,
    idError,
    ticketsLoaded,
    ticketsRequested,
    ticketsError
}

export default WithAviasalesService()(connect(mapStateToProps, mapDispatchToProps)(MainPage));