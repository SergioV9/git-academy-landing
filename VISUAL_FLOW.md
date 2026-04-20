# 🗺️ Mapa de Navegación Visual

## Estructura General De La Aplicación

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

---

## Flujo de Usuarios En Detalle

### 👤 Usuario NO Autenticado

```
                    LANDING (/)
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
   "Comenzar"      "Conocer Más"   "Registrarse"
        │               │               │
        └───────────────┼───────────────┘
                        │
                        ▼
                    HOME (/home)
                        │
            ┌───────────┼───────────┐
            │           │           │
            ▼           ▼           ▼
        SIGNUP      LANDING     SERVICIOS
        (/signup)   (/landing)   (Editor, etc)
```

### 👤 Usuario Autenticado

```
                    HOME (/home)
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
   DASHBOARD        PROFILE      SERVICIOS
   (/dashboard)    (/profile)     (/editor)
        │               │           │
        │   ┌───────────┼───────────┘
        │   │
        └───┼────────────────────────┐
            │ HEADER NAVIGATION      │
            │ (siempre disponible)   │
            └────────────────────────┘
```

---

## Componentes Y Sus Relaciones

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

## Estado Global (localStorage)

```
┌─────────────────────────────────────────┐
│         localStorage                    │
├─────────────────────────────────────────┤
│ usuario Actual: "Juan"                  │
│ email: "juan@email.com"                 │
│ empresa: "Mi Empre sa"                  │
│ telefono: "+34 912 34 56 78"            │
│ contraseña: "***"  (solo local)         │
└─────────────────────────────────────────┘
```

---

## Flujo De Pantallas Paso A Paso

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

## Colores en Contexto

```
┌──────────────────────────────────────────┐
│  Gradiente Azul                          │
│  Landing / Home Hero Sections            │
│  └─ #0056b3 → #003d82                   │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  Botones Primarios                       │
│  Acciones Principales                    │
│  └─ #0056b3 (Azul)                      │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  Botones Secundarios                     │
│  Acciones Positivas                      │
│  └─ #28a745 (Verde)                     │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  Botones Accent                          │
│  Resaltes e Interacciones                │
│  └─ #ffc107 (Amarillo/Oro)              │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  Botones Peligro                         │
│  Acciones que Requieren Cuidado          │
│  └─ #dc3545 (Rojo)                      │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  Información                             │
│  Datos Secundarios                       │
│  └─ #17a2b8 (Cian)                      │
└──────────────────────────────────────────┘
```

---

## Responsive Breakpoints

```
┌─────────────────────────────────────────┐
│  MOBILE  (< 768px)                      │
│  ├─ Menu condensado                     │
│  ├─ Stack vertical                      │
│  ├─ Botones a pantalla completa         │
│  └─ Fuentes optimizadas                 │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  TABLET  (768px - 1024px)               │
│  ├─ Menu adaptado                       │
│  ├─ Grid 2 columnas                     │
│  ├─ Componentes adaptados               │
│  └─ Experiencia intermedia              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  DESKTOP (> 1024px)                     │
│  ├─ Menu completo                       │
│  ├─ Grid 3-4 columnas                   │
│  ├─ Todos los componentes activos       │
│  └─ Máxima experiencia                  │
└─────────────────────────────────────────┘
```

---

## Transiciones Y Animaciones

```
┌─ Fade In (0.3s) ─┐  ┌─ Slide In (0.3s) ──┐
│ opacity: 0 → 1  │  │ x: -20px → 0        │
│ y: 10px → 0     │  │ opacity: 0 → 1      │
└─────────────────┘  └─────────────────────┘

┌─ Hover Card (250ms) ──┐
│ y: 0 → -5px           │
│ shadow: base → lg     │
│ borderColor: update   │
└───────────────────────┘

┌─ Button Hover (250ms) ─┐
│ y: 0  → -2px           │
│ shadow: upgrade        │
└────────────────────────┘
```

---

## Técnicas Implementadas

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
✅ iconos Emoji
```

---

¡Espero que este diagrama te ayude a entender mejor la estructura y el flujo! 🎉
