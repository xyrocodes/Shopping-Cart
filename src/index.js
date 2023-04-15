import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as ServiceWorker from './serviceWorker';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDsl_75r4wXM_uy8R-Lcxq9hIbf1VTVnRE",
    authDomain: "cart-1b027.firebaseapp.com",
    databaseURL: "https://cart-1b027-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cart-1b027",
    storageBucket: "cart-1b027.appspot.com",
    messagingSenderId: "536360928590",
    appId: "1:536360928590:web:7508d942c0199a5aa68a1f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));



// ServiceWorker.unregister();

