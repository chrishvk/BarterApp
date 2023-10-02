import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

import { mostrarMsj } from './mostrarMensaje.js'

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


registrar.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var contra = document.getElementById('contrasena').value;

    var nombreCompleto = document.getElementById('nombreCompleto').value;
    var partes = nombreCompleto.split(' ');
    const nombre = partes[0];
    console.log(nombre);

    createUserWithEmailAndPassword(auth, email, contra).then(cred => {
        setTimeout(function() {
            window.location.href = 'pantalla_principal.html';}, 3500);
        mostrarMsj("Bienvenido " + nombre);
            
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/email-already-in-use')
            mostrarMsj('El correo ya está en uso', 'error');
        else if (errorCode == 'auth/invalid-email')
            mostrarMsj('El correo no es válido', 'error');
        else if (errorCode == 'auth/weak-password')
            mostrarMsj('La contraseña debe tener al menos 6 caracteres', 'error');
    });
});