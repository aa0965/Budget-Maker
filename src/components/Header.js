import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../actions/login'
const Header = (props) => (
  <header className='header'>
    <div className ='content-container'>
      <div className='header__content'>
        <Link to='/dashboard' className='header__title'>
          <h1 >Budget-Maker</h1>
        </Link>
        <button className='button button--link' onClick={props.signOut}>logout</button>
      </div>
    </div>
  </header>


)

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})

export default connect(undefined,mapDispatchToProps)(Header)
