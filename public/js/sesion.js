import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBJLOqK56ZU-1wrhf4LxTOo5r0-_1y4zU4",
    authDomain: "barterapp-e5ea9.firebaseapp.com",
    projectId: "barterapp-e5ea9",
    storageBucket: "barterapp-e5ea9.appspot.com",
    messagingSenderId: "460008545174",
    appId: "1:460008545174:web:2fae08bdfa9d565e3adbb7",
    measurementId: "G-Q1J7QXRCK5"
};

//Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


/* Cerrar sesión */
cerrar.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        alert('Sesion cerrada');
        window.location.href = 'login.html';
    }).catch((error) => {
        alert('Error al cerrar sesión');
    });
});