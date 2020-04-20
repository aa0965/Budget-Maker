import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
  <div>
    <h1>Budget-Maker</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}> Go Home </NavLink>
    <NavLink to='/help' activeClassName='is-active'> Help </NavLink>
    <NavLink to='/create' activeClassName='is-active'> Create-Expense </NavLink>
    <NavLink to='/edit' activeClassName='is-active'> Edit </NavLink>
  </div>
)

export default Header
