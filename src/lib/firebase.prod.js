import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyDtkCJiZEUTQIMB3mEiEfRQMn4gisPXrJI",
    authDomain: "netflix-clone-d6240.firebaseapp.com",
    databaseURL: "https://netflix-clone-d6240.firebaseio.com",
    projectId: "netflix-clone-d6240",
    storageBucket: "netflix-clone-d6240.appspot.com",
    messagingSenderId: "1072170844195",
    appId: "1:1072170844195:web:3de37c8a61ad7c06567196",
}

const firebase = Firebase.initializeApp(config)

export { firebase };