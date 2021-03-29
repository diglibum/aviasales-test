import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterChanged } from '../../actions';

import './style.scss';

class Filter extends Component {

    checkboxes = [];

    componentDidMount() {
        this.checkboxes = document.querySelectorAll(".transfer-filter .transfer-filter__item input[type='checkbox']");
        this.bindListeners(this.checkboxes);
    }

    componentDidUpdate() {
        this.addChecked(this.checkboxes);
    }

    addChecked(checkboxes) {
        const { filters } = this.props;

        checkboxes.forEach((checkbox) => {
            const cName = checkbox.getAttribute("id");
            checkbox.checked = (filters[cName]) ? true : false;
        });

    }

    bindListeners(checkboxes) {
        const { filterChanged } = this.props;

        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", (e) => {
                const checkbId = e.target.getAttribute("id");
                const checkbVal = e.target.checked;

                filterChanged(checkbId, checkbVal);
            });
        });
    }

    render() {
        return (
            <div className="app__filters">
                <div className="transfer-filter">
                    <div className="transfer-filter__title">Количество пересадок</div>
                    <div className="transfer-filter__wrapper">
                        <div className="transfer-filter__item">
                            <input type="checkbox" id="stops" name="stops" />
                            <label htmlFor="stops">Все</label>
                        </div>
                        <div className="transfer-filter__item">
                            <input type="checkbox" id="stops_0" name="stops_0" />
                            <label htmlFor="stops_0">Без пересадок</label>
                        </div>
                        <div className="transfer-filter__item">
                            <input type="checkbox" id="stops_1" name="stops_1" />
                            <label htmlFor="stops_1">1 пересадка</label>
                        </div>
                        <div className="transfer-filter__item">
                            <input type="checkbox" id="stops_2" name="stops_2" />
                            <label htmlFor="stops_2">2 пересадки</label>
                        </div>
                        <div className="transfer-filter__item">
                            <input type="checkbox" id="stops_3" name="stops_3" />
                            <label htmlFor="stops_3">3 пересадки</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = {
    filterChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);