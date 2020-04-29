import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux'
import numeral from 'numeral'
import { NavLink } from 'react-router-dom'
const ExpenseListItems = (props) => {


  return (

    <NavLink className='list-item' to={`/edit/${props.id}`}>
      <div>
        <h3 className='list-item__title'> {props.description} </h3>
        <span className='list-item__subtitle'>  {moment(props.createAt).format('Do MMM ,YYYY')}</span>
      </div>
      <h3 className='list-item__data'>  {numeral(props.amount).format('$0,0')}</h3>

   </NavLink>

)}



export default connect()(ExpenseListItems)
