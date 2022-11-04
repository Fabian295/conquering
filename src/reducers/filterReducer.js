/* eslint-disable import/no-anonymous-default-export */
const filterDefault = {
  keyword: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined,
}

export default (state = filterDefault, action) => {
  switch(action.type) {
    case 'FILTERS/SET_KEYWORD':
      return {
        ...state,
        keyword: action.keyword
      }
    default:
      return state
  }
}


