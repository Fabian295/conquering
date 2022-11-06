import { v4 as uuidv4 } from 'uuid'

export const addFruit= ({
  fruitName = '',
  price = '',
  origin = '',
  soldBy = '',
}) => {
  return {
    type: 'FRUIT/ADD',
    fruit: {
        id: uuidv4(),
        fruitName,
        price,
        origin,
        soldBy
      }
  }
}