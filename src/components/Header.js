import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../actions/login'
const Header = (props) => (
  <div>
    <h1>Budget-Maker</h1>
    <NavLink to='/dashboard' activeClassName='is-active' exact={true}> Go Home </NavLink>
    <NavLink to='/help' activeClassName='is-active'> Help </NavLink>
    <NavLink to='/create' activeClassName='is-active'> Create-Expense </NavLink>
    <NavLink to='/edit' activeClassName='is-active'> Edit </NavLink>
    <button onClick={props.signOut}>logout</button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})

export default connect(undefined,mapDispatchToProps)(Header)
