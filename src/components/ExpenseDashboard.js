import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseFilters from './ExpenseFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboard = () => (
  <div>
    ExpenseDashboard
  <ExpensesSummary/>
    <ExpenseFilters />
    <ExpenseList />
  </div>
)

export default ExpenseDashboard;
