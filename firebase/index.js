var firebase = require('firebase/app');
require('firebase/storage');
require('firebase/database');

const apiKey = process.env.FIREBASE_API_KEY_PASTAS_NILO
var firebaseConfig = {
    apiKey: apiKey,
    authDomain: "pastas-nilo.firebaseapp.com",
    databaseURL: "https://pastas-nilo.firebaseio.com",
    projectId: "pastas-nilo",
    storageBucket: "pastas-nilo.appspot.com",
    messagingSenderId: "401150685460",
    appId: "1:401150685460:web:6f2348d646fd06cb551201",
    measurementId: "G-CFBZTT106H"
};
if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

const getData = () => {
    return firebase.database().ref(`pastas/`).once('value').then(snapshot => {
        return snapshot.val()
    })
}

const storage = firebase.storage()
const getImage = (name) => {
    return storage.ref(`/images/`).child(name).getDownloadURL();
}

export { getData, getImage }