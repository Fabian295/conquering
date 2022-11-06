/* eslint-disable import/no-anonymous-default-export */

const fruitDefault = [{
  fruitName: '',
  price: '',
  origin: '',
  soldBy: ''
}]

export default function fruitReducer(state = [] , action) {
    switch(action.type) {
      case 'FRUIT/ADD':
        return [ 
          ...state,
          // action.fruit,
         { ...action},
        ]
      default:
        return state
    }
}