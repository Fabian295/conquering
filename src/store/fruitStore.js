/* eslint-disable import/no-anonymous-default-export */
import { legacy_createStore as createStore } from 'redux';
import fruitReducer from '../reducers/fruitReducer';

export default function() {
  
    const fruitStore = createStore(fruitReducer)
      return fruitStore
}
