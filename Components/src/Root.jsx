import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import _store from './Redux/Store';
import App from './App.jsx';

import './Root.css'

const Root = () => {
  return (
    <div className='Wrapper'>
      <Provider store={_store}>
        <App />
      </Provider>
    </div>
  )
}

ReactDOM.render(<Root />,document.getElementById('root'));

