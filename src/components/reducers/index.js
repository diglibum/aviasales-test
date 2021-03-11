const reducer = (state, action) => {
    switch (action.type) {
        case "ID_LOADED":
            return {
                ...state,
                searchId: action.payload,
                errorCount: 0
            };
        case "ID_ERROR":
            console.log("error id");
            return {
                ...state,
                error: true,
                loading: false
            };
        case "TICKETS_LOADED":
            const allTickets = [
                ...state.tickets,
                ...action.payload.tickets
            ];
            return {
                ...state,
                tickets: allTickets,
                loading: false,
                stop: action.payload.stop,
                errorCount: 0
            };

        case "TICKETS_ERROR":
            if (state.errorCount < 2) {
                return {
                    ...state,
                    errorCount: state.errorCount + 1
                }
            }
            return {
                ...state,
                errorCount: 0,
                error: true,
                loading: false
            }


        case "FILTER_CHANGED":

            const { filterName, value } = action.payload;
            let newFilters = { ...state.filters };

            if (filterName === "stops") {
                for (let key in newFilters) {
                    newFilters[key] = value
                }
            }
            else {
                newFilters[filterName] = value;
                if (newFilters["stops"] === true) newFilters["stops"] = false;

                const isAll = Object.values(newFilters).slice(1).every(item => (item === true));

                if (isAll) {
                    newFilters["stops"] = true;
                }
            }
            return {
                ...state,
                filters: newFilters
            }

        case "SORTING_CHANGED":
            const newSorting = { ...state.sorting };

            for (let key in newSorting) {
                newSorting[key] = false;
            }

            newSorting[action.payload] = true;

            return {
                ...state,
                sorting: newSorting
            }

        case "SHOW_MORE_TICKETS":
            return {
                ...state,
                ticketsOnPage: state.ticketsOnPage + 5
            }

        default:
            return state;
    }
};

export default reducer;