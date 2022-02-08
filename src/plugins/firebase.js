import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCGsxFtooSiaZ2Rjr4TVJdmpf043Bcghdo",
    authDomain: "joao-todo.firebaseapp.com",
    projectId: "joao-todo",
    storageBucket: "joao-todo.appspot.com",
    messagingSenderId: "148937737625",
    appId: "1:148937737625:web:e8f8b22f58158d220f3f08"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}