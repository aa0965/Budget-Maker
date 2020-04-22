import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId:process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export {firebase,database as default};

// firebase.database().ref('notes').on('value' ,(snapshot) => {
//   const expenses=[];
//   snapshot.forEach((shot) => {
//     expenses.push({
//       id:shot.key,
//       ...shot.val()
//     })
//   })
//   console.log(expenses)
// })
// firebase.database().ref('notes/-M5WqFU2wZl-U5Z0X_EC').remove()
// firebase.database().ref('notes/').push({
//   title:'to do',
//   body:'go for a tun'
// }).then(()=>{
//   console.log('notes')
// }).catch((e) => {
//   console.log(e)
// })

// firebase.database().ref().once('value').then((snap) => {
//   console.log(snap.val())
// }).catch((e) => {
//   console.log(e)
// })

// firebase.database().ref().on('value',(snap) => {
//    console.log(snap.val())
// })

// firebase.database().ref('location').remove().then(() => {
//   console.log('removed')
// }).catch((e) => {
// console.log(e)})
//
// firebase.database().ref('location').update({
//   city:'Roorkee'
// }).then(()=>{
//   console.log('updated')
// }).catch((e) => {
//   console.log(e)
// })
