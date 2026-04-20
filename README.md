# 🚀 MAERSK - Aplicación de Transporte Marítimo

Una aplicación web moderna y responsiva para gestionar servicios de transporte marítimo y logística global.

---

## ✨ Características Principales

### 🎨 Diseño Moderno
- Interfaz intuitiva y bonita
- Paleta de colores profesional
- Totalmente responsivo (Mobile, Tablet, Desktop)
- Animaciones suaves y transiciones fluidas
- Componentes reutilizables

### 👤 Gestión de Usuarios
- Registro de nuevos usuarios
- Autenticación local con localStorage
- Gestión de perfil personalizado
- Dashboard individual
- Cierre de sesión seguro

### 💻 Servicios Disponibles
- **Editor de Código**: Editor Monaco con vista previa en vivo
- **Contador de TEUs**: Monitoreo de contenedores en tiempo real
- **Información de Empresa**: Landing page con detalles de MAERSK

### 📊 Panel de Control
- Dashboard personalizado para cada usuario
- Estadísticas de envíos
- Acceso rápido a servicios
- Información de rutas y puertos

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── Card.jsx                 # Componente Card reutilizable
├── editor/
│   ├── Editor.jsx              # Editor Monaco principal
│   ├── index.jsx               # Wrapper con Header y mejoras visuales
│   ├── index.module.css        # Estilos específicos del editor
│   └── test/
│       └── 001/
│           ├── index.jsx       # Test component
│           ├── index.js        # Script de test
│           └── style.css       # Estilos de test
├── styles/
│   ├── colors.js               # Paleta de colores y constantes
│   └── globalStyles.js         # Estilos globales
├── Dashboard.jsx               # Panel de control del usuario
├── Profile.jsx                 # Página de perfil del usuario
├── Landing.jsx                 # Página de presentación
├── Home.jsx                    # Página principal
├── SignUp.jsx                  # Página de registro
├── SimplePage.jsx              # Contador de TEUs
├── Header.jsx                  # Componente de encabezado
├── index.jsx                   # Punto de entrada y rutas
└── style.css                   # Estilos globales mejorados
```

---

## 🛣️ Rutas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Landing | Página de bienvenida |
| `/home` | Home | Página principal |
| `/signup` | SignUp | Registro de usuarios |
| `/dashboard` | Dashboard | Panel de control |
| `/profile` | Profile | Gestión de perfil |
| `/editor` | Editor | Editor de código |
| `/simple` | SimplePage | Contador de TEUs |
| `/landing` | Landing | Información de la empresa |
| `/test/*` | Test | Componentes de prueba |

---

## 🗺️ Mapa de Navegación y Flujos

### Estructura General

```
┌─────────────────────────────────────────────────────────────────┐
│                    HEADER (STICKY)                              │
│  Logo MAERSK | Home | Servicios | Contador | Sobre Nosotros   │
│                                    | Registrarse | Perfil       │
└─────────────────────────────────────────────────────────────────┘
                            ↓
         ┌──────────────────┬──────────────────┐
         │                  │                  │
    NO LOGUEADO        LOGUEADO          ADMIN (Future)
         │                  │
    ┌────┴────┐         ┌────┴────┐
    │          │         │          │
  HOME      LANDING   DASHBOARD   PROFILE
    │          │         │          │
    └────┬─────┘         └────┬─────┘
         │                    │
    ┌────▼─────────────────────▼────┐
    │   SERVICIOS DISPONIBLES       │
    ├───────────────────────────────┤
    │ • Editor de Código (/editor)  │
    │ • Contador TEUs (/simple)     │
    │ • Landing Info (/landing)     │
    │ • Test Components (/test/001) │
    └───────────────────────────────┘
```

### Flujos de Usuarios Típicos

#### 👤 Usuario Nuevo
```
Landing → SignUp → Dashboard → (Explorar Servicios)
```

#### 👤 Usuario Loggeado
```
Home → Dashboard/Perfil/Servicios → (Navegar libremente)
```

#### 👤 Exploración
```
Cualquier página → Header Navigation → Cualquier página
```

---

## 📖 Descripción Detallada de Páginas

### 1. Landing Page (/)
- **Descripción**: Página de presentación de MAERSK
- **Características**:
  - Información general sobre la empresa
  - Hero section atractivo
  - Tarjetas de servicios
  - Botones de acción (Comenzar, Conocer Más)
- **Navegación**: Acceso a Inicio, Servicios, Contador, Registrarse

### 2. Home Page (/home)
- **Descripción**: Página principal de la aplicación
- **Características**:
  - Diferentes vistas según si estás loggeado o no
  - Si NO estás loggeado: Botones "Iniciar Sesión" y "Registrarse"
  - Si ESTÁS loggeado: Botones "Mi Dashboard" y "Mi Perfil"
  - Tarjetas con servicios disponibles
- **Rol**: Punto central para acceder a todos los servicios

### 3. Sign Up (/signup)
- **Descripción**: Página de registro de nuevos usuarios
- **Características**:
  - Formulario completo de registro
  - Validaciones:
    - Todos los campos requeridos
    - Contraseña mínimo 6 caracteres
    - Las contraseñas deben coincidir
  - Al registrarse: Guarda el usuario en localStorage y redirige al Dashboard
- **Campos**: Nombre, Email, Empresa, Teléfono, Contraseña

### 4. Dashboard (/dashboard)
- **Descripción**: Panel de control para usuarios loggeados
- **Características**:
  - Bienvenida personalizada con el nombre del usuario
  - Estadísticas rápidas (Mis Envíos, Destinos, Puertos)
  - Tarjetas de servicios (Editor, Contador, Perfil)
  - Acciones rápidas (Nuevo Envío, Descargar App, Contactar Soporte)
- **Rol**: Centro de control de la aplicación

### 5. Profile (/profile)
- **Descripción**: Gestión de perfil personal
- **Características**:
  - Vista y edición de información personal
  - Datos: Nombre, Email, Teléfono, Empresa
  - Sección de Seguridad (Cambiar Contraseña, 2FA)
  - Preferencias de notificaciones
  - Zona de Peligro (Eliminar Cuenta)
- **Persistencia**: Los cambios se guardan en localStorage

### 6. Editor (/editor)
- **Descripción**: Editor de código Monaco con preview en vivo
- **Características**:
  - Panel izquierdo: Editor (JSX, CSS, JS)
  - Panel derecho: Vista previa en vivo (iframe)
  - Soporta múltiples lenguajes
  - Guardado automático con Ctrl+S
  - Cambios en tiempo real

### 7. Contador de TEUs (/simple)
- **Descripción**: Contador interactivo de Unidades Equivalentes de Contenedores
- **Características**:
  - Display grande del contador
  - Botones: Agregar, Restar, Reiniciar
  - Barra de progreso con niveles (Bajo, Medio, Alto)
  - Estadísticas en tiempo real
  - Información educativa sobre TEUs

---

## 🎨 Paleta de Diseño

### Colores Primarios
- **Azul Primario**: `#0056b3` - Acciones principales
- **Verde Secundario**: `#28a745` - Acciones positivas
- **Amarillo Accent**: `#ffc107` - Resaltes e interacciones
- **Rojo Peligro**: `#dc3545` - Acciones peligrosas
- **Cian Info**: `#17a2b8` - Información
- **Naranja Warning**: `#fd7e14` - Advertencias

### Colores Neutros
- **Gris Oscuro**: `#343a40` - Texto principal
- **Gris Claro**: `#f8f9fa` - Fondos
- **Bordes**: `#dee2e6` - Separadores

### Gradientes
- **Gradiente Primario**: Azul degradado para hero sections
- **Gradiente Éxito**: Verde degradado para positivos

### Espaciado Consistente
```javascript
xs: 4px       | Espaciado mínimo
sm: 8px       | Espaciado pequeño
md: 16px      | Espaciado medio (por defecto)
lg: 24px      | Espaciado grande
xl: 32px      | Espaciado extra grande
2xl: 48px     | Espaciado doble
```

### Tipografía
- **Fuente**: `Segoe UI, Tahoma, Geneva, Verdana, sans-serif`
- **Escalas de tamaño**: desde 12px (xs) hasta 36px (4xl)

### Bordes y Sombras
- **Border Radius**: 4px, 8px, 12px, 50% (circular)
- **Sombras**: desde sutiles hasta prominentes
- **Transiciones**: 150ms rápido, 250ms base, 350ms lento

---

## 💻 Cómo Comenzar

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm start
```

### Build
```bash
npm run build
```

---

## 📱 Responsividad

La aplicación es totalmente responsiva con breakpoints:

### Mobile (< 768px)
- Menú condensado
- Stack vertical
- Botones a pantalla completa
- Fuentes optimizadas

### Tablet (768px - 1024px)
- Menú adaptado
- Grid 2 columnas
- Componentes adaptados
- Experiencia intermedia

### Desktop (> 1024px)
- Menú completo
- Grid 3-4 columnas
- Todos los componentes activos
- Máxima experiencia

---

## 💾 Persistencia de Datos

- **Usuario Actual**: Se guarda en `localStorage.usuarioActual`
- **Datos de Perfil**: Se guardan en localStorage
- **Contador**: Se recarga cada vez (no persiste entre sesiones)
- **Editor**: Se sincroniza con el servidor (requiere backend)

---

## 🔐 Seguridad

- Validaciones de formularios en cliente
- Contraseñas con requisitos mínimos (6 caracteres)
- LocalStorage seguro para desarrollo local
- El logout limpia la sesión local
- Los datos se guardan localmente (no es producción)
- **Nota**: Para producción, usar autenticación backend

---

## 🔧 Características Técnicas de Diseño

### Transiciones Y Animaciones

```
Fade In (0.3s)
└─ opacity: 0 → 1, y: 10px → 0

Slide In (0.3s)
└─ x: -20px → 0, opacity: 0 → 1

Hover Card (250ms)
└─ y: 0 → -5px, shadow: base → lg, borderColor: update

Button Hover (250ms)
└─ y: 0 → -2px, shadow: upgrade
```

### Técnicas Implementadas

```
✅ LocalStorage para persistencia
✅ React Hooks (useState, useEffect)
✅ React Router v6
✅ CSS inline styling
✅ Componentes funcionales
✅ Props drilling (header)
✅ Condicionales renderizado
✅ Event handlers
✅ Formularios controlados
✅ Validaciones frontend
✅ Responsive Design
✅ Gradientes y sombras
✅ Transiciones CSS
✅ Iconos Emoji
```

---

## 🌟 Mejoras Implementadas (v1.1.0)

### Rediseño UI/UX
- ✅ Header mejorado con navegación integral
- ✅ Sistema de colores consistente
- ✅ Componentes visuales modernos
- ✅ Animaciones y transiciones suaves
- ✅ Landing page rediseñada
- ✅ Dashboard personalizado
- ✅ Página de perfil completa
- ✅ Contador de TEUs mejorado
- ✅ Editor con wrapper moderno
- ✅ Sistema de estilos reutilizable

---

## 🎯 Próximas Características

- [ ] Autenticación backend con JWT
- [ ] Base de datos para usuarios
- [ ] Sistema de envíos real
- [ ] Seguimiento GPS de contenedores
- [ ] Notificaciones en tiempo real
- [ ] API REST completa
- [ ] Admin panel
- [ ] Reportes avanzados
- [ ] Integración con APIs externas
- [ ] Soporte multiidioma (i18n)

---

## 📊 Diagrama de Componentes

```
┌─────────────────────────────────────────────────────────────┐
│                      ROOT (index.jsx)                       │
│                    + React Router                           │
└────────┬────────────────────────────────────────────────────┘
         │
    ┌────┴───────────────────────────────────┐
    │        Header (Componente Compartido)   │
    │  - Navegación                           │
    │  - Logout                               │
    │  - Información de Usuario               │
    └─────────────────────────────────────────┘
    │
    ├─────────────────┬──────────────────┬──────────────────┐
    │                 │                  │                  │
    ▼                 ▼                  ▼                  ▼
  Landing/home    SignUp            Dashboard            Profile
    │                 │                  │                  │
    └─────────────────┼──────────────────┼──────────────────┘
                      │
        ┌─────────────┴──────────────┐
        │                            │
        ▼                            ▼
      Editor                    SimplePage
      (Monaco)                (Contador TEUs)
```

---

## 🔄 Flujos Detallados de Usuarios

### Scenario 1: Usuario Nuevo

```
┌──► LANDING
│    ├─ "🚀 Comenzar Ahora"
│    └──► SIGNUP
│        ├─ Completa formulario
│        ├─ Submit
│        ├─ Validaciones ✓
│        ├─ Guardar en localStorage
│        └──► DASHBOARD (automático)
│            ├─ Bienvenida personalizada
│            ├─ Servicios disponibles
│            ├─ Estadísticas
│            └─ Botones de acción
```

### Scenario 2: Usuario Explorando

```
┌──► CUALQUIER PÁGINA
│    ├─ Hace click en Header Navigation
│    ├─ "Inicio" → HOME
│    ├─ "Servicios" → EDITOR
│    ├─ "Contador" → SIMPLE
│    ├─ "Sobre Nosotros" → LANDING
│    └─ Puede ir a PROFILE si está logueado
```

### Scenario 3: Usuario En Dashboard

```
┌──► DASHBOARD
│    ├─ Stats (Envíos, Destinos, Puertos)
│    ├─ Servicios
│    │   ├─ Editor de Código ──► EDITOR
│    │   ├─ Contador TEUs ──► SIMPLE
│    │   └─ Mi Perfil ──► PROFILE
│    └─ Acciones Rápidas
│        ├─ Nuevo Envío
│        ├─ Descargar App
│        └─ Contactar Soporte
```

---

## 🌍 Estado Global (localStorage)

```
┌─────────────────────────────────────────┐
│         localStorage                    │
├─────────────────────────────────────────┤
│ usuarioActual: "Sergio y Hugo"                   │
│ email: "SergioHugo@email.com"                 │
│ empresa: "Maersk"                   │
│ telefono: "+34 912 34 56 78"            │
│ contraseña: "***" (solo local)          │
└─────────────────────────────────────────┘
```

---

## 📞 Soporte

Para reportar bugs o sugerencias, contacta al equipo de desarrollo.

---

**Versión**: 1.1.0  
**Última actualización**: Abril 2026  
**Licencia**: Privada - MAERSK  
**Tecnologías**: React 18, React Router v6, CSS Inline, localStorage

¡Gracias por usar MAERSK! 🌍⚓
