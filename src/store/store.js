import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import expenseReducer from '../reducers/expenseReducer'
import filterReducer from '../reducers/filterReducer'
import authReducer from '../reducers/authReducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {

  const store = createStore(combineReducers({
    expenses:expenseReducer,
    filters: filterReducer,
    auth: authReducer
  }),
  composeEnhancers(applyMiddleware(ReduxThunk))
);

  return store;
}
