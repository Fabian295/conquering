import Header from './Header';
import Hero from './Hero';
import financeManagementStore from './store/financeManagementStore';
import { addExpense } from './actions/financesActions';
import './App.css';

const store = financeManagementStore()

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addExpense())

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
