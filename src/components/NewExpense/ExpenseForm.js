import React, { useState } from 'react';
import './ExpenseForm.css'


const ExpenseForm = (props) => {
    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredamount, setEnteredAmount] = useState('');
    const [entereddate, setEnteredDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     title : '',
    //     amount : '',
    //     date : ''
    // })


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput((prevState)=>{
        //     return {
        //      ...prevState,
        //      title  : event.target.value
        //     }

        //  })

        //    setUserInput({
        //     ...userInput,
        //     title  : event.target.value
        //    })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)

        // setUserInput((prevState)=>{
        //    return {
        //     ...prevState,
        //     amount  : event.target.value
        //    }

        // })

        // setUserInput({
        //     ...userInput,
        //     amount  : event.target.value
        //    })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)


        // setUserInput((prevState)=>{
        //     return {
        //      ...prevState,
        //      date  : event.target.value
        //     }

        //  })

        // setUserInput({
        //     ...userInput,
        //     date  : event.target.value
        //    })

    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredtitle,
            amount: +enteredamount,
            date: new Date(entereddate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredtitle} onChange={titleChangeHandler} required />

            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredamount} min="0.01" step="0.01" onChange={amountChangeHandler} required />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={entereddate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} required />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>

    </form>

    )
}

export default ExpenseForm;