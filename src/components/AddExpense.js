import React from 'react';
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'
import { connect } from 'react-redux'

const AddExpense = (props) => (
  <div>
    <h2>AddExpense</h2>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense))
        props.history.push('/dashboard')
      }}
    />
  </div>
)

export default connect()(AddExpense);
