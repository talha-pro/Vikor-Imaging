import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBkdSktw-ORhHkPdDyptnHfyvHdNsN3Uys',
  authDomain: 'vikor-ce726.firebaseapp.com',
  databaseURL: 'https://vikor-ce726.firebaseio.com',
  projectId: 'vikor-ce726',
  storageBucket: 'vikor-ce726.appspot.com',
  messagingSenderId: '1010018308111',
  appId: '1:1010018308111:web:37c880f06aad7cf4e1937a',
  measurementId: 'G-HZBFL0F4LD',
}

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
// db.settings({timestampsInSnapshots:true});
const functions = fire.functions()
const auth = fire.auth()
const storage = fire.storage()
const { currentUser } = auth

export { fire, db, functions, auth, storage }
