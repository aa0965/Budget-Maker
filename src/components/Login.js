import React from 'react';
import {connect} from 'react-redux'
import {startLogin} from '../actions/login'
const Login = (props) => {
  const loginHandler = () => {
    props.startLogin();
  }
  return(
    <div>
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}

const mapStateToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});
export default connect(undefined,mapStateToProps)(Login)
