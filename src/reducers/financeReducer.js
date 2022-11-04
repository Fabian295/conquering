export default function financeReducer(state = [], action) {
  switch(action.type) {
    case 'EXPENSES/ADD':
      return [
        ...state,
        action.expense
      ]
    case 'EXPENSES/REMOVE':
      return state.filter(({id}) => {
        return id !== action.id
      })
      case 'EXPENSES/EDIT':
        return state.map((expense) => {
          if(expense.id === action.id) {
            return {
              ...expense,
              ...action.updates
            }
          }  else {
            return state
          }
        })
      default:
        return state
  }

}
