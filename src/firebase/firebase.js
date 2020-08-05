import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyB2ZhWJgBEAheHGWCrV8nUBJ98U4kNkKs8",
	authDomain: "clone-f77dd.firebaseapp.com",
	databaseURL: "https://clone-f77dd.firebaseio.com",
	projectId: "clone-f77dd",
	storageBucket: "clone-f77dd.appspot.com",
	messagingSenderId: "1037436931826",
	appId: "1:1037436931826:web:c5eef1d5992e2325b88a6b",
	measurementId: "G-BVYFZZF4G4",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
