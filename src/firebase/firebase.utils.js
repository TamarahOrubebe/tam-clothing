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

export const createUserProfileDocument = async (userAuth, otherData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;

		const createdAt = new Date();

        try {

           await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData,
            });
            
        } catch (error) {
            console.log('error creating user profile', error.message);
        }
		
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;