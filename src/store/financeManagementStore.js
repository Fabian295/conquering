/* eslint-disable import/no-anonymous-default-export */
import { legacy_createStore as createStore } from "redux";

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


  const financeReducer = (state = [{expense: 0}], action) => {

    switch(action.type) {
      // case 'EXPENSES/ADD':
      //   return {
      //       expense: state.expense + 1
      //   }
      // case 'EXPENSES/INCBY':
      //   return {
      //     expense: state.expense + action.incBy
      //   }
      // case 'EXPENSES/MIN':
      //   return {
      //     expense: state.expense - 1
      //   }
      // case 'EXPENSES/DECBY':
      //   return {
      //     expense: state.expense - action.decBy
      //   }
      // case 'EXPENSES/RESET':
      //   return {
      //     expense: 100
      //   }
        default:
          return state
    }

  }

  export default () => { 
    let store = createStore(financeReducer)
    return store
}