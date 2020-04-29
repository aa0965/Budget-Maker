import React from 'react';
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {startEditExpense} from '../actions/expenses'
import { startRemoveExpense } from '../actions/expenses'
const EditExpense = (props) => {
  const removeHandler = () => {
    props.dispatch(startRemoveExpense({id:props.expense.id}))
    props.history.push('/')
  }
  return (
  <div className='edit'>
    <div className='page-header'>
      <div className='content-container'>
          <h1 className='page-header__title'>Edit Expense</h1>
      </div>
    </div>
    <div className='content-container'>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {

          props.dispatch(startEditExpense(props.expense.id,expense))
          props.history.push('/dashboard')
        }}
        />
      <button className='button remove-button' onClick={removeHandler}>Remove</button>
    </div>


  </div>
)
}


export default connect((state,props) => {
  return {
    expense: state.expenses.find((expense) => props.match.params.id === expense.id)
  }
})(EditExpense);
