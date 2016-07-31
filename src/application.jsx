import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Hello from './components/hello.jsx';
import store from './store.jsx';  

class Application extends React.Component {
  render() {
    return <Hello/>
  }
}

ReactDOM.render(<Provider store={store}><Application/></Provider>, document.getElementById('application'));
