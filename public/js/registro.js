import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

/* Autenticación */
import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

/* Base de datos */
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

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
//Autenticación
const auth = getAuth(app);
//Base de datos
const db = getFirestore(app);


registrar.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var contra = document.getElementById('contrasena').value;

    var nombreCompleto = document.getElementById('nombreCompleto').value;
    var partes = nombreCompleto.split(' ');
    const nombre = partes[0];
    console.log(nombre);

    createUserWithEmailAndPassword(auth, email, contra).then(cred => {
        //Ordenar antes de conitinuar
        const datos = [
            document.getElementById('nombreCompleto').value,
            document.getElementById('email').value,
            document.getElementById('contrasena').value
        ]
      
        if(datos.every(e => e.trim() !== '')) {
          addDoc(collection(db, "Usuarios"), {
            NombreCompleto: datos[0],
            Email: datos[1],
            Contraseña: datos[2]
          });
        } else {
          mostrarMsj('Complete todos los campos', 'error');
        }

        sendEmailVerification(auth.currentUser).then(() => {
            console.log('Se ha enviado un correo de verificación');
        });

        setTimeout(function() {
            window.location.href = 'login.html';}, 3500);
        mostrarMsj("Ahora puedes iniciar sesión " + nombre);
            
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