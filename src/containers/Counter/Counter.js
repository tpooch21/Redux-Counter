import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => {this.props.onAdd(5)}}  />
                <CounterControl label="Subtract 5" clicked={() => {this.props.onSubtract(5)}}  />
                <CounterControl label="Add 10" clicked={() => {this.props.onAdd(10)}}  />
                <CounterControl label="Subtract 10" clicked={() => {this.props.onSubtract(10)}}  />
                <hr />
                <button onClick={() => {this.props.onStoreResult(this.props.ctr)}}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                       <li key={result.id} onClick={() => {this.props.onDeleteResult(result.id)}}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

// Receives dispatch function as an argument, and assigns it to a prop that will act as the event handler in Counter
// When onIncrementCounter (the prop name) is called, the dispatch function will be called with the relevant action
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd: (value) => dispatch({type: actionTypes.ADD, value}),
        onSubtract: (value) => dispatch({type: actionTypes.SUBTRACT, value}),
        onStoreResult: (counter) => dispatch({type: actionTypes.STORE_RESULT, counter}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, id})
    }
};

// Getting access to the store through connect
export default connect(mapStateToProps, mapDispatchToProps)(Counter);