import { legacy_createStore as createStore } from 'redux';


// eslint-disable-next-line import/no-anonymous-default-export
export default function(){

      const store = createStore((state = {counter: 0}, action) => {
        // console.log('because of the dispatch!')
        switch(action.type) {
          case 'INCREMENT':
            return {
              counter: state.counter + 1
            }
            default:
              return state
        }


    });

    return store
}
