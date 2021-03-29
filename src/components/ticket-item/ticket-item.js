import React, { Component } from 'react';
import './style.scss';

export default class TicketItem extends Component {
    render() {
        const { ticket } = this.props;
        const { price, carrier, segments } = ticket;
        const logoPath = `//pics.avs.io/99/36/${carrier}.png`;
        const timeFrom = timeFormat(segments[0].date),
            timeTo = timeFormat(segments[1].date)

        const segmentsItems = segments.map((item) => {

            const { origin, destination, stops, duration } = item;

            const segment = {
                origin,
                destination,
                duration: durationFromMinutes(duration),
                timeFrom,
                timeTo,
                stopsHeader: stopsHeader(stops),
                stops: stops.join(", ")
            };

            return (
                <SegmentView key={origin + destination} segment={segment} />
            )
        });

        return (

            <div className="ticket__wrapper">
                <div className="ticket__header">
                    <div className="ticket__header__price">
                        {numberWithSpaces(price)} P
                    </div>
                    <div className="ticket__header__carrier-logo">
                        <img src={logoPath} alt={carrier} />
                    </div>
                </div>
                <div className="ticket__content">
                    {segmentsItems}
                </div>
            </div>
        )
    }
}

const SegmentView = ({ segment }) => {

    const { origin, destination, duration, timeFrom, timeTo, stopsHeader, stops } = segment;

    return (
        <>
            <div className="segment-route departure">
                <div className="label">{origin} - {destination}</div>
                <span>{timeFrom} - {timeTo}</span>
            </div>
            <div className="segment-route time">
                <div className="label">В пути</div>
                <span>{duration}</span>
            </div>
            <div className="segment-route time">
                <div className="label">{stopsHeader}</div>
                <span>{stops}</span>
            </div>
        </>
    )
}

function stopsHeader(arr) {
    const stopsCount = arr.length;
    const stopsHeader = (stopsCount === 1) ? "пересадка" :
        (stopsCount >= 2 && stopsCount <= 4) ? "пересадки" :
            "пересадок";
    return `${stopsCount} ${stopsHeader}`;
}

function numberWithSpaces(num) {
    const formedNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return formedNum;
}

function durationFromMinutes(val) {
    const minutes = val % 60 + "м";
    let hours = "";
    if (val > 60) {
        if (val > 60 * 24) {
            hours = Math.floor((val % (60 * 24)) / 60) + "ч ";
        } else {
            hours = Math.floor(val / 60) + "ч ";
        }

    }
    const days = (val > 24 * 60) ? Math.floor(val / (60 * 24)) + "д " : "";

    return `${days}${hours}${minutes} `;
}

function timeFormat(dateString) {

    const date = new Date(dateString);

    let hour = date.getHours();
    hour = (hour < 10) ? '0' + hour : hour;

    let min = date.getMinutes();
    min = (min < 10) ? '0' + min : min;

    return `${hour}: ${min} `;
}