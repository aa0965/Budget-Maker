import React from 'react';
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'
import { connect } from 'react-redux'

const AddExpense = (props) => (
  <div>
    <h2>AddExpense</h2>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddExpense);
