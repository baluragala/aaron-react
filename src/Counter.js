import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {incrementAction,decrementAction} from './actions'

class Counter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.inc1}>INC</button>
                <label id="counter">{this.props.counter}</label>
                <button onClick={this.props.dec1}>DEC</button>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}


function mapDispatchToProps(dispatch) {
    return {
        inc1: () => dispatch(incrementAction),
        dec1: () => dispatch(decrementAction)
    }
}

Counter.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
