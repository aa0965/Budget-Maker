import {firebase, googleAuthProvider} from '../firebase/firebase'

export const loginId = (uid) => ({
  type: 'LOGIN',
  uid
})

export const logoutId = () => ({
  type: 'LOGOUT'
})

export const startLogin = () => {
  return () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
}

export const signOut = () => {
  return () => {
    firebase.auth().signOut()
  }
}
