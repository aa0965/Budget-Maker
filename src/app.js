import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import './styles/styles.scss';
import storeConfig from './store/store'
import {addExpense} from './actions/expenses'
import {setTextField} from './actions/filters'
import './firebase/firebase'
const store = storeConfig();



console.log(store.getState())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
