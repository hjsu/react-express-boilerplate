import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/clickActions.jsx';

const HelloComponent = (props) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Count: {props.clicks} </p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    clicks: state.click.clicks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
  }
}

export const Hello = connect(mapStateToProps, mapDispatchToProps)(HelloComponent);
