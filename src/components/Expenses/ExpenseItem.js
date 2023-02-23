import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
const ExpenseItem=(props)=> {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <ExpenseDetails amount={props.amount} title={props.title}/>
      
    </Card>
  );
}
export default ExpenseItem;
