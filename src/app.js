import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import './styles/styles.scss';
import storeConfig from './store/store'
import {addExpense} from './actions/expenses'
import {setTextField} from './actions/filters'

const store = storeConfig();

store.dispatch(addExpense({description : 'gas bill', amount:800, note: 'pay to get gas', createAt:800}))
store.dispatch(addExpense({description : 'water bill', amount:1000, note: 'pay to get water', createAt:1800}))
store.dispatch(addExpense({description : 'school fees', amount:2800, note: 'pay to get education', createAt:1200}))


console.log(store.getState())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
