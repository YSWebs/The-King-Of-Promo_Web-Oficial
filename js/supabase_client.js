// Importar Supabase desde CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Obtener configuración desde variables de entorno o configuración directa
const supabaseUrl = 'https://evklgqirlnfiooxwdwdl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2a2xncWlybG5maW9veHdkd2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzODE3OTcsImV4cCI6MjA4MDk1Nzc5N30.59A5Y_h8uUcil8m6GFjX2fjPJpHuuvlie8_Pes8OlVs'

// Crear y exportar el cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Función para verificar conexión
export async function testConnection() {
    try {
        const { data, error } = await supabase.from('_dummy').select('*').limit(1)
        if (error && error.code === 'PGRST116') {
            console.log('✅ Conexión a Supabase exitosa')
            return true
        }
        return false
    } catch (error) {
        console.error('❌ Error conectando a Supabase:', error)
        return false
    }
}