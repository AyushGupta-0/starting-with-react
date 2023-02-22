import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Food from './components/Food';
import Petrol from './components/Petrol';
import Movies from './components/Movies';

function App() {
  return (
    <div>
      <h1>let's get started</h1>
      <ExpenseItem></ExpenseItem>
      <Food></Food>
      <Petrol></Petrol>
      <Movies></Movies>
    </div>
  );
}

export default App;
