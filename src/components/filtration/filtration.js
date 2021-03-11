const Filtration = (tickets, filters, sorting, qntty) => {
    const filterTickets = (items, filters) => {

        if (!filters["stops"]) {
            const len = items.length;
            let filtredItems = [];

            for (var i = 0; i < len; i++) {
                let item = items[i];
                let itemStops = (item.segments[0].stops.length + item.segments[1].stops.length);
                let filterName = "stops_" + itemStops;

                if (filters[filterName]) {
                    filtredItems.push(item);
                }
            }
            return filtredItems;
        }
        return items;
    };

    const sortTickets = (items, sorting) => {

        const { cheapest, fastest, optimal } = sorting;

        let sortedTickets = [];

        if (cheapest) {
            sortedTickets = items.sort(
                function (a, b) {
                    if (a.price > b.price) {
                        return 1;
                    }
                    if (a.price < b.price) {
                        return -1;
                    }
                    return 0;
                });
        }
        else if (fastest) {
            sortedTickets = items.sort(
                function (a, b) {

                    const aDuration = a.segments[0].duration + a.segments[1].duration,
                        bDuration = b.segments[0].duration + b.segments[1].duration;

                    return aDuration - bDuration;
                });
        }
        else if (optimal) {
            sortedTickets = items.sort((a, b) => {

                const aDuration = a.segments[0].duration + a.segments[1].duration,
                    bDuration = b.segments[0].duration + b.segments[1].duration,
                    aPrice = a.price,
                    bPrice = b.price,
                    priceCoeff = 0.3,
                    durCoeff = 1;
                const result = Math.floor(aDuration * durCoeff + aPrice * priceCoeff) - (bDuration * durCoeff + bPrice * priceCoeff);
                return result;
            });
        }
        else sortedTickets = items;
        return sortedTickets;
    };
    return sortTickets(filterTickets(tickets, filters), sorting).slice(0, qntty);
};

export default Filtration;