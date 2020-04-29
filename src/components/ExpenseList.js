import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItems from './ExpenseListItems'
import expenseSelectItems from '../selectors/expenses'

const ExpenseList = (props) => {

  return (
    <div className='content-container'>
      <div className='list-header'>
        <div className='show-for-mobile'>Expenses</div>
        <div className='show-for-desktop'>Expense</div>
        <div className='show-for-desktop'>Amount</div>
      </div>
     <div className='list-body'>
       {props.expenses.length === 0 ? (
         <div className='list-item--message'>No expenses</div>
       ) : (
         props.expenses.map((expense) => {
           return <ExpenseListItems key = {expense.id } {...expense}/>

         })
       )
     }
     </div>

  </div>
)
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    expenses:expenseSelectItems(state.expenses,state.filters)

  }
}

export default connect(mapStateToProps)(ExpenseList);
