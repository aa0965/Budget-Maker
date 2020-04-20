import React from 'react';
import { connect } from 'react-redux'
import { setTextField, sortByDate, sortByAmount,setStartDate,setEndDate } from '../actions/filters'
import moment from 'moment'
import {DateRangePicker} from 'react-dates'

class ExpenseFilters extends React.Component {
  state = {
    focused: null
  }
  changeHandler = (e) => {
    this.props.dispatch(setTextField(e.target.value))
  }
  sortHandler = (e) => {
    if(e.target.value === 'date') this.props.dispatch(sortByDate())
    else if(e.target.value === 'amount') this.props.dispatch(sortByAmount())
  }
  onDateChange = ({ startDate, endDate }) => {
    
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  render(){
    return (
      <div>
        <input type='text' value={this.props.filters.text} onChange={this.changeHandler}/>
      <select value='date' onChange={this.sortHandler}>
          <option value='date'>date</option>
        <option value='amount'>amount</option>
        </select>
        <DateRangePicker
    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,

    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
    numberOfMonths={1}
    isOutsideRange = {()=>false}
    showClearDates={true}
    onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
    focusedInput={this.state.focused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
    onFocusChange={focused => this.setState({ focused })} // PropTypes.func.isRequired,
  />
      </div>
    )
  }

}

const mapStateToprops = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToprops)(ExpenseFilters)
