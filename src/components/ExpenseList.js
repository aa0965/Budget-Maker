import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItems from './ExpenseListItems'
import expenseSelectItems from '../selectors/expenses'

const ExpenseList = (props) => {

  return (
    <div>
      <h1>Expense List</h1>
      {props.expenses.map((expense) => {
        return <ExpenseListItems key = {expense.id } {...expense}/>

      })}

  </div>
)}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    expenses:expenseSelectItems(state.expenses,state.filters)

  }
}

export default connect(mapStateToProps)(ExpenseList);
