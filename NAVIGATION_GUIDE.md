# 🚀 Guía de Navegación - MAERSK

## Flujo de la Aplicación

### 1. Landing Page (/)
- **Descripción**: Página de presentación de MAERSK
- **Acceso**: URL raíz de la aplicación
- **Características**:
  - Información general sobre la empresa
  - Hero section atractivo
  - Tarjetas de servicios
  - Botones de acción (Comenzar, Conocer Más)
- **Navegación**: Desde aquí puedes ir a Inicio, Servicios, Contador, Registrarse

### 2. Home Page (/home)
- **Descripción**: Página principal de la aplicación
- **Acceso**: Desde Landing o desde cualquier página mediante el Header
- **Características**:
  - Diferentes vistas según si estás loggeado o no
  - Si NO estás loggeado:
    - Botón "Iniciar Sesión" (simula login)
    - Botón "Registrarse" (lleva a SignUp)
  - Si ESTÁS loggeado:
    - Botón "Mi Dashboard" (acceso rápido al dashboard)
    - Botón "Mi Perfil" (acceso rápido al perfil)
  - Tarjetas con servicios disponibles
- **Navegación**: Punto central para acceder a todos los servicios

### 3. Sign Up (/signup)
- **Descripción**: Página de registro de nuevos usuarios
- **Acceso**: Desde el botón "Registrarse" en cualquier parte
- **Características**:
  - Formulario completo de registro
  - Validaciones:
    - Todos los campos requeridos
    - Contraseña mínimo 6 caracteres
    - Las contraseñas deben coincidir
  - Al registrarse:
    - Guarda el usuario en localStorage
    - Redirige automáticamente al Dashboard
- **Campos**: Nombre, Email, Empresa, Teléfono, Contraseña
- **Navegación**: Después de registrarse, vas automáticamente al Dashboard

### 4. Dashboard (/dashboard)
- **Descripción**: Panel de control para usuarios loggeados
- **Acceso**: Solo si estás loggeado
- **Características**:
  - Bienvenida personalizada con el nombre del usuario
  - Estadísticas rápidas (Mis Envíos, Destinos, Puertos)
  - Tarjetas de servicios disponibles:
    - Editor de Código
    - Contador de TEUs
    - Mi Perfil
  - Acciones rápidas (Nuevo Envío, Descargar App, Contactar Soporte)
- **Seguridad**: Si intentas acceder sin estar loggeado, puedes hacerlo pero con datos vacíos
- **Navegación**: Centro de control de la aplicación

### 5. Profile (/profile)
- **Descripción**: Gestión de perfil personal
- **Acceso**: Desde el Dashboard o desde el Header si estás loggeado
- **Características**:
  - Vista y edición de información personal
  - Nombre, Email, Teléfono, Empresa
  - Sección de Seguridad (Cambiar Contraseña, 2FA)
  - Preferencias de notificaciones
  - Zona de Peligro (Eliminar Cuenta)
  - Botón para editar/guardar cambios
- **Persistencia**: Los cambios se guardan en localStorage
- **Navegación**: Puedes volver a cualquier página desde los links de navegación

### 6. Editor (/editor)
- **Descripción**: Editor de código Monaco con preview en vivo
- **Acceso**: Desde la página de Servicios o desde cualquier link
- **Características**:
  - Panel izquierdo: Editor de código (JSX, CSS, JS)
  - Panel derecho: Vista previa en vivo (iframe)
  - Soporta múltiples lenguajes
  - Guardado automático con Ctrl+S
  - Cambios en tiempo real
- **Navegación**: Links de navegación en la parte inferior

### 7. Contador de TEUs (/simple)
- **Descripción**: Contador interactivo de Unidades Equivalentes de Contenedores
- **Acceso**: Desde cualquier página mediante links
- **Características**:
  - Display grande del contador
  - Botones: Agregar, Restar, Reiniciar
  - Barra de progreso con niveles (Bajo, Medio, Alto)
  - Estadísticas en tiempo real
  - Información educativa sobre TEUs
  - Navegación hacia otros servicios
- **Uso**: Perfecto para monitorear contenedores en tiempo real

---

## 🔀 Flujo Típico de Usuarios

### Usuario Nuevo
1. Llega a Landing Page (/)
2. Click en "Comenzar Ahora" o "Registrarse"
3. Completa formulario en SignUp (/signup)
4. Se guarda automáticamente y va a Dashboard (/dashboard)
5. Puede explorar Servicios, Editor, Perfil, etc.

### Usuario Loggeado
1. Accede a Home (/home)
2. Ve opciones "Mi Dashboard" y "Mi Perfil"
3. Puede navegar entre Dashboard, Perfil, Servicios
4. Puede cerrar sesión desde el Header

### Exploración de Servicios
1. Desde home, puede ir a cualquier servicio
2. Servicios disponibles:
   - Editor: /editor
   - Contador TEUs: /simple
   - Información: /landing

---

## 📱 Responsive Design

La aplicación es totalmente responsiva y se adapta a:
- **Desktop**: Todas las funcionalidades optimizadas
- **Tablet**: Menú adaptado, layout de dos columnas en Editor
- **Mobile**: Navegación condensada, layout de una columna

---

## 💾 Persistencia de Datos

- **Usuario Actual**: Se guarda en `localStorage.usuarioActual`
- **Datos de Perfil**: Se guardan en localStorage
- **Contador**: Se recarga cada vez (no persiste entre sesiones)
- **Editor**: Se sincroniza con el servidor (requiere backend)

---

## 🔐 Seguridad

- Las contraseñas tienen validaciones básicas (mínimo 6 caracteres)
- El logout limpia la sesión local
- El Dashboard muestra datos solo si estás loggeado
- Los datos se guardan localmente (no es producción)

---

## 🎨 Paleta de Colores

- **Primario**: #0056b3 (Azul profesional)
- **Secundario**: #28a745 (Verde)
- **Accent**: #ffc107 (Amarillo/Oro)
- **Peligro**: #dc3545 (Rojo)
- **Info**: #17a2b8 (Cian)
- **Advertencia**: #fd7e14 (Naranja)

---

## 🚀 Próximas Mejoras

- [ ] Conexión real con API backend
- [ ] Autenticación segura (JWT)
- [ ] Gestión de envíos real
- [ ] Seguimiento de contenedores en mapa
- [ ] Notificaciones en tiempo real
- [ ] Integración con bases de datos
- [ ] Sistema de reportes avanzado
- [ ] Soporte multiidioma

---

¡Disfruta explorando la aplicación! 🎉
