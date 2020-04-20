import React from 'react';
import { connect } from 'react-redux'

import { NavLink } from 'react-router-dom'
const ExpenseListItems = (props) => {


  return (
  <div>
    <strong><NavLink to={`/edit/${props.id}`}>{props.description}</NavLink></strong>
  <p>{props.amount} - {props.createAt}</p>
  </div>
)}



export default connect()(ExpenseListItems)
