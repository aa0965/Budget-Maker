import React from 'react';
import { connect } from 'react-redux'
import {Route ,Redirect} from 'react-router-dom'
import Header from '../components/Header'

const PublicRouter = ({isAuthenticated,component:Component,...rest}) => {
  return(
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
          <Redirect to='/dashboard'/>

        ):(

          <Component {...props}/>
        )
      )}/>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated:!!state.auth.uid
  }
}
export default connect(mapStateToProps)(PublicRouter);
