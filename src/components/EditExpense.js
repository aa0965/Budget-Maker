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
  <div>
    <h3>Edit Expense</h3>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {

        props.dispatch(startEditExpense(props.expense.id,expense))
        props.history.push('/dashboard')
      }}
    />
    <button onClick={removeHandler}>Remove</button>
  </div>
)
}


export default connect((state,props) => {
  return {
    expense: state.expenses.find((expense) => props.match.params.id === expense.id)
  }
})(EditExpense);
