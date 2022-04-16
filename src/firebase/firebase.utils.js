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

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
                ...additionalData,
            });
            
        } catch (error) {
            console.log('error creating user profile', error.message);
        }
		
	}

	return userRef;
};


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();


	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		
		console.log(newDocRef);

		batch.set(newDocRef, obj);

	});

	return await batch.commit();

}


export const convertCollectionsSnapshotToMap = (collections) => {

	const transformedCollection = collections.docs.map(doc => {

		const { title, items } = doc.data()

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		} 

	});
		console.log(transformedCollection);

	return transformedCollection.reduce((acc, collection) => {
		
		acc[collection.title.toLowerCase()] = collection;

		return acc;

	}, {});


}

export const getCurrentUser = () => {

	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject)
	});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();


 export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;