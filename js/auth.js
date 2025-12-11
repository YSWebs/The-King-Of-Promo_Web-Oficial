// auth.js - Funciones de autenticación

import { supabase } from './supabase-client.js';
import { showMessage, redirectTo } from './utils.js';

// Elementos del DOM
let currentUser = null;

// Inicializar autenticación
export async function initAuth() {
    // Escuchar cambios en autenticación
    supabase.auth.onAuthStateChange((event, session) => {
        console.log('Evento de autenticación:', event);
        console.log('Sesión:', session);
        
        currentUser = session?.user || null;
        updateAuthUI();
        
        // Si el evento es SIGNED_IN, redirigir al dashboard
        if (event === 'SIGNED_IN') {
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 500);
        }
    });
    
    // Obtener usuario actual
    const { data: { user } } = await supabase.auth.getUser();
    currentUser = user;
    
    return currentUser;
}

// Actualizar UI según estado de autenticación
export function updateAuthUI() {
    const authLinks = document.getElementById('auth-links');
    const userInfo = document.getElementById('user-info');
    const protectedContent = document.querySelectorAll('.protected');
    
    if (authLinks && userInfo) {
        if (currentUser) {
            // Usuario logueado
            authLinks.style.display = 'none';
            userInfo.style.display = 'block';
            
            const userEmail = document.getElementById('user-email');
            if (userEmail) {
                userEmail.textContent = currentUser.email;
            }
            
            // Mostrar contenido protegido
            protectedContent.forEach(el => {
                el.style.display = 'block';
            });
        } else {
            // Usuario no logueado
            authLinks.style.display = 'block';
            userInfo.style.display = 'none';
            
            // Ocultar contenido protegido
            protectedContent.forEach(el => {
                el.style.display = 'none';
            });
        }
    }
}

// Función para iniciar sesión
export async function login(email, password) {
    try {
        showMessage('login-message', 'Iniciando sesión...', 'info');
        
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password: password
        });

        if (error) throw error;
        
        showMessage('login-message', '¡Inicio de sesión exitoso! Redirigiendo...', 'success');
        return { success: true, user: data.user };
        
    } catch (error) {
        console.error('Error en login:', error);
        
        let errorMessage = 'Error al iniciar sesión';
        if (error.message.includes('Invalid login credentials')) {
            errorMessage = 'Email o contraseña incorrectos';
        } else if (error.message.includes('Email not confirmed')) {
            errorMessage = 'Por favor, verifica tu email antes de iniciar sesión';
        }
        
        showMessage('login-message', errorMessage, 'error');
        return { success: false, error: error.message };
    }
}

// Función para registrarse
export async function register(email, password) {
    try {
        showMessage('register-message', 'Creando cuenta...', 'info');
        
        const { data, error } = await supabase.auth.signUp({
            email: email.trim(),
            password: password,
            options: {
                emailRedirectTo: `${window.location.origin}/dashboard.html`
            }
        });

        if (error) throw error;
        
        if (data.user && !data.session) {
            // Email requiere verificación
            showMessage('register-message', 
                `✅ ¡Cuenta creada!<br><br>
                Hemos enviado un email de verificación a <strong>${email}</strong>.<br>
                Por favor, revisa tu bandeja de entrada y haz clic en el enlace para activar tu cuenta.`, 
                'success');
            return { success: true, needsVerification: true };
        } else {
            // Inicio de sesión automático
            showMessage('register-message', '✅ ¡Cuenta creada exitosamente! Redirigiendo...', 'success');
            return { success: true, needsVerification: false };
        }
        
    } catch (error) {
        console.error('Error en registro:', error);
        
        let errorMessage = 'Error al crear la cuenta';
        if (error.message.includes('User already registered')) {
            errorMessage = 'Este email ya está registrado';
        } else if (error.message.includes('Password should be at least')) {
            errorMessage = 'La contraseña debe tener al menos 6 caracteres';
        }
        
        showMessage('register-message', errorMessage, 'error');
        return { success: false, error: error.message };
    }
}

// Función para cerrar sesión
export async function logout() {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        
        currentUser = null;
        updateAuthUI();
        
        // Redirigir al inicio
        redirectTo('index.html');
        
        return { success: true };
    } catch (error) {
        console.error('Error en logout:', error);
        return { success: false, error: error.message };
    }
}

// Función para obtener usuario actual
export function getCurrentUser() {
    return currentUser;
}

// Inicializar cuando se carga el módulo
document.addEventListener('DOMContentLoaded', async () => {
    await initAuth();
    
    // Hacer logout globalmente accesible
    window.logout = logout;
});