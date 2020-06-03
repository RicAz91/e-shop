import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWBhpqlHxTLkoZT92rjwlhzaN7pym0dgU",
    authDomain: "crwn-db-82c60.firebaseapp.com",
    databaseURL: "https://crwn-db-82c60.firebaseio.com",
    projectId: "crwn-db-82c60",
    storageBucket: "crwn-db-82c60.appspot.com",
    messagingSenderId: "299445750320",
    appId: "1:299445750320:web:b48d0a799d0554d5b03bf5",
    measurementId: "G-DS3GSFRTJ1"
  };

  export const createUserProfileDocument = async (userAuth, additionaData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

        try{
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionaData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }

    }
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

