import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC9yZ-jQiT85GN-YaJ9DciSbFi7nCwoiKo",
    authDomain: "retotecnico-2496c.firebaseapp.com",
    projectId: "retotecnico-2496c",
    storageBucket: "retotecnico-2496c.appspot.com",
    messagingSenderId: "1067928043",
    appId: "1:1067928043:web:37e8c2897ded264e7471ae"
  }


  export const firebaseApp = firebase.initializeApp(firebaseConfig)