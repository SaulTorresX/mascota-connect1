//auth.js
import firebase from 'firebase/app';
import 'firebase/auth';

// Inicializar Firebase Auth
const auth = firebase.auth();

// Función para registrar un usuario
async function registerUser(email, password) {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log("Usuario registrado:", user);
        return user;
    } catch (error) {
        console.log("Error al registrar el usuario:", error);
        alert(error.message);
        throw error;
    }
}

// Función para iniciar sesión
async function loginUser(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('Usuario autenticado:', user);
        return user;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert(error.message);
        throw error;
    }
}

// Función para cerrar sesión
async function logoutUser() {
    try {
        await auth.signOut();
        console.log('Usuario cerró sesión');
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        throw error;
    }
}
