import Header from './Header';
import Hero from './Hero';
import financeManagementStore from './store/financeManagementStore';
import { addExpense, addBY, minExpense, minBy, reset } from './actions/financesActions';
import './App.css';

const store = financeManagementStore()

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addExpense())
store.dispatch(minExpense())
store.dispatch(addBY({incBy: 25}))
store.dispatch(minBy({decBy: 10}))
store.dispatch(reset())

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
