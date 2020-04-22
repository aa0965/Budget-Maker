import { v1 as uuid } from 'uuid'
import database from '../firebase/firebase'
//component calls action gen
//action return object
//object to store

//instead we dispacth function for firebase CRUD ops redux-thunk

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const  startAddExpense= (expenseData = {}) => {
  return (dispatch) => {
    const {description = '' ,note ='', amount=0, createAt=0} = expenseData;
    const expense = {description ,note, amount, createAt};
    database.ref('expenses').push(expenseData).then((ref) => {
      dispatch(addExpense({
        id:ref.key,
        ...expense
      }))
    })
  }
}

export const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const editExpense = (id,{description ,note , amount, createAt}) => ({
  type: 'EDIT_EXPENSE',
  id,
  update:{
    description,
    note,
    amount,
    createAt
  }
})
