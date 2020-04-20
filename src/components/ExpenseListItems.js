import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux'
import numeral from 'numeral'
import { NavLink } from 'react-router-dom'
const ExpenseListItems = (props) => {


  return (
  <div>
    <strong><NavLink to={`/edit/${props.id}`}>{props.description}</NavLink></strong>
  <p>{numeral(props.amount).format('$0,0')}
     -
     {moment(props.createAt).format('Do MMM ,YYYY')}</p>
  </div>
)}



export default connect()(ExpenseListItems)
