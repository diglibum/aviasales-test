import React, { Component } from 'react';
import { connect } from "react-redux";
import { sortingChanged } from '../../actions';
import './style.scss';

class Sorting extends Component {
    tabs = [];

    componentDidMount() {
        const { sortingChanged } = this.props;
        this.tabs = document.querySelectorAll(".sorting__tab");

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
                item.classList.add("active-tab");
            }
            else item.classList.remove("active-tab");
        });
    }


    render() {
        return (
            <div className="sorting">
                <ul className="sorting__tabs">
                    <li className="sorting__tab" id="cheapest">Самый дешёвый</li>
                    <li className="sorting__tab" id="fastest">Самый быстрый</li>
                    <li className="sorting__tab" id="optimal">Самый оптимальный</li>
                </ul>
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