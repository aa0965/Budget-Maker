import { v1 as uuid } from 'uuid'

export const addExpense = ({description = '' ,note ='', amount=0, createAt=0} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
})

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
