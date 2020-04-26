import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter,{history} from './routers/AppRouter'
import './styles/styles.scss';
import storeConfig from './store/store'
import {addExpense} from './actions/expenses'
import {startSetExpense} from './actions/expenses'
import {setTextField} from './actions/filters'
import {loginId, logoutId} from './actions/login'
import {firebase } from './firebase/firebase'

const store = storeConfig();

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
  }
  hasRendered = true
}



const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
  ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  
    store.dispatch(loginId(user.uid));
    store.dispatch(startSetExpense()).then(() => {
      renderApp();
        if(history.location.pathname === '/') {history.push('/dashboard') }
    })

  }else{
    store.dispatch(logoutId());
    store.dispatch(startSetExpense()).then(() => {
      renderApp();
    })
    history.push('/');
  }
});
