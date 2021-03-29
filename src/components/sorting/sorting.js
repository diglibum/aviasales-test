import React, { Component } from 'react';
import { connect } from "react-redux";
import { sortingChanged } from '../../actions';
import './style.scss';

class Sorting extends Component {
    tabs = [];

    componentDidMount() {
        const { sortingChanged } = this.props;
        this.tabs = document.querySelectorAll(".tabs__item");

        this.tabs.forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                sortingChanged(e.target.getAttribute("id"));
            });
        });

        this.setActiveTab(this.tabs);
    }

    componentDidUpdate() {
        this.setActiveTab(this.tabs);
    }

    setActiveTab(tabs) {
        const { sorting } = this.props;
        let sortingName = "";

        for (let key in sorting) {
            if (sorting[key]) {
                sortingName = key;
            }
        }
        tabs.forEach(item => {
            if (sortingName.length > 0 && item.getAttribute("id") === sortingName) {
                item.classList.add("tabs__item-active");
            }
            else item.classList.remove("tabs__item-active");
        });
    }


    render() {
        return (
            <div className="tabs">
                <div className="tabs__wrapper">
                    <div className="tabs__item" id="cheapest">Самый дешевый</div>
                    <div className="tabs__item tabs__item-active" id="fastest">Самый быстрый</div>
                    <div className="tabs__item" id="optimal">Оптимальный</div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        sorting: state.sorting
    }
}

const mapDispatchToProps = {
    sortingChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);