import firebase from 'firebase' 

const firebaseConfig = {
  apiKey: "AIzaSyCAiYMvdqtSx-e9hWzp9N6yJP9sTzs19UU",
  authDomain: "school-attendance-app-92db0.firebaseapp.com",
  databaseURL: "https://school-attendance-app-92db0-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-92db0",
  storageBucket: "school-attendance-app-92db0.appspot.com",
  messagingSenderId: "980141442270",
  appId: "1:980141442270:web:690389639ffca2481f2e4f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase.database()
  