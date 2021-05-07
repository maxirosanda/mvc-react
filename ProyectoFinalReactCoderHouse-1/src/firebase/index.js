import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyD8sYt1FQRS1X9YBHJzgjcLNmAMAfT1Wx8",
    authDomain: "cursoreactcoderhouse.firebaseapp.com",
    projectId: "cursoreactcoderhouse",
    storageBucket: "cursoreactcoderhouse.appspot.com",
    messagingSenderId: "943657870531",
    appId: "1:943657870531:web:904d3c8ee22f2ec3092e76"
})

export const  getFirebase = () => {
    return app
}
export const getFirestore =() => {
    return firebase.firestore(app)
}