/* eslint-disable import/no-anonymous-default-export */
import { legacy_createStore as createStore } from "redux";

export default () => {
  const financeReducer = (state = {expense: 100}, action) => {

    switch(action.type) {
      case 'EXPENSES/ADD':
        return {
            expense: state.expense + 10
        }
        default:
          return state
    }

  }
  let store = createStore(financeReducer)
  return store
}