import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {Provider} from 'react-redux';
import CreateSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';

const saga= CreateSagaMiddleware();
const store=configureSrore({
  reducer:{}, 
  middleware:[saga]
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

