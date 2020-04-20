import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info</p>
  </div>
);

const AuthInfo = (Wrapped) => {

  return (props) => (
    <div>
      { props.isAuth ? (<div><p>Authenticated</p>
        <Wrapped />
      </div>)
      :
      (<p>please login</p>) }

    </div>
  )
}

const AutheInfo = AuthInfo(Info)

ReactDOM.render(<AutheInfo isAuth={true} />, document.getElementById('app'))
