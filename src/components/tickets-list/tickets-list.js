import React, { Component } from 'react';
import TicketItem from '../ticket-item';

import './style.scss';

export default class TicketsList extends Component {
    render() {
        const { tickets } = this.props;

        const items = tickets.map((item) => {
            const itemKey = "" + item.price + item.carrier + Date.parse(item.segments[0].date) + Date.parse(item.segments[1].date);
            return (
                <div key={itemKey} className="ticket">
                    <TicketItem ticket={item} />
                </div>
            );
        });

        return (
            <div className="tickets-list">
                {items}
            </div>
        )
    }
}