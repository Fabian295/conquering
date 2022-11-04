/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from 'uuid';

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

export const addExpense = ({
  description = '',
  note = '',
  amount = '',
  createdAt = ''
}) => {
    return {
      type: 'EXPENSES/ADD',
      expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt,
      }
    }
}

export const removeExpense = ({ id }) => {
  return {
    type: 'EXPENSES/REMOVE',
    id,
  }
}

export  const editExpense = ( id, updates ) => {
  return {
    type: 'EXPENSES/EDIT',
    id,
    updates
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

