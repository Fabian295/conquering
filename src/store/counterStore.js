import { legacy_createStore as createStore } from 'redux';


// eslint-disable-next-line import/no-anonymous-default-export
export default function(){

      const counterReducer = (state = {counter: 0}, action) => {
        // console.log('because of the dispatch!')
        switch(action.type) {
          case 'INCREMENT':
            return {
              ...state, counter: state.counter + 1
            }
          case 'DECREMENT':
            return {
              ...state, counter: state.counter - 1
            }
            default:
              return state
        }


    };
    let store = createStore(counterReducer)
    return store
}

