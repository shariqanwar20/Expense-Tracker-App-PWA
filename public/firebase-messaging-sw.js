/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyDnORyqPlle5Tc39QVO4kWBBeVtuiBWgz8",
    authDomain: "expense-tracker-app-messaging.firebaseapp.com",
    projectId: "expense-tracker-app-messaging",
    storageBucket: "expense-tracker-app-messaging.appspot.com",
    messagingSenderId: "582920089247",
    appId: "1:582920089247:web:3d2cfcec991c236d4d7caa"
  };

firebase.initializeApp(firebaseConfig);

firebase.messaging();