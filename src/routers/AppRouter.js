import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import React from 'react';
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import ExpenseDashboard from '../components/ExpenseDashboard'
import HelpPage from '../components/HelpPage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true}/>
        <Route  path="/create" component={AddExpense} />
        <Route  path="/edit/:id" component={EditExpense} />
        <Route  path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>

  </Router>
);


export default AppRouter
