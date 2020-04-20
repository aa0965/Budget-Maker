import React from 'react';
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {editExpense} from '../actions/expenses'
import { removeExpense } from '../actions/expenses'
const EditExpense = (props) => {
  const removeHandler = () => {
    props.dispatch(removeExpense({id:props.expense.id}))
    props.history.push('/')
  }
  return (
  <div>
    <h3>Edit Expense</h3>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {

        props.dispatch(editExpense(props.expense.id,expense))
        props.history.push('/')
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
