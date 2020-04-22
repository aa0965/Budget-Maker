import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducer from '../reducers/expenseReducer'
import filterReducer from '../reducers/filterReducer'
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {

  const store = createStore(combineReducers({
    expenses:expenseReducer,
    filters: filterReducer
  }),
  composeEnhancers(applyMiddleware(ReduxThunk))
);

  return store;
}
