import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.jsx';

class Application extends React.Component {
  render() {
    return <h1>Hello World!</h1>
  }
}

ReactDOM.render(<Application/>, document.getElementById('application'));
