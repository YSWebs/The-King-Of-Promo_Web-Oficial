// config.js - Configuración de la aplicación

export const CONFIG = {
    supabase: {
        url: 'https://evklgqirlnfiooxwdwdl.supabase.co',
        anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2a2xncWlybG5maW9veHdkd2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzODE3OTcsImV4cCI6MjA4MDk1Nzc5N30.59A5Y_h8uUcil8m6GFjX2fjPJpHuuvlie8_Pes8OlVs'
    },
    app: {
        name: 'Mi Sitio Web',
        version: '1.0.0',
        redirectDelay: 1000 // ms
    }
};

// Función para verificar configuración
export function checkConfig() {
    const { url, anonKey } = CONFIG.supabase;
    
    if (url.includes('https://evklgqirlnfiooxwdwdl.supabase.co') || anonKey.includes('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2a2xncWlybG5maW9veHdkd2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzODE3OTcsImV4cCI6MjA4MDk1Nzc5N30.59A5Y_h8uUcil8m6GFjX2fjPJpHuuvlie8_Pes8OlVs')) {
        console.error('❌ ERROR: Debes configurar tus credenciales de Supabase en js/config.js');
        return false;
    }
    
    if (!url.startsWith('https://') || !url.includes('.supabase.co')) {
        console.error('❌ ERROR: URL de Supabase inválida');
        return false;
    }
    
    console.log('✅ Configuración verificada correctamente');
    return true;
}