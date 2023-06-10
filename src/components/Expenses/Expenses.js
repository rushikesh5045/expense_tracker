import React, { useState } from "react";

import './Expenses.css'
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import Expenseslist from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }


  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });




  return (
    <div>


      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart  expenses={filteredExpenses}/>
        <Expenseslist items={filteredExpenses} />



      </Card>
    </div>
  )



}


export default Expenses;