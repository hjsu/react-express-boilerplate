import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.jsx';

class Application extends React.Component {
  render() {
    return <Hello/>
  }
}

ReactDOM.render(<Application/>, document.getElementById('application'));
