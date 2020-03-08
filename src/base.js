import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCY_SVrxD6APYs82qHnXUjsorjCy25cffU",
    authDomain: "chatbox-app-e9237.firebaseapp.com",
    databaseURL: "https://chatbox-app-e9237.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base