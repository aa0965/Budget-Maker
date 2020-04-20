export const setTextField = ( text= '' ) => ({
  type:'SET_TEXT_FIELD',
  text
})

export const sortByDate = () => ({
  type:'SORT_BY_DATE',
  sort:'date'
})

export const sortByAmount = () => ({
  type:'SORT_BY_AMOUNT',
  sort:'amount'
})

export const setStartDate = (date=undefined) => ({
  type:'SET_START_DATE',
  date
})

export const setEndDate = (date=undefined) => ({
  type:'SET_END_DATE',
  date
})
