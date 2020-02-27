import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDSUWFDZrURQy8LvGZSlQDewAEv9uUMmH4",
  authDomain: "crwn-e690e.firebaseapp.com",
  databaseURL: "https://crwn-e690e.firebaseio.com",
  projectId: "crwn-e690e",
  storageBucket: "crwn-e690e.appspot.com",
  messagingSenderId: "223295260400",
  appId: "1:223295260400:web:e619c726526035d1e66435",
  measurementId: "G-R6V95W1F8G"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) {
    return;
  } else {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShopt = await userRef.get();
    
    if(!snapShopt.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName, email, createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error happen user ', error.message)
      }
    }
    return userRef;
  }

  
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  // console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    // console.log(newDocRef);
    batch.set(newDocRef, obj);
  })

  return await batch.commit();
}

export const convertCollectionsSnapShotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {})
}

// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;