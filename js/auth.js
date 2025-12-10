import { supabase } from './supabase-client.js'

// Función para iniciar sesión
export async function login(email, password) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password: password
        })

        if (error) throw error
        
        return {
            success: true,
            user: data.user,
            session: data.session
        }
    } catch (error) {
        console.error('Error en login:', error.message)
        return {
            success: false,
            error: error.message
        }
    }
}

// Función para registrarse
export async function register(email, password) {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: email.trim(),
            password: password,
            options: {
                emailRedirectTo: window.location.origin + '/dashboard.html'
            }
        })

        if (error) throw error
        
        return {
            success: true,
            user: data.user,
            session: data.session,
            needsEmailVerification: !data.session
        }
    } catch (error) {
        console.error('Error en registro:', error.message)
        return {
            success: false,
            error: error.message
        }
    }
}

// Función para cerrar sesión
export async function logout() {
    const { error } = await supabase.auth.signOut()
    return { success: !error, error }
}

// Función para obtener usuario actual
export async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()
    return user
}

// Función para verificar si hay sesión activa
export async function isAuthenticated() {
    const user = await getCurrentUser()
    return !!user
}

// Función para proteger rutas
export async function requireAuth(redirectTo = 'login.html') {
    const authenticated = await isAuthenticated()
    if (!authenticated) {
        window.location.href = redirectTo
        return false
    }
    return true
}