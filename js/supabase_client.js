// supabase-client.js - Cliente de Supabase

// Importar configuración
import { CONFIG } from './config.js';

// Crear cliente Supabase
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Verificar configuración antes de crear el cliente
if (!CONFIG.supabase.url || !CONFIG.supabase.anonKey) {
    console.error('ERROR: Configuración de Supabase incompleta');
}

// Crear y exportar el cliente
export const supabase = createClient(CONFIG.supabase.url, CONFIG.supabase.anonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
});

// Función para probar la conexión
export async function testConnection() {
    try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
            console.error('❌ Error de conexión a Supabase:', error.message);
            
            // Mostrar error en la página si hay un elemento #connection-error
            const errorElement = document.getElementById('connection-error');
            if (errorElement) {
                errorElement.innerHTML = `
                    <div style="background: #fee; padding: 10px; border-radius: 5px; margin: 10px 0;">
                        <strong>Error de conexión:</strong><br>
                        ${error.message}<br><br>
                        <small>Verifica tus credenciales en js/config.js</small>
                    </div>
                `;
            }
            
            return false;
        }
        
        console.log('✅ Conexión a Supabase exitosa');
        return true;
    } catch (error) {
        console.error('❌ Error inesperado:', error);
        return false;
    }
}

// Función para obtener sesión actual
export async function getCurrentSession() {
    try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        return session;
    } catch (error) {
        console.error('Error obteniendo sesión:', error);
        return null;
    }
}

// Inicializar conexión cuando se carga el módulo
document.addEventListener('DOMContentLoaded', () => {
    testConnection();
});