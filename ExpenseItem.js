import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
const ExpenseItem=(props)=> {
  const clickHandler =()=>{
    console.log('clicked!')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <ExpenseDetails amount={props.amount} title={props.title}/>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
export default ExpenseItem;
