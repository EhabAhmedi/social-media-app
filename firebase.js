


// const firebaseConfig = {
//   apiKey: "AIzaSyAsMLNm0ezKj3mELZi8kUpXOOEFy8y5iBM",
//   authDomain: "clone-b2c01.firebaseapp.com",
//   databaseURL: "https://clone-b2c01-default-rtdb.firebaseio.com",
//   projectId: "clone-b2c01",
//   storageBucket: "clone-b2c01.appspot.com",
//   messagingSenderId: "636682341311",
//   appId: "1:636682341311:web:a411e6d71f49550e82af0a",
//   measurementId: "G-90GNBRFLNK"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// export default db;


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsMLNm0ezKj3mELZi8kUpXOOEFy8y5iBM",
  authDomain: "clone-b2c01.firebaseapp.com",
  databaseURL: "https://clone-b2c01-default-rtdb.firebaseio.com",
  projectId: "clone-b2c01",
  storageBucket: "clone-b2c01.appspot.com",
  messagingSenderId: "636682341311",
  appId: "1:636682341311:web:a411e6d71f49550e82af0a",
  measurementId: "G-90GNBRFLNK"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export default db;
export { auth, db };