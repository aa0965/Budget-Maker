import {Router , Route, Switch, NavLink} from 'react-router-dom';
import React from 'react';
import { createBrowserHistory } from 'history';
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import ExpenseDashboard from '../components/ExpenseDashboard'
import HelpPage from '../components/HelpPage'

import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/Login'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

export const history = createBrowserHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>

      <Switch>
        <PublicRouter path='/' component={LoginPage} exact={true}/>
        <PrivateRouter path="/dashboard" component={ExpenseDashboard}/>
        <PrivateRouter  path="/create" component={AddExpense} />
        <PrivateRouter  path="/edit/:id" component={EditExpense} />
        <Route  path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>

  </Router>
);


export default AppRouter
