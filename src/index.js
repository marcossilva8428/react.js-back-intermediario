import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer(state = 0, action) {
  if(action.type === 'SOMAR') {
    return state + 1;
  }
  else if(action.type ==='SUBTRAIR'){
    return state -1;
  } else {
    return state;
  }
}

function reducer1(state = 0, action){
  if(action.type === 'SOMAR1') {
    return state + 1;
  } else if(action.type ==='SUBTRAIR1'){
    return state - 1;
  } else{
    return state;
  }
}

const reducers = combineReducers( {reducer, reducer1} )
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);