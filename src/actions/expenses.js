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
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    const {description = '' ,note ='', amount=0, createAt=0} = expenseData;
    const expense = {description ,note, amount, createAt};
    database.ref(`users/${uid}/expenses`).push(expenseData).then((ref) => {
      dispatch(addExpense({
        id:ref.key,
        ...expense
      }))
    })
  }
}


export const editExpense = (id,{description ,note , amount, createAt}) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
})

export const  startEditExpense= (id,expenseData) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid;

    database.ref(`users/${uid}/expenses/${id}`).update(expenseData).then(()=>{
      dispatch(editExpense({
        id,
        ...expense
      }))
    }).catch((e) => {
      console.log(e)
    })



  }
}

export const setExpenses = (expenses) => ({
  type:'SET_EXPENSE',
  expenses
})

export const startSetExpense = () => {
  return (dispatch,getState) => {
 const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses=[];
      snapshot.forEach((shot) => {
        expenses.push({
          id:shot.key,
          ...shot.val()
        })
      })

      dispatch(setExpenses(expenses))
    }).catch((e) => { console.log(e); })

  }
}

export const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = ({id}) => {
  return (dispatch,getState) => {
const uid = getState().auth.uid;
    database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}))
    }).catch((e) => {
      console.log(e)
    })


  }
}
