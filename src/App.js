import './App.css';
import Header from './components/Header';
import MealsSummary from './components/MealsSummary';
import Input from './components/UI/Input';

function App() {
  return (
    <div className="App">
      <Header />
      <MealsSummary />
      <Input
      label="Amount"
      />
    </div>
  );
}

export default App;
