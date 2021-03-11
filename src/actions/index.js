const ticketsLoaded = (newTickets) => {
    return {
        type: "TICKETS_LOADED",
        payload: newTickets
    };
}

const ticketsRequested = () => {
    return {
        type: "TICKETS_REQUESTED"
    };
}

const ticketsError = () => {
    return {
        type: "TICKETS_ERROR"
    }
}

const idLoaded = (searchId) => {
    return {
        type: "ID_LOADED",
        payload: searchId
    }
}

const idError = () => {
    return {
        type: "ID_ERROR"
    }
}

const filterChanged = (filterName, value) => {
    return {
        type: "FILTER_CHANGED",
        payload: { filterName, value }
    }
}

const sortingChanged = (sortName) => {
    return {
        type: "SORTING_CHANGED",
        payload: sortName
    }
}

const showMoreTickets = () => {
    return {
        type: "SHOW_MORE_TICKETS"
    }
}

export {
    ticketsLoaded,
    ticketsRequested,
    ticketsError,
    idLoaded,
    idError,
    filterChanged,
    sortingChanged,
    showMoreTickets
}