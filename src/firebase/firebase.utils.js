import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: "AIzaSyC73tmiBASxldUIgxolx8aPOYO2fQKyJH0",
	authDomain: "tams-clothing.firebaseapp.com",
	projectId: "tams-clothing",
	storageBucket: "tams-clothing.appspot.com",
	messagingSenderId: "403347355765",
	appId: "1:403347355765:web:50be1b57fc6076faa9a03c",
	measurementId: "G-4ZD4LMRXWJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;