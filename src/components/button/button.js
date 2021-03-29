import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMoreTickets } from '../../actions';


import './style.scss';

class Button extends Component {

    componentDidMount() {
        const btn = document.querySelector(".btn.btn-stretch");
        const { showMoreTickets } = this.props;

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            showMoreTickets();
        });
    }

    render() {
        const { btnText } = this.props;
        return (
            <div className="btn btn-stretch">{btnText}</div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = {
    showMoreTickets
}
export default connect(mapStateToProps, mapDispatchToProps)(Button);