import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './components/hello.jsx';
import { Provider } from 'react-redux'
import store from './store.jsx';  

const Application = () => <Hello/>

ReactDOM.render(<Provider store={store}><Application/></Provider>, document.getElementById('application'));
