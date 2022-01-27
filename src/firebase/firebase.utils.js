import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
   apiKey: "AIzaSyC35lCODIhCnWvxLkNDC7D8lLxSCKoLYpY",
   authDomain: "vecom-57c03.firebaseapp.com",
   projectId: "vecom-57c03",
   storageBucket: "vecom-57c03.appspot.com",
   messagingSenderId: "787239931299",
   appId: "1:787239931299:web:f606e381d88c3239561e16",
   measurementId: "G-KSK9JMZ6H7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData)=>{
   if (!userAuth) return;
   
   
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   
   
   const snapShot = await userRef.get();
   console.log(snapShot);
   
   
   if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      
      try {
         await userRef.set({
            displayName, 
            email, 
            createdAt
         })
         
      }catch(error){
         console.log('error creating user', error.message);
      }
   }
   
   return userRef;
}


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
