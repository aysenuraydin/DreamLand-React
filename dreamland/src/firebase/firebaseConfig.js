import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { database, firebase, auth, provider, signInWithPopup, signOut  };



// import { database } from './firebase/firebaseConfig';
// import { getDatabase, ref, set, get, update, remove,push, child } from "firebase/database";

// veri ekleme ya da tümünü güncelleme id belirterek
// set(ref(database, "blogs/" + 1), { author: "author 1" })
// set(ref(database, "blogs/" + 2), { author: "author 2" })
// set(ref(database, "blogs/" + 3), { author: "author 3" })
//   //veri ekleme ya da tümünü güncelleme
// set(push(ref(database, "blogs")), { author: "author 4" })


// set(ref(database, "blogs/" + 4), { author: "author 4" })
// .then(
//   //veriyi bir kısmını alma
//   get(ref(database, "blogs/" + 1))
//   .then((snapshot) => { console.log("blogs/1", snapshot.val()) }) 
//   .catch( ),

//   get(ref(database, "blogs"))
//   .then((snapshot) => { console.log("blogs", snapshot.val()) }) 
// )
// //verinin bir kısmın güncelleme
// update(ref(database, "blogs/" + 2), {author:"12"})
// .then( ) .catch() ;

// remove(ref(database, "blogs/" + "-OJ8jmYT9NCD0SXBFWLj"))
// .then( ) .catch( );

// set(ref(database, "tags"), ["react","javascript","angular"])

// //verinin listeleme
// get(ref(database, "tags"))
// .then((snapshot) => { console.log("tags", snapshot.val()) }) 

// Veri Ekleme	set(ref(), {...})
// Veri Okuma	get(ref())
// Veri Güncelleme	update(ref(), {...})
// Veri Silme	remove(ref())