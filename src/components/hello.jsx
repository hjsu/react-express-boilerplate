import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/clickActions.jsx';

class Hello_ extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Count: {this.props.clicks} </p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }
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

let Hello = connect(mapStateToProps, mapDispatchToProps)(Hello_);
module.exports = Hello;
