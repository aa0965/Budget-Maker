import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
  type:'INCREMENT',
  incrementBy
})
const decrementCount = ({decrementBy = 1} = {}) => ({
  type:'DECREMENT',
  decrementBy
})

const countReducers = (
  state={count:0}, action) => {
    switch(action.type){
    case 'INCREMENT':
      return {
        count:state.count+action.incrementBy
      };
      case 'DECREMENT' :

        return {count :state.count-action.decrementBy};
      case 'RESET' :
      return {
        count:-1
      }

      default: return state;
    }
};

const store = createStore(countReducers)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy : 3}))

store.dispatch(decrementCount({decrementBy : 3}))

store.dispatch({
  type:'RESET'
})
