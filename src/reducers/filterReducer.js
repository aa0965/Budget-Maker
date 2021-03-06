import moment from 'moment'
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate:moment().startOf('month'),
  endDate:moment().endOf('month')
};

export default (state = filterReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FIELD':{
      return {...state,text:action.text}
    };
    case 'SORT_BY_DATE' : {
      return {...state,sortBy:action.sort}
    };
    case 'SORT_BY_AMOUNT' : {
      return {...state,sortBy:action.sort}
    };
    case 'SET_START_DATE': {
      return {...state,startDate:action.date}
    };
    case 'SET_END_DATE': {
      return {...state,endDate:action.date}
    };
    default : return state;
  }
}
