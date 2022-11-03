/* eslint-disable import/no-anonymous-default-export */
import { combineReducers, legacy_createStore as createStore } from "redux";
import filterReducer from '../reducers/filterReducer';
import financeReducer from '../reducers/financeReducer';

// eslint-disable-next-line no-unused-vars
const stateDemo = {
  expenses:[{
    id: '123abc456',
    description: 'Rental Truck',
    note: 'This is a cyber truck',
    amount: '50',
    createdAt: 0
  }],
  filters: {
    keyword: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  }
}


export default () => { 
    let store = createStore(combineReducers( {
      expenses: financeReducer,
      filters: filterReducer
    } ))
    return store
}

/**** Previous setup financeReducer, used in createStore with one reducer ****/

// const financeReducer = (state = [], action) => {
// switch(action.type) {
//   case 'EXPENSES/ADD':
//     return {
//         expense: state.expense + 1
//     }
//   case 'EXPENSES/INCBY':
//     return {
//       expense: state.expense + action.incBy
//     }
//   case 'EXPENSES/MIN':
//     return {
//       expense: state.expense - 1
//     }
//   case 'EXPENSES/DECBY':
//     return {
//       expense: state.expense - action.decBy
//     }
//   case 'EXPENSES/RESET':
//     return {
//       expense: 100
//     }
//     default:
//       return state
//   }
// }