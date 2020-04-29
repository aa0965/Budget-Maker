import React from 'react';
import {connect} from 'react-redux'
import {startLogin} from '../actions/login'
const Login = (props) => {
  const loginHandler = () => {
    props.startLogin();
  }
  return(
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Budget Maker</h1>
        <p>Its time to get your budget done</p>

        <button className='button' onClick={loginHandler}>Login with Google</button>
      </div>
    </div>
  )
}

const mapStateToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});
export default connect(undefined,mapStateToProps)(Login)
