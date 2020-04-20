import { createStore, combineReducers } from 'redux';
import { v1 as uuid } from 'uuid'

const demoState = {
  expenses: [{
    id: 'poiegfbkebf',
    description: 'college fees',
    note: 'final payment',
    amount: 100000,
    createAt: 0
  }],
  filters: {
    text: 'fees',
    sortBy:'amount',
    selectDate:undefined,
    endDate:undefined
  }
}

//ADD Expense
// const addExpense = ({description = '' ,note ='', amount=0, createAt=0} = {}) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createAt
//   }
// })
//
// const removeExpense = ({id}) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// })
//
// const editExpense = ({id,description ,note , amount, createAt}) => ({
//   type: 'EDIT_EXPENSE',
//   update:{
//     id,
//     description,
//     note,
//     amount,
//     createAt
//   }
// })
//
// const setTextField = ( text= '' ) => ({
//   type:'SET_TEXT_FIELD',
//   text
// })
//
// const sortByDate = () => ({
//   type:'SORT_BY_DATE',
//   sort:'date'
// })
//
// const sortByAmount = () => ({
//   type:'SORT_BY_AMOUNT',
//   sort:'amount'
// })
//
// const setStartDate = (date=undefined) => ({
//   type:'SET_START_DATE',
//   date
// })
//
// const setEndDate = (date=undefined) => ({
//   type:'SET_END_DATE',
//   date
// })

//expense countReducers
// const expenseReducerDefaultState = [];
//
// const expenseReducer = (state = expenseReducerDefaultState, action) => {
//   switch(action.type){
//     case 'ADD_EXPENSE' : {
//       return [...state,action.expense]
//     };
//     case 'REMOVE_EXPENSE' : {
//
//       return state.filter(expense => expense.id!==action.id)
//     };
//     case 'EDIT_EXPENSE' : {
//       return state.map((expense) => {
//         if(expense.id === action.update.id) {
//           return {...expense,...action.update}
//         }
//         else {return expense}
//       })
//     }
//     default : return state;
//   }
// }


//filters
// const filterReducerDefaultState = {
//   text: '',
//   sortBy: 'date',
//   startDate:undefined,
//   endDate:undefined
// };
//
// const filterReducer = (state = filterReducerDefaultState, action) => {
//   switch(action.type){
//     case 'SET_TEXT_FIELD':{
//       return {...state,text:action.text}
//     };
//     case 'SORT_BY_DATE' : {
//       return {...state,sortBy:action.sort}
//     };
//     case 'SORT_BY_AMOUNT' : {
//       return {...state,sortBy:action.sort}
//     };
//     case 'SET_START_DATE': {
//       return {...state,startDate:action.date}
//     };
//     case 'SET_END_DATE': {
//       return {...state,endDate:action.date}
//     };
//     default : return state;
//   }
// }

//get visible expenses
const getVisibleExpenses = (expenses,{text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b) => {
    if(sortBy === 'date'){
      return a.createAt < b.createAt ? 1 : -1;
    }
    else if(sortBy === 'amount'){
      return a.amount > b.amount ? 1 : -1
    }
  })
}
//store creation
const store = createStore(combineReducers({
  expenses:expenseReducer,
  filters: filterReducer
}))

store.subscribe(()=>{
 const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
  console.log(visibleExpenses)
})

const action1 = store.dispatch(addExpense({description : 'tfveu jfh fyb', amount:1000, note: 'fees', createAt:800}))
const action2 = store.dispatch(addExpense({description : 'tfveu jf', amount:100000, note: 'fess', createAt:2007}))

// store.dispatch(removeExpense({id:action2.expense.id}))
// // store.dispatch(editExpense({id:action1.expense.id, amount:107480000, note: 'fess', createAt:2007}))
//
// store.dispatch(setTextField('jfh'));
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());
//
// store.dispatch(setStartDate(225))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(225))
// store.dispatch(setEndDate())
