import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: "a1",
    title: "Macbook pro",
    amount: "250000",
    date: new Date(2020, 1, 20)
  },
  {
    id: "a2",
    title: "Iphone 14 pro",
    amount: "140000",
    date: new Date(2021, 2, 21)
  },
  {
    id: "a3",
    title: "Ipad pro",
    amount: "120000",
    date: new Date(2022, 3, 22)
  },
  {
    id: "a4",
    title: "Apple Watch Ultra",
    amount: "50000",
    date: new Date(2023, 4, 23)
  }
];

const App = () => {
  const [expenses, setExpenseData] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenseData(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };




  return (
    <div>

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
