import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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


/* Iniciar Sesión */
ingresar.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

    signInWithEmailAndPassword(auth, email, contrasena).then(cred => {
        mostrarMsj("Bienvenido");
        setTimeout(function() {
            window.location.href = 'pantalla_principal.html';}, 3500);
        console.log(cred.user);
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/invalid-email')
            mostrarMsj('El correo no es válido', 'error');
        else if(errorCode == 'auth/user-disabled')
            mostrarMsj('El usuario ha sido deshabilitado', 'error');
        else if(errorCode == 'auth/user-not-found')
            mostrarMsj('El usuario no existe', 'error');
        else if(errorCode == 'auth/wrong-password')
            mostrarMsj('Contraseña incorrecta', 'error');
    });
});


/* Iniciar Sesión con Google */
loginGoogle.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();

    try {
        const credenciales = await signInWithPopup(auth, provider)
        console.log(credenciales);
        mostrarMsj("Bienvenido " + credenciales.user.displayName);
        setTimeout(function() {
            window.location.href = 'pantalla_principal.html';}, 3500);
    } catch (error) {
        console.log(error);
    }
});
