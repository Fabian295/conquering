export const addExpense = () => {
    return {
      type: 'EXPENSES/ADD'
    }
}

export const addBY = ({incBy = 25} = {}) => {
  return {
    type: 'EXPENSES/INCBY',
    incBy
  }
}

export const minExpense = () => {
  return {
    type: 'EXPENSES/MIN'
  }
}

export const minBy = ({decBy = 10} = {}) => {
  return {
    type: 'EXPENSES/DECBY',
    decBy
  }
}

export const reset = () => {
  return {
  type: 'EXPENSES/RESET',
  set: 100
  }
}