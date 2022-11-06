/* eslint-disable no-unused-vars */
import Header from './Header';
import Hero from './Hero';
import financeManagementStore from './store/financeManagementStore';
import { addExpense, editExpense, removeExpense,
  addBY, minExpense, minBy, reset } from './actions/financesActions';
import { setKeywordFilter } from './actions/filterActions';
import fruitStore from './store/fruitStore';
import { addFruit } from './actions/fruitsActions';
import './App.css';

// const store = financeManagementStore()
const store = fruitStore();

store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch(minExpense())
// store.dispatch(addBY({incBy: 25}))
// store.dispatch(minBy({decBy: 10}))
// store.dispatch(reset())

// const exp1 = store.dispatch(addExpense({description: 'Rental Truck', amount: '100'}))
// const exp2 = store.dispatch(addExpense({description: 'Coffee', amount: '16', note: 'This is per bag'}))
// const exp3 = store.dispatch(addExpense({description: 'Test, expense remove test', amount: '1', note: 'This expense was made to be removed as a test!'}))

// store.dispatch(removeExpense({id: exp3.expense.id}))
// store.dispatch(editExpense(exp2.expense.id, { amount: '14' }))
// store.dispatch(editExpense(exp1.expense.id, { amount: '50' }))

store.dispatch(setKeywordFilter('yo_word'))

// store.dispatch(addFruit({ fruitName: 'Mango', price: '2', soldBy: 'Sold per piece', origin: 'India'}))



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
