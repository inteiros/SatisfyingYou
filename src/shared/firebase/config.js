import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAC5eQLkg_0t39mWrDFMCyB3R77Qcbx2GQ",
  authDomain: "satisfying-you-7b096.firebaseapp.com",
  projectId: "satisfying-you-7b096",
  storageBucket: "satisfying-you-7b096.appspot.com",
  messagingSenderId: "560145060761",
  appId: "1:560145060761:web:860963c3771fffb5d5f908",
  measurementId: "G-QWHG70EN3K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, analytics, auth, firestore, storage};